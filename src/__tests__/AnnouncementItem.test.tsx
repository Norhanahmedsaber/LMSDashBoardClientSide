import { render, screen } from '@testing-library/react';
import AnnouncementItem from '../components/AnnouncemetComponent/AnnouncementItem';

describe('AnnouncementItem', () => {
  const mockProps = {
    announcer: 'John Doe',
    department: 'Mathematics',
    content: 'New assignment is posted!',
  };

  it('renders correctly with provided props', () => {
    render(<AnnouncementItem {...mockProps} />);
    
    expect(screen.getByText(mockProps.announcer)).toBeInTheDocument();
    expect(screen.getByText(mockProps.department)).toBeInTheDocument();
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
    expect(screen.getByAltText(`User: ${mockProps.announcer}`)).toBeInTheDocument();
  });
});
