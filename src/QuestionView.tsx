import { Question, AnswerValue } from './types';
import './QuestionView.css';

interface QuestionViewProps {
  question: Question;
  currentAnswer: AnswerValue | undefined;
  onAnswer: (value: AnswerValue) => void;
  onPrevious?: () => void;
}

const answerOptions: AnswerValue[] = [
  'Very Likely',
  'Likely',
  'Average',
  'Unlikely',
  'Very Unlikely',
];

export default function QuestionView({
  question,
  currentAnswer,
  onAnswer,
  onPrevious,
}: QuestionViewProps) {
  return (
    <div className="question-view">
      <div className="question-card">
        <h2 className="question-text">{question.question}</h2>
        
        <div className="answer-options">
          {answerOptions.map((option) => (
            <button
              key={option}
              className={`answer-button ${currentAnswer === option ? 'selected' : ''}`}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {onPrevious && (
          <button className="previous-button" onClick={onPrevious}>
            ← Previous
          </button>
        )}
      </div>
    </div>
  );
}

