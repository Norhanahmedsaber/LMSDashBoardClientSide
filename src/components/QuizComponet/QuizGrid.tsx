import React, { useState } from 'react';
import QuizModal from './QuizModal.tsx';
import BASE_URL from '../../../config.ts';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

interface Quiz {
  _id: string; 
  name: string;
  courseName: string;
  courseID: string;
  date: string;
  questions: string[];
}

interface QuizGridProps {
  quizzes: Quiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<Quiz[]>>; 
}

const QuizGrid: React.FC<QuizGridProps> = ({ quizzes, setQuizzes }) => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [_quizDeleted, setQuizDeleted] = useState<boolean>(false); // State to track quiz deletion

  const handleQuizClick = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleCloseModal = () => {
    setSelectedQuiz(null);
  };

  const handleDeleteQuiz = async (quizToDelete: Quiz) => {
    try {
      const response = await fetch(`${BASE_URL}/quiz/${quizToDelete._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update quizzes state to remove the deleted quiz
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizToDelete._id));
        setQuizDeleted(true); // Set quizDeleted to true
        toast.success("Quiz deleted successfully!"); // Show success toast message
      } else {
        console.error('Failed to delete the quiz');
        toast.error("Failed to delete the quiz."); // Show error toast message
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
      toast.error("Error deleting quiz."); // Show error toast message
    }
  };

  const handleEditQuiz = (quizToEdit: Quiz) => {
    // Open a modal or navigate to an edit page, or handle edit logic here
    console.log(`Editing quiz: ${quizToEdit.name}`);
  };

  return (
    <div>
      <ToastContainer /> {/* Include the ToastContainer for rendering toasts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-poppins">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id} // Use _id as the key
            className="border rounded-md p-4 cursor-pointer hover:bg-gray-100 transition relative"
            onClick={() => handleQuizClick(quiz)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{quiz.name}</h3>
              <div className="flex space-x-2">
                <img src='../../../public/pen.png'
                  className="text-blue-500 cursor-pointer hover:text-blue-700 h-[1.25rem] w-[1.25rem]"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEditQuiz(quiz);
                  }}
                />
                <img src='../../../public/delete.png'
                  className="text-red-500 cursor-pointer hover:text-red-700 h-[1.25rem] w-[1.25rem]"
                  aria-label="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteQuiz(quiz);
                  }}
                />
              </div>
            </div>
            <h1>{quiz.date}</h1>
            <p>{quiz.courseName}</p>
          </div>
        ))}
        <div className="border rounded-md p-4 cursor-pointer hover:bg-gray-100 transition flex justify-center items-center relative"> 
          <img className='flex justify-between items-center h-[3rem] w-[3rem]' src='../../../public/add.png'/>
        </div>
        {selectedQuiz && <QuizModal quiz={selectedQuiz} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default QuizGrid;
