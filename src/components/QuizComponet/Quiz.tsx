import { useState, useEffect } from 'react';
import QuizGrid from './QuizGrid';
import BASE_URL from '../../../config.ts';

const Quiz = () => {
  interface Quiz {
    _id: string; 
    name: string;
    courseName: string;
    courseID: string;
    date: string;
    questions: string[];
  }

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  async function getQuizzes() {
    try {
      const response = await fetch(BASE_URL + "/quiz", {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();   
      console.log(result.data);
      setQuizzes(result.data); // Use the fetched data to update state
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  }

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold font-poppins">Quizzes</h1>
      <QuizGrid quizzes={quizzes} setQuizzes={setQuizzes} />
    </div>
  );
};

export default Quiz;
