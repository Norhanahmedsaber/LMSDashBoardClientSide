import React from 'react';
import { useMediaQuery } from '@mui/material';

interface Announcement {
  announcer: string;
  department: string;
  content: string;
}

const AnnouncementItem: React.FC<Announcement> = ({ announcer, department, content }) => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const isExtraSmallScreen = useMediaQuery('(max-width: 480px)');

  return (
    <div className={` font-poppins flex items-start justify-start ${isSmallScreen ? 'flex-col' : 'flex-row'} pb-4`}>
      <div className={`flex items-center pr-2 ${isSmallScreen ? 'mb-2' : ''}`}>
        <img
          className="rounded-full h-8 w-8 mr-2 object-cover"
          src="/user (1).png"
          alt={`User: ${announcer}`} // Improved alt text
        />
        {!isExtraSmallScreen && (
          <div>
            <p className="font-medium">{announcer}</p>
            <p className="text-xs text-gray-400">{department}</p>
          </div>
        )}
      </div>
      <div className="text-sm flex items-start break-words">{content}</div>
    </div>
  );
};

export default AnnouncementItem;
