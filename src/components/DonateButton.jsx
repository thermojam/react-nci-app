import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const DONATION_SERVER_URL = 'https://backend-ubvq.onrender.com';

export const DonateButton = () => {
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${DONATION_SERVER_URL}/create-checkout-session`, {
                amount: 5000,
                currency: 'usd',
            });

            if (res.data.url) {
                window.location.href = res.data.url;
            } else {
                throw new Error('URL не получен от сервера');
            }
        } catch (error) {
            console.error('Donation failed:', error);
            alert('Произошла ошибка при переходе на Stripe.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box position="relative" display="inline-block">
            <Button sx={{padding: '10px 18px'}}
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                onClick={handleDonate}
                disabled={loading}
            >
                {loading ? 'Переход...' : 'BOOST $5'}
            </Button>
            {loading && (
                <CircularProgress
                    size={32}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        color: '#3cadff',
                    }}
                />
            )}
        </Box>
    );
};

