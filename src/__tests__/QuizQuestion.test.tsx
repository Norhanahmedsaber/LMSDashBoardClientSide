import { render, screen } from '@testing-library/react';
import QuizQuestion from '../components/QuizComponet/QuizQuestion';

const mockQuestion = 'What is your name?';

describe('QuizQuestion Component', () => {
  test('renders the question', () => {
    render(<QuizQuestion question={mockQuestion} />);
    
    expect(screen.getByText(mockQuestion)).toBeInTheDocument();
  });
});
