import React from 'react';

interface QuizQuestionProps {
  question: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  return (
    <div className=" font-poppins my-2">
      <p>{question}</p>
      <div className="flex space-x-2 mt-1 font-poppins">
        <span className="h-4 w-4 bg-gray-300 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-300 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default QuizQuestion;
