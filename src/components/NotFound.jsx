// src/pages/NotFound.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#111',
                color: '#fff',
                px: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Страница не найдена
            </Typography>
            <Button variant="contained" component={Link} to="/">
                На главную
            </Button>
        </Box>
    );
};

