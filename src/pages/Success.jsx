import React from 'react';
import {Box, Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { keyframes } from '@emotion/react';

const successAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Success = () => {
    return (
        <>
            <Box textAlign="center" mt={10}>
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#4CAF50', // Зеленый фон для успеха
                color: 'white',
                animation: `${successAnimation} 2s ease-in-out`
            }}
                >
                <CheckCircleIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                <Typography variant="h4" sx={{ marginBottom: 2 }}>
                    Donation Successful!
                </Typography>
                <CircularProgress sx={{ color: 'white' }} />
            </Box>
        </>

    );
};



