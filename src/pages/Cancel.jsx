import React from 'react';
import { Box, Typography} from '@mui/material';
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
                backgroundColor: '#282828',
                color: 'white',
            }}
        >
            <CancelIcon sx={{ fontSize: 120 ,color: '#fb3eff' }} />
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Donation Failed!
            </Typography>
        </Box>
    );
};