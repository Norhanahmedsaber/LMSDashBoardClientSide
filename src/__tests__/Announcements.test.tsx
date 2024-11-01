
import { render, screen } from '@testing-library/react';
import Announcements from '../components/AnnouncemetComponent/Announcements';

describe('Announcements', () => {
  const mockAnnouncements = [
    { announcer: 'John Doe', department: 'Math', content: 'New assignment posted!' },
    { announcer: 'Jane Smith', department: 'Science', content: 'Exam next week!' },
  ];

  it('renders the correct number of announcements', () => {
    render(<Announcements announcements={mockAnnouncements} />);
    
    expect(screen.getAllByRole('heading', { level: 6 })).toHaveLength(mockAnnouncements.length);
  });
});
