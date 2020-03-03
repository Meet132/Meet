import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonBarCollapse from './ButtonBarCollapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'


const styles = makeStyles(theme => ({
    root :{
        position : "absolute",
        right: 0
    },
    buttonBar :{
        [theme.breakpoints.down("sm")] :{
            display : "none"
        },
        margin: "10px",
        paddingLeft: "16px",
        right :"20%",
        position: "relative",
        width: "100%",
        background: "transparent",
        '@media(max-width:1056px)' :{
            right :"10%"
        }
    },
    iconStyle :{
        height :"80px",
        width :"auto"
    },
   

}));

const destopMenustyle = makeStyles(theme =>({

    navstyle :{
        display : "flex",
        listStyleType :"none",
        flexDirection :"row",
        justifyContent :"space-between",
        margin:"0px",
        alignItems :"center"
    },
    navList :{
        marginRight:"25px",
        marginBottom : "0px",
        color : "#232323",
        "&:hover": {
            color: "#ed3e44"
          },
        '@media(max-width:1056px)' :{
            marginRight : "15px"
        },
       
    },
    getfreequoteButton :{
        height :"55px",
        borderRadius :"8px",
        right : "-6%",
        "&:hover": {
            color: "white",
            background :"#ed3e44"
        },
    },
    
}))

const MobileDrawerMenu = () => {
    return(
            menuLinks.map((link)=>{
                return(
                    <ListItem key = {link.name}>
                        <ListItemText>{link.name}</ListItemText>
                    </ListItem>
                )
            })
    )
}

const DestopHeaderMenu = () =>{
    const classes = destopMenustyle();
    return(
        <nav>
            <ul className = {classes.navstyle}>
                {menuLinks.map((link)=>{
                    return(
                        <li className = {classes.navList} key = {link.name} >{link.name}</li>
                    )
                }) }           
                <Button variant = "outlined" color = "secondary" className = {classes.getfreequoteButton}>Get a free quote</Button>    
            </ul>
            
        </nav>

    )
}
export default function AppBarCollapse(props) {
    const classes = styles();
    return (
        <div className = {classes.root}>
            <ButtonBarCollapse>
                {/* <img src = "https://www.whatech.com/media/com_mtree/images/listings/m/7485.jpg" alt ="IIh" className = {classes.iconStyle}/> */}
                <Divider style = {{width :"100%"}}/>
                <List>
                    <MobileDrawerMenu />
                </List>
            </ButtonBarCollapse>
            <div className = {classes.buttonBar} id ="appbar-collapse">
                <DestopHeaderMenu />
            </div>
        </div>
    )
}


export const menuLinks = [
    {
        "name": "Services",
        "link": "/Services/" 
    },
    {
        "name": "Case Studies",
        "link": "/CaseStudies/" 
    },
    {
        "name": "Company",
        "link": "/Company/" 
    },
    {
        "name": "Approach",
        "link": "/Approach/" 
    },
    {
        "name": "Carrer",
        "link": "/carrer/" 
    },
    {
        "name": "Blog",
        "link": "/blog/" 
    }
]