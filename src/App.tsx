import { useState } from 'react';
import { questions } from './questions';
import { calculateScores } from './scoring';
import { AnswerValue } from './types';
import QuestionView from './QuestionView';
import ResultsView from './ResultsView';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, AnswerValue>>(new Map());
  const [results, setResults] = useState<any>(null);

  // Safety check
  if (!questions || questions.length === 0) {
    return (
      <div className="app">
        <header className="app-header">
m           <h1>🥔 Potato's Personality Test</h1>
          <p className="subtitle">Error: Questions not loaded</p>
        </header>
      </div>
    );
  }
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: AnswerValue) => {
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, value);
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      const calculatedResults = calculateScores(questions, newAnswers);
      setResults(calculatedResults);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Map());
    setResults(null);
  };

  if (results) {
    return <ResultsView results={results} onRestart={handleRestart} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🥔 Potato's Personality Test</h1>
        <p className="subtitle">Discover your personality profile</p>
      </header>

      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <QuestionView
        question={currentQuestion}
        currentAnswer={answers.get(currentQuestion.id)}
        onAnswer={handleAnswer}
        onPrevious={currentQuestionIndex > 0 ? handlePrevious : undefined}
      />
    </div>
  );
}

export default App;

