import { render, screen, fireEvent } from '@testing-library/react';
import QuizModal from '../components/QuizComponet/QuizModal';

const mockQuiz = { name: 'Quiz 1', courseName: 'Course 1', courseID: 'C1', questions: ['Question 1', 'Question 2'] };
const mockOnClose = jest.fn();

describe('QuizModal Component', () => {
  test('renders quiz details', () => {
    render(<QuizModal quiz={mockQuiz} onClose={mockOnClose} />);
    
    expect(screen.getByText('Quiz 1')).toBeInTheDocument();
    expect(screen.getByText('Course ID: C1')).toBeInTheDocument();
  });

  test('closes modal on button click', () => {
    render(<QuizModal quiz={mockQuiz} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});
