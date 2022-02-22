import { AppBar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position="static" color="inherit">
      <Toolbar>
        <Button component={Link} to="/" variant="text" size="large" className={classes.touchBarBtn} color="primary" style={{ backgroundColor: 'transparent' }}>Word Cloud</Button>
        <Button component={Link} to="/histogram" variant="text" size="large" className={classes.touchBarBtn} color="primary" style={{ backgroundColor: 'transparent' }}>Histogram</Button>
        <Button component={Link} to="/timeseries" variant="text" size="large" className={classes.touchBarBtn} color="primary" style={{ backgroundColor: 'transparent' }}>Time Series</Button> 
      </Toolbar> 
    </AppBar>
  );
};

export default Navbar;