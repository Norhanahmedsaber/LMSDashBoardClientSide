import React from 'react';
import { Box, Typography } from '@mui/material';
import DueItem from './DueItem';
import { useMediaQuery } from '@mui/material';

interface DueProps {
  dueItems: {
    title: string;
    course: string;
    topic: string;
    dueDate: string;
    buttonText: string;
  }[];
}

const Due: React.FC<DueProps> = ({ dueItems }) => {
  // Move useMediaQuery call to the top level of the component
  const isSmallScreen = useMediaQuery('(max-width: 640px)'); 

  return (
    <Box sx={{ fontFamily: 'Poppins', p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, height: '100%' }}>
      <div className='flex justify-between'>
        <Typography variant="h6">What's due</Typography>
        {!isSmallScreen && (
          <Typography variant="h6" sx={{
            textDecoration: 'underline',
            color: '#0c808f',
            cursor: 'pointer',
            fontWeight: 'bold',
            '&:hover': {
              color: '#0c808f', 
            },
          }}>
            ALL
          </Typography>
        )}
      </div>
      {dueItems.map((dueItem, index) => (
        <DueItem key={index} {...dueItem} />
      ))}
    </Box>
  );
};

export default Due;
