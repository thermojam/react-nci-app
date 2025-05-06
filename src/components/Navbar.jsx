import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/zendesk.svg?react'

export default function Navbar() {
    return (
        <AppBar position="static" className="bg-dark">
            <Toolbar>
                <Typography  sx={{ flexGrow: 1 }}>
                    <img src={Logo}  alt="logo"/>
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">Catalog</Button>
                <Button color="inherit" component={RouterLink} to="/statistic">Statistic</Button>
            </Toolbar>
        </AppBar>
    );
}
