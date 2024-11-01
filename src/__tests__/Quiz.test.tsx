import { render, screen, waitFor } from '@testing-library/react';
import Quiz from '../components/QuizComponet/Quiz';
import '@testing-library/jest-dom';
import BASE_URL from '../../config';

// Mocking the fetch function
beforeEach(() => {
    globalThis.fetch = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error
});

afterEach(() => {
    jest.resetAllMocks();
    (console.error as jest.Mock).mockRestore(); // Correct mock restore for console.error
});

test('fetches and displays quizzes', async () => {
    // Mock successful response
    (globalThis.fetch as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                data: [
                    {
                        _id: '1',
                        name: 'Sample Quiz 1',
                        courseName: 'Course 1',
                        courseID: 'C1',
                        date: '2024-01-01',
                        questions: ['Q1', 'Q2']
                    },
                ],
            }),
        } as Response)
    );

    render(<Quiz />);

    // Wait for the quiz title to appear in the document
    await waitFor(() => expect(screen.getByText('Sample Quiz 1')).toBeInTheDocument());

    expect(screen.getByText('Course 1')).toBeInTheDocument();
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/quiz`, { method: 'GET' });
});

test('displays error message on fetch failure', async () => {
    // Mock failed response
    (globalThis.fetch as jest.Mock).mockImplementationOnce(() =>
        Promise.reject(new Error('Failed to fetch'))
    );

    render(<Quiz />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(console.error).toHaveBeenCalledWith("Error fetching quizzes:", expect.any(Error));
});
