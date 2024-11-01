import React from 'react';
import { Box, Typography } from '@mui/material';
import AnnouncementItem from './AnnouncementItem';
import { useMediaQuery } from '@mui/material';

interface Announcement {
  announcer: string;
  department: string;
  content: string;
}

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        overflowY: 'auto',
        maxHeight: '400px',
        width: '100%',
        flex: 1,
        mr: 2,
      }}
    >
      <div className=" font-poppins flex justify-between items-center">
        <Typography variant="h6" gutterBottom>
          Announcements
        </Typography>
        {!isSmallScreen && (
          <Typography
            variant="h6"
            sx={{
              textDecoration: 'underline',
              color: '#0c808f',
              cursor: 'pointer',
              fontWeight: 'bold',
              '&:hover': {
                color: '#0c808f',
              },
            }}
          >
            ALL
          </Typography>
        )}
      </div>
      {announcements.map((announcement, index) => (
        <AnnouncementItem key={index} {...announcement} />
      ))}
    </Box>
  );
};

export default Announcements;
