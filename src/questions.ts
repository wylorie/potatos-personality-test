import { Question } from './types';

const scale = {
  'Very Likely': 1.0,
  'Likely': 0.75,
  'Average': 0.5,
  'Unlikely': 0.25,
  'Very Unlikely': 0.0,
};

export const questions: Question[] = [
  // Big Five - Openness (8 questions)
  { id: 1, question: 'I enjoy exploring new ideas, theories, or abstract concepts.', domain: 'BigFive', target: 'Openness', scale },
  { id: 2, question: 'I have a vivid imagination and enjoy creative activities.', domain: 'BigFive', target: 'Openness', scale },
  { id: 3, question: 'I appreciate art, music, and literature.', domain: 'BigFive', target: 'Openness', scale },
  { id: 4, question: 'I am curious about different cultures and ways of life.', domain: 'BigFive', target: 'Openness', scale },
  { id: 5, question: 'I enjoy philosophical discussions and deep thinking.', domain: 'BigFive', target: 'Openness', scale },
  { id: 6, question: 'I prefer variety and novelty over routine.', domain: 'BigFive', target: 'Openness', scale },
  { id: 7, question: 'I am open to trying new experiences and activities.', domain: 'BigFive', target: 'Openness', scale },
  { id: 8, question: 'I value intellectual curiosity and learning for its own sake.', domain: 'BigFive', target: 'Openness', scale },

  // Big Five - Conscientiousness (8 questions)
  { id: 9, question: 'I am organized and keep things in order.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 10, question: 'I plan ahead and prepare for future events.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 11, question: 'I pay attention to details in my work.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 12, question: 'I follow through on my commitments and promises.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 13, question: 'I am disciplined and self-controlled.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 14, question: 'I prefer to finish tasks before starting new ones.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 15, question: 'I am reliable and dependable.', domain: 'BigFive', target: 'Conscientiousness', scale },
  { id: 16, question: 'I set high standards for myself and my work.', domain: 'BigFive', target: 'Conscientiousness', scale },

  // Big Five - Extraversion (8 questions)
  { id: 17, question: 'I feel comfortable in large social gatherings.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 18, question: 'I enjoy being the center of attention.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 19, question: 'I am talkative and expressive in conversations.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 20, question: 'I feel energized after spending time with others.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 21, question: 'I make friends easily and enjoy meeting new people.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 22, question: 'I am assertive and take charge in group settings.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 23, question: 'I enjoy participating in group activities and events.', domain: 'BigFive', target: 'Extraversion', scale },
  { id: 24, question: 'I prefer action and doing over thinking and reflecting.', domain: 'BigFive', target: 'Extraversion', scale },

  // Big Five - Agreeableness (8 questions)
  { id: 25, question: 'I trust others and believe people are generally good.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 26, question: 'I am sympathetic and care about others\' feelings.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 27, question: 'I avoid conflicts and prefer harmony in relationships.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 28, question: 'I am helpful and willing to assist others.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 29, question: 'I am modest and humble about my achievements.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 30, question: 'I forgive easily and hold few grudges.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 31, question: 'I cooperate well with others in team settings.', domain: 'BigFive', target: 'Agreeableness', scale },
  { id: 32, question: 'I consider others\' needs before my own.', domain: 'BigFive', target: 'Agreeableness', scale },

  // Big Five - Neuroticism (8 questions)
  { id: 33, question: 'I worry frequently about things that might go wrong.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 34, question: 'I experience mood swings and emotional ups and downs.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 35, question: 'I feel stressed or anxious in challenging situations.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 36, question: 'I am sensitive to criticism and negative feedback.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 37, question: 'I struggle with self-doubt and insecurity.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 38, question: 'I feel overwhelmed by daily responsibilities.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 39, question: 'I have difficulty relaxing and letting go of worries.', domain: 'BigFive', target: 'Neuroticism', scale },
  { id: 40, question: 'I react strongly to stressful events or changes.', domain: 'BigFive', target: 'Neuroticism', scale },

  // Cognitive Functions - Ni (Intuitive Introverted) (4 questions)
  { id: 41, question: 'I often have insights or realizations that come to me suddenly.', domain: 'CognitiveFunction', target: 'Ni', scale },
  { id: 42, question: 'I can see patterns and connections that others miss.', domain: 'CognitiveFunction', target: 'Ni', scale },
  { id: 43, question: 'I trust my gut feelings and inner knowing.', domain: 'CognitiveFunction', target: 'Ni', scale },
  { id: 44, question: 'I focus on future possibilities and potential outcomes.', domain: 'CognitiveFunction', target: 'Ni', scale },
  { id: 45, question: 'I prefer depth over breadth when exploring ideas.', domain: 'CognitiveFunction', target: 'Ni', scale },

  // Cognitive Functions - Ne (Intuitive Extraverted) (4 questions)
  { id: 46, question: 'I enjoy brainstorming and generating many ideas quickly.', domain: 'CognitiveFunction', target: 'Ne', scale },
  { id: 47, question: 'I see connections between seemingly unrelated concepts.', domain: 'CognitiveFunction', target: 'Ne', scale },
  { id: 48, question: 'I am excited by new possibilities and opportunities.', domain: 'CognitiveFunction', target: 'Ne', scale },
  { id: 49, question: 'I prefer exploring multiple options rather than committing to one.', domain: 'CognitiveFunction', target: 'Ne', scale },
  { id: 50, question: 'I enjoy theoretical discussions and abstract thinking.', domain: 'CognitiveFunction', target: 'Ne', scale },

  // Cognitive Functions - Si (Sensing Introverted) (4 questions)
  { id: 51, question: 'I have a good memory for details and past experiences.', domain: 'CognitiveFunction', target: 'Si', scale },
  { id: 52, question: 'I prefer familiar routines and established methods.', domain: 'CognitiveFunction', target: 'Si', scale },
  { id: 53, question: 'I notice subtle changes in my environment or routine.', domain: 'CognitiveFunction', target: 'Si', scale },
  { id: 54, question: 'I value tradition and proven approaches.', domain: 'CognitiveFunction', target: 'Si', scale },
  { id: 55, question: 'I compare current experiences to past ones.', domain: 'CognitiveFunction', target: 'Si', scale },

  // Cognitive Functions - Se (Sensing Extraverted) (4 questions)
  { id: 56, question: 'I am highly aware of my physical surroundings.', domain: 'CognitiveFunction', target: 'Se', scale },
  { id: 57, question: 'I enjoy physical activities and hands-on experiences.', domain: 'CognitiveFunction', target: 'Se', scale },
  { id: 58, question: 'I live in the present moment and act on immediate opportunities.', domain: 'CognitiveFunction', target: 'Se', scale },
  { id: 59, question: 'I notice aesthetic details and sensory experiences.', domain: 'CognitiveFunction', target: 'Se', scale },
  { id: 60, question: 'I prefer action and doing over planning and analyzing.', domain: 'CognitiveFunction', target: 'Se', scale },

  // Cognitive Functions - Ti (Thinking Introverted) (4 questions)
  { id: 61, question: 'I enjoy analyzing systems and understanding how things work.', domain: 'CognitiveFunction', target: 'Ti', scale },
  { id: 62, question: 'I value logical consistency and precision in my thinking.', domain: 'CognitiveFunction', target: 'Ti', scale },
  { id: 63, question: 'I question assumptions and seek to understand underlying principles.', domain: 'CognitiveFunction', target: 'Ti', scale },
  { id: 64, question: 'I prefer to work through problems independently.', domain: 'CognitiveFunction', target: 'Ti', scale },
  { id: 65, question: 'I enjoy deconstructing ideas to understand their components.', domain: 'CognitiveFunction', target: 'Ti', scale },

  // Cognitive Functions - Te (Thinking Extraverted) (4 questions)
  { id: 66, question: 'I focus on efficiency and getting things done effectively.', domain: 'CognitiveFunction', target: 'Te', scale },
  { id: 67, question: 'I make decisions based on objective facts and data.', domain: 'CognitiveFunction', target: 'Te', scale },
  { id: 68, question: 'I organize information and resources to achieve goals.', domain: 'CognitiveFunction', target: 'Te', scale },
  { id: 69, question: 'I value competence and results over personal feelings.', domain: 'CognitiveFunction', target: 'Te', scale },
  { id: 70, question: 'I prefer clear structures and systematic approaches.', domain: 'CognitiveFunction', target: 'Te', scale },

  // Cognitive Functions - Fi (Feeling Introverted) (4 questions)
  { id: 71, question: 'I make decisions based on my personal values and beliefs.', domain: 'CognitiveFunction', target: 'Fi', scale },
  { id: 72, question: 'I have a strong sense of my authentic self.', domain: 'CognitiveFunction', target: 'Fi', scale },
  { id: 73, question: 'I am sensitive to my own emotions and inner experience.', domain: 'CognitiveFunction', target: 'Fi', scale },
  { id: 74, question: 'I value authenticity and staying true to myself.', domain: 'CognitiveFunction', target: 'Fi', scale },
  { id: 75, question: 'I prioritize personal meaning over external validation.', domain: 'CognitiveFunction', target: 'Fi', scale },

  // Cognitive Functions - Fe (Feeling Extraverted) (4 questions)
  { id: 76, question: 'I am attuned to others\' emotions and social dynamics.', domain: 'CognitiveFunction', target: 'Fe', scale },
  { id: 77, question: 'I adapt my behavior to maintain harmony in groups.', domain: 'CognitiveFunction', target: 'Fe', scale },
  { id: 78, question: 'I value social connections and relationships.', domain: 'CognitiveFunction', target: 'Fe', scale },
  { id: 79, question: 'I consider how my actions affect others.', domain: 'CognitiveFunction', target: 'Fe', scale },
  { id: 80, question: 'I express emotions openly and encourage others to do the same.', domain: 'CognitiveFunction', target: 'Fe', scale },

  // Enneagram Core Type 1 (3 questions)
  { id: 81, question: 'I strive for perfection and have high standards for myself and others.', domain: 'EnneagramCore', target: '1', scale },
  { id: 82, question: 'I notice mistakes and feel a need to correct them.', domain: 'EnneagramCore', target: '1', scale },
  { id: 83, question: 'I have a strong sense of right and wrong.', domain: 'EnneagramCore', target: '1', scale },

  // Enneagram Core Type 2 (3 questions)
  { id: 84, question: 'I enjoy helping others and meeting their needs.', domain: 'EnneagramCore', target: '2', scale },
  { id: 85, question: 'I feel valued when others appreciate my help and care.', domain: 'EnneagramCore', target: '2', scale },
  { id: 86, question: 'I am attuned to what others need and want.', domain: 'EnneagramCore', target: '2', scale },

  // Enneagram Core Type 3 (3 questions)
  { id: 87, question: 'I am driven to achieve success and recognition.', domain: 'EnneagramCore', target: '3', scale },
  { id: 88, question: 'I adapt my image to fit different situations and audiences.', domain: 'EnneagramCore', target: '3', scale },
  { id: 89, question: 'I am competitive and want to be the best at what I do.', domain: 'EnneagramCore', target: '3', scale },

  // Enneagram Core Type 4 (3 questions)
  { id: 90, question: 'I feel different from others and unique in my identity.', domain: 'EnneagramCore', target: '4', scale },
  { id: 91, question: 'I experience deep emotions and mood swings.', domain: 'EnneagramCore', target: '4', scale },
  { id: 92, question: 'I am drawn to beauty, art, and authentic self-expression.', domain: 'EnneagramCore', target: '4', scale },

  // Enneagram Core Type 5 (3 questions)
  { id: 93, question: 'I need time alone to think and recharge my energy.', domain: 'EnneagramCore', target: '5', scale },
  { id: 94, question: 'I am curious and enjoy learning about topics that interest me.', domain: 'EnneagramCore', target: '5', scale },
  { id: 95, question: 'I conserve my energy and resources carefully.', domain: 'EnneagramCore', target: '5', scale },

  // Enneagram Core Type 6 (3 questions)
  { id: 96, question: 'I worry about potential problems and worst-case scenarios.', domain: 'EnneagramCore', target: '6', scale },
  { id: 97, question: 'I seek security and support from trusted people or systems.', domain: 'EnneagramCore', target: '6', scale },
  { id: 98, question: 'I question authority and look for hidden agendas.', domain: 'EnneagramCore', target: '6', scale },

  // Enneagram Core Type 7 (3 questions)
  { id: 99, question: 'I avoid pain and negative emotions by staying busy and optimistic.', domain: 'EnneagramCore', target: '7', scale },
  { id: 100, question: 'I am enthusiastic and excited about new possibilities.', domain: 'EnneagramCore', target: '7', scale },
  { id: 101, question: 'I have many interests and struggle to commit to just one thing.', domain: 'EnneagramCore', target: '7', scale },

  // Enneagram Core Type 8 (3 questions)
  { id: 102, question: 'I am direct, assertive, and take charge in situations.', domain: 'EnneagramCore', target: '8', scale },
  { id: 103, question: 'I protect myself and others from injustice or harm.', domain: 'EnneagramCore', target: '8', scale },
  { id: 104, question: 'I dislike being controlled or told what to do.', domain: 'EnneagramCore', target: '8', scale },

  // Enneagram Core Type 9 (3 questions)
  { id: 105, question: 'I avoid conflict and prefer to keep things peaceful.', domain: 'EnneagramCore', target: '9', scale },
  { id: 106, question: 'I merge with others\' agendas and lose track of my own needs.', domain: 'EnneagramCore', target: '9', scale },
  { id: 107, question: 'I seek inner and outer peace and harmony.', domain: 'EnneagramCore', target: '9', scale },

  // Enneagram Subtype SP (Self-Preservation) (9 questions)
  { id: 108, question: 'I prioritize my physical comfort and material security.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 109, question: 'I am practical and focus on meeting my basic needs.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 110, question: 'I conserve resources and plan for future security.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 111, question: 'I am independent and self-reliant in taking care of myself.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 112, question: 'I notice when I am hungry, tired, or uncomfortable.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 113, question: 'I prefer stability and predictability in my environment.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 114, question: 'I am cautious about spending money or using resources.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 115, question: 'I take care of my health and physical well-being.', domain: 'EnneagramSubtype', target: 'SP', scale },
  { id: 116, question: 'I feel anxious when my basic needs are not met.', domain: 'EnneagramSubtype', target: 'SP', scale },

  // Enneagram Subtype SO (Social) (9 questions)
  { id: 117, question: 'I am aware of social hierarchies and group dynamics.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 118, question: 'I care about my role and status within groups.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 119, question: 'I adapt my behavior to fit different social contexts.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 120, question: 'I am interested in social causes and collective issues.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 121, question: 'I notice how others perceive me in social settings.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 122, question: 'I value belonging to groups and communities.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 123, question: 'I am concerned with social justice and fairness.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 124, question: 'I understand social norms and expectations.', domain: 'EnneagramSubtype', target: 'SO', scale },
  { id: 125, question: 'I feel connected to larger social movements or causes.', domain: 'EnneagramSubtype', target: 'SO', scale },

  // Enneagram Subtype SX (Sexual/One-to-One) (9 questions)
  { id: 126, question: 'I seek intense, one-on-one connections with others.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 127, question: 'I am drawn to chemistry and attraction in relationships.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 128, question: 'I merge deeply with people I am close to.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 129, question: 'I am competitive and want to be the "special one" in relationships.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 130, question: 'I experience strong attraction and repulsion to people.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 131, question: 'I seek fusion and deep intimacy in my relationships.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 132, question: 'I am energized by intense emotional connections.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 133, question: 'I notice chemistry and tension between people.', domain: 'EnneagramSubtype', target: 'SX', scale },
  { id: 134, question: 'I prefer deep, meaningful connections over casual relationships.', domain: 'EnneagramSubtype', target: 'SX', scale },

  // Enneagram Wings & Tritype (18 questions)
  // These questions help determine wings (neighboring types) and tritype (one from each center: gut 8,9,1 / heart 2,3,4 / head 5,6,7)
  { id: 135, question: 'I am idealistic and want to improve the world around me.', domain: 'EnneagramWingTritype', target: '1', scale },
  { id: 136, question: 'I am warm, caring, and focused on relationships.', domain: 'EnneagramWingTritype', target: '2', scale },
  { id: 137, question: 'I am ambitious and goal-oriented.', domain: 'EnneagramWingTritype', target: '3', scale },
  { id: 138, question: 'I am creative and express my unique identity.', domain: 'EnneagramWingTritype', target: '4', scale },
  { id: 139, question: 'I am independent and value my privacy and autonomy.', domain: 'EnneagramWingTritype', target: '5', scale },
  { id: 140, question: 'I am loyal and seek security through trusted relationships or systems.', domain: 'EnneagramWingTritype', target: '6', scale },
  { id: 141, question: 'I am optimistic and seek new experiences and adventures.', domain: 'EnneagramWingTritype', target: '7', scale },
  { id: 142, question: 'I am powerful and take control of situations.', domain: 'EnneagramWingTritype', target: '8', scale },
  { id: 143, question: 'I am peaceful and avoid conflict and tension.', domain: 'EnneagramWingTritype', target: '9', scale },
  // Additional tritype questions (one from each center)
  { id: 144, question: 'I have strong gut reactions and act on instinct.', domain: 'EnneagramWingTritype', target: 'Gut', scale },
  { id: 145, question: 'I am emotionally expressive and value feelings.', domain: 'EnneagramWingTritype', target: 'Heart', scale },
  { id: 146, question: 'I rely on my thinking and analysis to understand the world.', domain: 'EnneagramWingTritype', target: 'Head', scale },
  // More wing/tritype questions
  { id: 147, question: 'I am perfectionistic and notice flaws in myself and others.', domain: 'EnneagramWingTritype', target: '1', scale },
  { id: 148, question: 'I am helpful and find satisfaction in serving others.', domain: 'EnneagramWingTritype', target: '2', scale },
  { id: 149, question: 'I am efficient and focus on achieving results.', domain: 'EnneagramWingTritype', target: '3', scale },
  { id: 150, question: 'I am introspective and explore my inner emotional world.', domain: 'EnneagramWingTritype', target: '4', scale },
];

