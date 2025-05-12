// src/pages/NotFound.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Box
            sx={{
                fontSize: '50px',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fdfdfd',
                textAlign: 'center',
            }}
        >
            <Typography variant="h2" sx={{fontSize: 200, fontWeight: 'bold'}}>
                404
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: 2 }} gutterBottom>
                Страница не найдена
            </Typography>
            <Button variant="contained" component={Link} to="/">
                На главную
            </Button>
        </Box>
    );
};

