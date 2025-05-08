import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const cancelAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export const Cancel = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#282828', // Красный фон для отмены
                color: 'white',
                animation: `${cancelAnimation} 2s ease-in-out`
            }}
        >
            <CancelIcon sx={{ fontSize: 80, marginBottom: 2 }} />
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Donation Failed!
            </Typography>
            <CircularProgress sx={{ color: 'white' }} />
        </Box>
    );
};