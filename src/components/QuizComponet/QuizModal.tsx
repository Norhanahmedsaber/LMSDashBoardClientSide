import React from 'react';
import QuizQuestion from './QuizQuestion.tsx';

interface Quiz {
  name: string;
  courseName: string;
  courseID: string;
  questions: string[];
}

interface QuizModalProps {
  quiz: Quiz;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ quiz, onClose }) => {
  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-md p-6 w-11/12 md:w-1/2 relative"
        onClick={handleContentClick} 
      >
        <h2 className="font-bold text-xl mb-4">{quiz.name}</h2>
        <p className="mb-2">Course ID: {quiz.courseID}</p>
        <h3 className="font-semibold">Questions:</h3>
        <div>
          {quiz.questions.map((question, index) => (
            <QuizQuestion key={index} question={question} />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white rounded-md py-2 px-4"
            onClick={onClose} 
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
