import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import { Cancel as CancelIcon } from '@mui/icons-material';
import {Link} from "react-router-dom"

export const Cancel = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                backgroundImage: 'linear-gradient(90deg, #a60101 0%, #7c0284 100%)',
                color: 'white',
            }}
        >
            <CancelIcon sx={{ fontSize: 200 ,color: '#fb3eff' }} />
            <Typography variant="h2" sx={{ marginBottom: 2 }}>
                Donation Failed!
            </Typography>
            <Button variant="contained" component={Link} to="/">
                На главную
            </Button>
        </Box>
    );
};
