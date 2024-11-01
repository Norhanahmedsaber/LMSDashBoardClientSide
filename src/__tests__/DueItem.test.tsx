import { render, screen } from '@testing-library/react';
import DueItem from '../components/AnnouncemetComponent/DueItem';

describe('DueItem', () => {
  const mockProps = {
    title: 'Unit 1 Quiz',
    course: 'Math 101',
    topic: 'Introduction to Algebra',
    dueDate: '1st Dec 2023 - 10:00 AM',
    buttonText: 'Start Quiz',
  };

  it('renders due item correctly', () => {
    render(<DueItem {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`Course: ${mockProps.course}`)).toBeInTheDocument();
    expect(screen.getByText(`Topic: ${mockProps.topic}`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.dueDate)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: mockProps.buttonText })).toBeInTheDocument();
  });
});
