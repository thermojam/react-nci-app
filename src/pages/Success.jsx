import React from 'react';
import {Box, Typography, CircularProgress} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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
                backgroundColor: '#282828', // Зеленый фон для успеха
                color: 'white',
            }}
                >
                <CheckCircleIcon sx={{ fontSize: 80, marginBottom: 2 }} />
                <Typography variant="h4" sx={{ marginBottom: 2 }}>
                    Donation Successful!
                </Typography>
                <CircularProgress sx={{ color: '#00a47a' }} />
            </Box>
        </>

    );
};



