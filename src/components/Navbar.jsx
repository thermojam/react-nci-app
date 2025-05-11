import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button, Typography} from '@mui/material';


const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography sx={{flexGrow: 1}}>
                APP
            </Typography>
            <Button color="inherit" component={Link} to="/">Catalog</Button>
            <Button color="inherit" component={Link} to="/statistic">Statistic</Button>
            <Button color="inherit" component={Link} to="/ant">Ant</Button>
        </Toolbar>
    </AppBar>
);

export default Navbar;
