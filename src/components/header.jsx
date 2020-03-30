import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button:{
        textDecoration: 'none', color: 'white'
    }
}));

export default function Header() {
    const classes = useStyles();

return (
    <div className={classes.root}>
<AppBar position="static" style={{ background: '#282c34' }}>
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            A.Rajab
</Typography>
       
        <Button className={classes.button}   component={Link}  to='./' >
        Home
        </Button>
        <Button className={classes.button}   component={Link}  to='./about' >
        About
        </Button>
        <Button className={classes.button}  >
        <a className={classes.button}   href="http://a0m0rajab.github.io/">     CV</a>
        </Button>
        <Button className={classes.button}   component={Link}  to='./projects' >
        Portfolio
        </Button>
      
    </Toolbar>
</AppBar>
</div>
);
}