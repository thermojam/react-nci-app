import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from "react-router-dom"

export const Success = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                backgroundImage: 'linear-gradient(90deg, #73e49a 0%, #096227 98.96%)',
                color: 'white',
            }}>
            <CheckCircleIcon color="success" sx={{ fontSize: 200, color: '#74ffa1' }} />
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Спасибо за поддержку!</Typography>
            <Button variant="contained" component={Link} to="/">
                На главную
            </Button>
        </Box>
    );
};






