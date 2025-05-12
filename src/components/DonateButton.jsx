import React from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const DONATION_SERVER_URL = 'https://backend-ubvq.onrender.com';

const DonateButton = () => {
    const handleDonate = async () => {
        try {
            const res = await axios.post(`${DONATION_SERVER_URL}/create-checkout-session`, {
                amount: 5000,  // $5 → 500 центов
                currency: 'usd'
            });

            if (res.data.url) {
                // iOS-safe переход — используем <a> элемент
                const link = document.createElement('a');
                link.href = res.data.url;
                link.target = '_blank'; // можно также использовать '_self' для полной надежности
                link.rel = 'noopener noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (error) {
            console.error('Donation failed:', error);
            alert('Ошибка при переходе на Stripe. Попробуйте позже.');
        }
    };

    return (
        <Button
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleDonate}
            sx={{
                backgroundColor: '#f420ff',
                color: '#ffffff',
                fontWeight: 600,
                paddingX: 3,
                paddingY: 1.5,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}
        >
            BOOST $5
        </Button>
    );
};


export default DonateButton;
