import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const DONATION_SERVER_URL = 'https://backend-ubvq.onrender.com';

export const DonateButton = () => {
    const [loading, setLoading] = useState(false);

    const handleDonate = () => {
        setLoading(true);

        const newTab = window.open('', '_blank');

        axios.post(`${DONATION_SERVER_URL}/create-checkout-session`, {
            amount: 5000,
            currency: 'usd'
        }).then(res => {
            if (res.data.url) {
                newTab.location.href = res.data.url;
            } else {
                newTab.close();
                alert('Не удалось получить ссылку на оплату.');
            }
        }).catch(err => {
            console.error('Stripe error', err);
            newTab.close();
            alert('Ошибка при переходе на Stripe. Попробуйте позже.');
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <Box position="relative" display="inline-flex">
            <Button sx={{padding: '10px'}}
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                disabled={loading}
                onClick={handleDonate}
            >
                {loading ? 'Обработка...' : 'BOOST $500'}
            </Button>
            {loading && (
                <CircularProgress
                    size={24}
                    color="inherit"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </Box>
    );
};


