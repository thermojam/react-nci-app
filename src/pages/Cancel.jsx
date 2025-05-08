import React from 'react';
import { Box, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export const Cancel = () => {
    return (
        <>
            <Box textAlign="center" mt={10}>
                <CancelIcon color="error" sx={{ fontSize: 80 }} />
                <Typography variant="h4" mt={2}>Платёж отменён</Typography>
                <Typography mt={1}>Вы можете попробовать снова позже.</Typography>
            </Box>
        </>

    );
};


