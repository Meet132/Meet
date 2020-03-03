import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const drawerWidth = "100%"
const styles = makeStyles(theme => ({
    root :{
        zIndex : 0
    },
    buttonCollapse: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      },
      margin: "10px",
      boxShadow: "none",
      zIndex :0
    },
    drawer :{
        width: drawerWidth,
        flexShrink: 0,
        zIndex : 0,
    },
    drawerPaper: {
        width: drawerWidth,
        alignItems : "flex-start",
    },
    toggleStyle :{
        color:"#ed3e44"
    },
    getfreequoteButton:{
        width :"100%",
        padding :"10px 0",
        borderRadius :"0px",
        background :"#ED3E44"
    }

  }));

export default function ButtonBarCollapse(props) {
    const [mobile , setMobile] = React.useState(false);
    const handleMobile = () =>
    {
        setMobile(!mobile)
    }
    const classes = styles();
    return (
        <div className = {classes.buttonCollapse}>
            <IconButton onClick = {handleMobile} className = {classes.toggleStyle}> {(mobile) ?<CloseIcon /> : <MenuIcon />}</IconButton>
            <Drawer
                className = {classes.drawer}
                variant = "temporary"
                anchor="top"
                open = {mobile}
                classes={{
                    paper: classes.drawerPaper,
                }}
                transitionDuration = {1000}
                >
                <IconButton><CloseIcon onClick = {handleMobile}></CloseIcon></IconButton>
                {props.children}
                <Button variant = "contained" color = "secondary" className = {classes.getfreequoteButton}>Get a free quote</Button>  
            </Drawer>
        </div>
    )
}