import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Announcements from './Announcements';
import BASE_URL from '../../../config.ts';
import Due from './Due';

interface Announcement {
  announcer: string;
  department: string;
  content: string;
}

const AnnouncementMain: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const getAnnouncements = async () => {
    try {
      const response = await fetch(`${BASE_URL}/announcement`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setAnnouncements(result.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  const dueItemsData = [
    {
      title: 'Unit 2 Quiz',
      course: 'Physics 02',
      topic: 'Unit 2: Motion and Forces',
      dueDate: '20 Dec 2017 - 09:00 PM',
      buttonText: 'Start Quiz',
    },
    {
      title: '12-12 Assignment',
      course: 'Arabic K12',
      topic: 'مراجعة – التفاعل مع النصوص',
      dueDate: '30 Dec 2017 - 09:00 PM',
      buttonText: 'Solve Assignment',
    },
  ];

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const isExtraSmallScreen = useMediaQuery('(max-width: 480px)');

  return (
    <div className={`flex ${isSmallScreen || isExtraSmallScreen ? 'flex-col' : 'flex-row'} font-poppins items-start w-full max-w-5xl mx-auto space-y-4 md:space-y-0 md:space-x-4 px-4`}>
      <Announcements announcements={announcements} />
      <Due dueItems={dueItemsData} />
    </div>
  );
};

export default AnnouncementMain;
