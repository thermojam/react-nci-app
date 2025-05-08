import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Success = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#282828',
                color: 'white',
            }}>
            <CheckCircleIcon color="success" sx={{ fontSize: 80, color: '#87faab' }} />
            <Typography variant="h4" mt={2}>Спасибо за поддержку!</Typography>
            <Typography mt={1}>Ваш платёж успешно завершён 🙌</Typography>
        </Box>
    );
};






