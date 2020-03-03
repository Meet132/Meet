import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CustomeSoftWareImage from '../../images/customSoftware.png'
import MarketPlaceImage from '../../images/marketPlaceDevelopment.png'
import SaasImage from '../../images/saasdevelopment.png'
import MVPImage from '../../images/mvpdevelopment.png'
import PWAImage from '../../images/pwadevelopment.png'
import UIUXImage from '../../images/uiuxdesign.png'

const useStyles = makeStyles(theme => ({

    root:{
        backgroundColor :"#f9f9fb"
    },
    containerstyle :{
        maxWidth :"1180px",
        margin :"0 auto"
    },
    specification :{
        padding:"80px 0px 60px",
        textAlign :"center"
    },
    specificationBox :{
        marginTop :"60px"
    },
    dFlex :{
        display :"flex!important",
        paddingLeft:"15px",
        paddingRight:"15px",
        position:"relative",
        marginBottom:"50px"
    },
    specificationCardContent:{
        textAlign :"left",
        padding:"10px auto"
    },
    specificationCardText :{
        margin:"10px  0 0",
        color :"#232323",
        fontSize :"18px",
        lineHeight:"1.36"
    },
    specificationCardHead:{
        lineHeight:"1.36"
    },
    cardHoverEffetct :{
        display:"flex",
        flexDirection:"row",
        justifyContent :"center",
        maxWidth:"350px",
        minHeight: "250px",
        boxShadow: "0 15px 15px 0 rgba(0,0,0,.05)",
        backgroundColor: "#fff",
        borderRadius :"10px",
        "&:hover": {
            textDecoration :"none",
            color:"#ed3e44",
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
            textDecoration :"none",
        }
    },
    cardMediaImg :{
        padding :"15px 5px 10px 25px"
    },
    cardLink :{
        textDecoration :"none"
    }
}))


export default function Specification() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <section className = {classes.root}>
                <Container maxWidth = "xl" className = {classes.containerstyle} disableGutters = {true}>
                    <div className = {classes.specification}>
                        <Typography variant = "h3">How we can help you</Typography>
                        <Grid container className = {classes.specificationBox}>
                            {specificationDetails.map((detail)=>{
                                return(
                                    <Grid item xl ={4} className = {classes.dFlex} key = {detail.title}>
                                    <a href = {detail.link} className = {classes.cardLink}>
                                        <Card className = {classes.cardHoverEffetct}>
                                            <CardMedia className = {classes.cardMediaImg}>
                                                 <img src = {detail.logo} style ={{maxWidth :"none"}}></img>
                                            </CardMedia>
                                            <CardContent className = {classes.specificationCardContent}>
                                                 <Typography variant ="h6" className = {classes.specificationCardHead}>{detail.title}</Typography>
                                                 <Typography component ="p" className ={classes.specificationCardText}>{detail.description}</Typography>
                                            </CardContent>
                                         </Card>
                                     </a>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}


const specificationDetails = [
    {
        logo : CustomeSoftWareImage,
        title : "Custom Software Development",
        description:"High-performing custom software for businesses that need more than a standard application.",
        link :"/"
    },
    {
        logo : MarketPlaceImage,
        title : "Online Marketplace Development",
        description:"Have an idea for a B2B, B2C or P2P marketplace? We will create a platform that your users will love.",
        link :"/"
    },
    {
        logo : SaasImage,
        title : "SaaS Development",
        description:"High-performing custom software for businesses that need more than a standard application.",
        link :"/"
    },
    {
        logo : MVPImage,
        title : "MVP Development",
        description:"Have an idea for a B2B, B2C or P2P marketplace? We will create a platform that your users will love.",
        link :"/"
    },
    {
        logo : PWAImage,
        title : "PWA Development",
        description:"High-performing custom software for businesses that need more than a standard application.",
        link :"/"
    },
    {
        logo : UIUXImage,
        title : "UI/UX Design",
        description:"Have an idea for a B2B, B2C or P2P marketplace? We will create a platform that your users will love.",
        link :"/"
    },
]