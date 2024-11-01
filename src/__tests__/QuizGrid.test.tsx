import { render, screen } from '@testing-library/react';
import QuizGrid from '../components/QuizComponet/QuizGrid';

const mockQuizzes = [
  { _id: '1', name: 'Quiz 1', courseName: 'Course 1', courseID: 'C1', date: '2024-11-01', questions: [] },
];

const mockSetQuizzes = jest.fn();

describe('QuizGrid Component', () => {
  let originalFetch: typeof fetch;

  beforeEach(() => {
    // Keep a reference to the original fetch
    originalFetch = globalThis.fetch;

    // Create a mock implementation of fetch
    globalThis.fetch = jest.fn() as jest.Mock;
  });

  afterEach(() => {
    // Restore the original fetch after each test
    globalThis.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  test('renders quizzes', () => {
    render(<QuizGrid quizzes={mockQuizzes} setQuizzes={mockSetQuizzes} />);
    expect(screen.getByText('Quiz 1')).toBeInTheDocument();
  });

});
