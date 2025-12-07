import { PersonalityResults } from './types';
import './ResultsView.css';

interface ResultsViewProps {
  results: PersonalityResults;
  onRestart: () => void;
}

export default function ResultsView({ results, onRestart }: ResultsViewProps) {
  const formatScore = (score: number) => Math.round(score);

  return (
    <div className="results-view">
      <header className="results-header">
        <h1>🥔 Your Personality Profile</h1>
        <button className="restart-button" onClick={onRestart}>
          Take Test Again
        </button>
      </header>

      <div className="results-content">
        {/* MBTI Section */}
        <section className="result-section">
          <h2>MBTI Type</h2>
          <div className="mbti-display">
            <div className="mbti-type">{results.mbtiType}</div>
            <div className="cognitive-stack">
              <h3>Cognitive Function Stack:</h3>
              <ol>
                {results.cognitiveStack.map((func, index) => (
                  <li key={index}>
                    {index === 0 && 'Dominant: '}
                    {index === 1 && 'Auxiliary: '}
                    {index === 2 && 'Tertiary: '}
                    {index === 3 && 'Inferior: '}
                    {func}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Big Five Section */}
        <section className="result-section">
          <h2>Big Five (OCEAN)</h2>
          <div className="big-five-scores">
            {Object.entries(results.bigFive).map(([trait, score]) => (
              <div key={trait} className="trait-bar">
                <div className="trait-label">
                  <span>{trait}</span>
                  <span className="trait-score">{formatScore(score)}%</span>
                </div>
                <div className="trait-bar-container">
                  <div
                    className="trait-bar-fill"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SLOAN & RCOEI Section */}
        <section className="result-section">
          <h2>Alternative Classifications</h2>
          <div className="classification-scores">
            <div className="classification-item">
              <h3>SLOAN</h3>
              <div className="classification-value">{results.sloan}</div>
              <p className="classification-explanation">
                Social/Reserved, Limbic/Calm, Organized/Unorganized, Accommodating/Egocentric, Non-curious/Curious
              </p>
            </div>
            <div className="classification-item">
              <h3>RCOEI</h3>
              <div className="classification-value">{results.rcoei}</div>
              <p className="classification-explanation">
                Reserved/Extraverted, Calm/Anxious, Organized/Unorganized, Egocentric/Accommodating, Inquisitive/Non-inquisitive
              </p>
            </div>
          </div>
        </section>

        {/* Enneagram Section */}
        <section className="result-section">
          <h2>Enneagram</h2>
          <div className="enneagram-display">
            <div className="enneagram-main">
              <div className="enneagram-type">
                Type {results.enneagramType}
                {results.enneagramWing && `w${results.enneagramWing}`}
              </div>
              <div className="enneagram-subtype">
                Subtype: {results.enneagramSubtype}
              </div>
              <div className="enneagram-tritype">
                Tritype: {results.tritype}
              </div>
            </div>
          </div>
        </section>

        {/* Cognitive Functions Detail */}
        <section className="result-section">
          <h2>Cognitive Functions</h2>
          <div className="cognitive-functions-grid">
            {Object.entries(results.cognitiveFunctions)
              .sort(([, a], [, b]) => b - a)
              .map(([func, score]) => (
                <div key={func} className="function-item">
                  <div className="function-label">{func}</div>
                  <div className="function-score">{score.toFixed(2)}</div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

