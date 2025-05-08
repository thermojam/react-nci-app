import React from 'react';
import {Box, Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Success = () => {
    return (
        <>
            <Box textAlign="center" mt={10}>
                <CheckCircleIcon color="success" sx={{fontSize: 80}}/>
                <Typography variant="h4" mt={2}>Спасибо за поддержку!</Typography>
                <Typography mt={1}>Ваш платёж успешно завершён 🙌</Typography>
            </Box>
        </>

    );
};



