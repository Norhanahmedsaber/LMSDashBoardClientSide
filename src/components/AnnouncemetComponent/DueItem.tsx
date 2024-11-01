import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

interface DueItemProps {
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  buttonText: string;
}

const DueItem: React.FC<DueItemProps> = ({ title, course, topic, dueDate, buttonText }) => {
  // Move useMediaQuery call to the top level of the component
  const isExtraSmallScreen = useMediaQuery('(max-width: 480px)');

  return (
    <Box sx={{ pb: 2, fontFamily: 'Poppins' }}>
      <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
      {!isExtraSmallScreen && ( // Adjusted to use isExtraSmallScreen to determine display
        <>
          <Typography variant="body2" color="textSecondary">Course: {course}</Typography>
          <Typography variant="body2" color="textSecondary">Topic: {topic}</Typography>
        </>
      )}
      <Box display="flex" alignItems="center" sx={{ pb: 2 }} justifyItems="center" justifyContent="center" gap={1}>
        <AccessTime fontSize="small" color="action" />
        <Typography variant="body2" color="textSecondary">{dueDate}</Typography>
      </Box>
      <Button variant="outlined" size="small" sx={{
        fontFamily: 'Poppins',
        color: '#0c808f',
        borderColor: '#0c808f',
        '&:hover': {
          backgroundColor: '#0c808f',
          color: '#ffffff',
        }
      }}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default DueItem;
