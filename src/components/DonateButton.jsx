import React from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const DONATION_SERVER_URL = 'https://backend-ubvq.onrender.com';

const DonateButton = () => {
    const handleDonate = async () => {
        try {
            const res = await axios.post(`${DONATION_SERVER_URL}/create-checkout-session`, {
                amount: 5000,
                currency: 'usd'
            });

            if (res.data.url) {
                window.open(res.data.url, '_blank');
            }
        } catch (error) {
            console.error('Donation failed:', error);
        }
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            onClick={handleDonate}
        >
            BOOST $500
        </Button>
    );
};

export default DonateButton;
