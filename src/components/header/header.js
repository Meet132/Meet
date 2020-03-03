import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
import AppBarCollapse from './AppBarCollapse'

const styles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    toolbarcolor :{
        background :"#fff"
    },
    iihLogoStyle :{
        height :"50px"
    },
    iconStyle :{
        height :"70px",
        width :"auto",
        marginTop:"3px",
        marginBottom :"0px",
        marginLeft :"10px"
    },
    appBarStyle :{
        boxShadow :"none"
    }

  }));

function header() {
    const classes = styles();
    return (
        <div className = {classes.root} >
            <AppBar position = "fixed" className ={classes.appBarStyle }>
                <Toolbar className = {classes.toolbarcolor}>
                    <img src = "https://www.whatech.com/media/com_mtree/images/listings/m/7485.jpg" alt ="IIh" className = {classes.iconStyle}/>
                    <AppBarCollapse />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default header