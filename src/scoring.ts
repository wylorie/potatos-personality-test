import {
  AnswerValue,
  BigFiveScores,
  CognitiveFunctionScores,
  EnneagramScores,
  EnneagramSubtypeScores,
  EnneagramType,
  EnneagramSubtype,
  PersonalityResults,
  Question,
} from './types';

const answerScale: Record<AnswerValue, number> = {
  'Very Likely': 1.0,
  'Likely': 0.75,
  'Average': 0.5,
  'Unlikely': 0.25,
  'Very Unlikely': 0.0,
};

export function calculateScores(
  questions: Question[],
  answers: Map<number, AnswerValue>
): PersonalityResults {
  // Initialize score accumulators
  const bigFive: BigFiveScores = {
    Openness: 0,
    Conscientiousness: 0,
    Extraversion: 0,
    Agreeableness: 0,
    Neuroticism: 0,
  };

  const cognitiveFunctions: CognitiveFunctionScores = {
    Ni: 0,
    Ne: 0,
    Si: 0,
    Se: 0,
    Ti: 0,
    Te: 0,
    Fi: 0,
    Fe: 0,
  };

  const enneagram: EnneagramScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  const enneagramSubtypes: EnneagramSubtypeScores = {
    SP: 0,
    SO: 0,
    SX: 0,
  };

  const wingTritype: EnneagramScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  let gutScore = 0;
  let heartScore = 0;
  let headScore = 0;

  // Process each question
  questions.forEach((question) => {
    const answer = answers.get(question.id);
    if (!answer) return;

    const score = answerScale[answer];

    switch (question.domain) {
      case 'BigFive':
        if (question.target in bigFive) {
          bigFive[question.target as keyof BigFiveScores] += score;
        }
        break;

      case 'CognitiveFunction':
        if (question.target in cognitiveFunctions) {
          cognitiveFunctions[question.target as keyof CognitiveFunctionScores] += score;
        }
        break;

      case 'EnneagramCore':
        const coreType = parseInt(question.target) as EnneagramType;
        if (coreType >= 1 && coreType <= 9) {
          enneagram[coreType] += score;
        }
        break;

      case 'EnneagramSubtype':
        if (question.target in enneagramSubtypes) {
          enneagramSubtypes[question.target as EnneagramSubtype] += score;
        }
        break;

      case 'EnneagramWingTritype':
        if (question.target === 'Gut') {
          gutScore += score;
        } else if (question.target === 'Heart') {
          heartScore += score;
        } else if (question.target === 'Head') {
          headScore += score;
        } else {
          const wingType = parseInt(question.target) as EnneagramType;
          if (wingType >= 1 && wingType <= 9) {
            wingTritype[wingType] += score;
          }
        }
        break;
    }
  });

  // Normalize Big Five scores to 0-100
  const normalizedBigFive: BigFiveScores = {
    Openness: normalizeScore(bigFive.Openness, 8),
    Conscientiousness: normalizeScore(bigFive.Conscientiousness, 8),
    Extraversion: normalizeScore(bigFive.Extraversion, 8),
    Agreeableness: normalizeScore(bigFive.Agreeableness, 8),
    Neuroticism: normalizeScore(bigFive.Neuroticism, 8),
  };

  // Determine MBTI type from cognitive functions
  const mbtiResult = determineMBTI(cognitiveFunctions);
  
  // Determine Enneagram type
  const enneagramType = getHighestScore(enneagram) as EnneagramType;
  
  // Determine Enneagram wing
  const enneagramWing = determineWing(enneagramType, enneagram, wingTritype);
  
  // Determine Enneagram subtype
  const enneagramSubtype = getHighestSubtype(enneagramSubtypes);
  
  // Determine Tritype
  const tritype = determineTritype(enneagram, wingTritype);
  
  // Calculate SLOAN and RCOEI
  const sloan = calculateSLOAN(normalizedBigFive);
  const rcoei = calculateRCOEI(normalizedBigFive);

  return {
    bigFive: normalizedBigFive,
    cognitiveFunctions,
    mbtiType: mbtiResult.type,
    cognitiveStack: mbtiResult.stack,
    enneagramType,
    enneagramWing,
    enneagramSubtype,
    tritype,
    sloan,
    rcoei,
  };
}

function normalizeScore(score: number, maxQuestions: number): number {
  const maxScore = maxQuestions * 1.0; // Maximum possible score
  return Math.round((score / maxScore) * 100);
}

function determineMBTI(functions: CognitiveFunctionScores): { type: string; stack: string[] } {
  // Rank functions by score
  const ranked = Object.entries(functions)
    .map(([func, score]) => ({ func, score }))
    .sort((a, b) => b.score - a.score);

  // Determine preferences
  const intuition = functions.Ni + functions.Ne;
  const sensing = functions.Si + functions.Se;
  const thinking = functions.Ti + functions.Te;
  const feeling = functions.Fi + functions.Fe;

  const nOrS = intuition > sensing ? 'N' : 'S';
  const tOrF = thinking > feeling ? 'T' : 'F';

  // Determine E/I based on dominant function
  const dominant = ranked[0].func;
  const isExtraverted = ['Ne', 'Se', 'Te', 'Fe'].includes(dominant);
  const eOrI = isExtraverted ? 'E' : 'I';

  // Determine J/P based on extraverted function
  const extravertedFunc = ranked.find((f) => ['Ne', 'Se', 'Te', 'Fe'].includes(f.func));
  if (extravertedFunc) {
    const isJudging = ['Te', 'Fe'].includes(extravertedFunc.func);
    const jOrP = isJudging ? 'J' : 'P';
    const mbtiType = eOrI + nOrS + tOrF + jOrP;
    
    // Build cognitive stack
    const stack = buildCognitiveStack(mbtiType, ranked);
    return { type: mbtiType, stack };
  }

  // Fallback
  const mbtiType = eOrI + nOrS + tOrF + 'X';
  return { type: mbtiType, stack: ranked.slice(0, 4).map((r) => r.func) };
}

function buildCognitiveStack(mbtiType: string, ranked: Array<{ func: string; score: number }>): string[] {
  // MBTI cognitive stack patterns
  const stackPatterns: Record<string, string[]> = {
    'INTJ': ['Ni', 'Te', 'Fi', 'Se'],
    'INTP': ['Ti', 'Ne', 'Si', 'Fe'],
    'ENTJ': ['Te', 'Ni', 'Se', 'Fi'],
    'ENTP': ['Ne', 'Ti', 'Fe', 'Si'],
    'INFJ': ['Ni', 'Fe', 'Ti', 'Se'],
    'INFP': ['Fi', 'Ne', 'Si', 'Te'],
    'ENFJ': ['Fe', 'Ni', 'Se', 'Ti'],
    'ENFP': ['Ne', 'Fi', 'Te', 'Si'],
    'ISTJ': ['Si', 'Te', 'Fi', 'Ne'],
    'ISFJ': ['Si', 'Fe', 'Ti', 'Ne'],
    'ESTJ': ['Te', 'Si', 'Ne', 'Fi'],
    'ESFJ': ['Fe', 'Si', 'Ne', 'Ti'],
    'ISTP': ['Ti', 'Se', 'Ni', 'Fe'],
    'ISFP': ['Fi', 'Se', 'Ni', 'Te'],
    'ESTP': ['Se', 'Ti', 'Fe', 'Ni'],
    'ESFP': ['Se', 'Fi', 'Te', 'Ni'],
  };

  // If we have a known pattern, use it; otherwise use ranked scores
  if (stackPatterns[mbtiType]) {
    return stackPatterns[mbtiType];
  }

  // Fallback: use top 4 functions from scores
  const stack: string[] = [];
  const used: Set<string> = new Set();

  for (const { func } of ranked) {
    if (stack.length < 4 && !used.has(func)) {
      stack.push(func);
      used.add(func);
    }
  }

  return stack;
}

function getHighestScore(scores: EnneagramScores): EnneagramType {
  let maxScore = -1;
  let maxType: EnneagramType = 1;

  for (let i = 1; i <= 9; i++) {
    const type = i as EnneagramType;
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      maxType = type;
    }
  }

  return maxType;
}

function determineWing(
  coreType: EnneagramType,
  coreScores: EnneagramScores,
  wingScores: EnneagramScores
): EnneagramType | null {
  // Wings are neighboring types (1↔2, 2↔1/3, 3↔2/4, etc., with 9↔1)
  const neighbors: Record<EnneagramType, EnneagramType[]> = {
    1: [9, 2],
    2: [1, 3],
    3: [2, 4],
    4: [3, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [7, 9],
    9: [8, 1],
  };

  const possibleWings = neighbors[coreType];
  const combinedScores = possibleWings.map((wing) => ({
    type: wing,
    score: coreScores[wing] + wingScores[wing],
  }));

  combinedScores.sort((a, b) => b.score - a.score);
  return combinedScores[0].score > 0 ? combinedScores[0].type : null;
}

function getHighestSubtype(scores: EnneagramSubtypeScores): EnneagramSubtype {
  if (scores.SP >= scores.SO && scores.SP >= scores.SX) return 'SP';
  if (scores.SO >= scores.SX) return 'SO';
  return 'SX';
}

function determineTritype(
  coreScores: EnneagramScores,
  wingScores: EnneagramScores
): string {
  // Combine core and wing scores
  const combined: EnneagramScores = {
    1: coreScores[1] + wingScores[1],
    2: coreScores[2] + wingScores[2],
    3: coreScores[3] + wingScores[3],
    4: coreScores[4] + wingScores[4],
    5: coreScores[5] + wingScores[5],
    6: coreScores[6] + wingScores[6],
    7: coreScores[7] + wingScores[7],
    8: coreScores[8] + wingScores[8],
    9: coreScores[9] + wingScores[9],
  };

  // Get highest from each center
  // Gut center: 8, 9, 1
  const gutTypes = [8, 9, 1] as EnneagramType[];
  const gutHighest = gutTypes.reduce((max, type) =>
    combined[type] > combined[max] ? type : max
  );

  // Heart center: 2, 3, 4
  const heartTypes = [2, 3, 4] as EnneagramType[];
  const heartHighest = heartTypes.reduce((max, type) =>
    combined[type] > combined[max] ? type : max
  );

  // Head center: 5, 6, 7
  const headTypes = [5, 6, 7] as EnneagramType[];
  const headHighest = headTypes.reduce((max, type) =>
    combined[type] > combined[max] ? type : max
  );

  // Return tritype (usually ordered by strength, but simplified here)
  return `${gutHighest}${heartHighest}${headHighest}`;
}

function calculateSLOAN(bigFive: BigFiveScores): string {
  // SLOAN: Social, Limbic, Organized, Accommodating, Non-curious
  // Based on: Extraversion, Neuroticism, Conscientiousness, Agreeableness, Openness (inverted)
  const social = bigFive.Extraversion >= 50 ? 'S' : 'R'; // Reserved
  const limbic = bigFive.Neuroticism >= 50 ? 'L' : 'C'; // Calm
  const organized = bigFive.Conscientiousness >= 50 ? 'O' : 'U'; // Unorganized
  const accommodating = bigFive.Agreeableness >= 50 ? 'A' : 'E'; // Egocentric
  const nonCurious = bigFive.Openness < 50 ? 'N' : 'C'; // Curious

  return `${social}${limbic}${organized}${accommodating}${nonCurious}`;
}

function calculateRCOEI(bigFive: BigFiveScores): string {
  // RCOEI: Reserved, Calm, Organized, Egocentric, Inquisitive
  // Based on: Extraversion (inverted), Neuroticism (inverted), Conscientiousness, Agreeableness (inverted), Openness
  const reserved = bigFive.Extraversion < 50 ? 'R' : 'E'; // Extraverted
  const calm = bigFive.Neuroticism < 50 ? 'C' : 'A'; // Anxious
  const organized = bigFive.Conscientiousness >= 50 ? 'O' : 'U'; // Unorganized
  const egocentric = bigFive.Agreeableness < 50 ? 'E' : 'A'; // Accommodating
  const inquisitive = bigFive.Openness >= 50 ? 'I' : 'N'; // Non-inquisitive

  return `${reserved}${calm}${organized}${egocentric}${inquisitive}`;
}

