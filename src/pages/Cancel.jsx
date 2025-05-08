import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';



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
            }}
        >
            <CancelIcon sx={{ fontSize: 80, marginBottom: 2 }} />
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Donation Failed!
            </Typography>
            <CircularProgress sx={{ color: '#fb1eff' }} />
        </Box>
    );
};