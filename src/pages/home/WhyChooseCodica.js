import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import SaveCostImage from '../../images/savecostsandlunchquickly.png'
import RightSolutionIcon from '../../images/therightsolutionforyourneeds.png'
import FullControlDevelopmentIcon from '../../images/fullcontroloverdevelopment.png'
import EnthusiasticteamIcon from '../../images/enthusiasticteamthatcares.png'
import BestIndustriesIcon from '../../images/bestindustrystandards.png'
import SupportAfterLunchIcon from '../../images/suppurtafterlaunch.png'

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
        marginBottom :"50px"
    },
    specificationCard :{
        padding: "25px 5px 25px 25px",
        minWidth: "100%",
        minHeight: "233px",
        boxShadow: "0 15px 15px 0 rgba(0,0,0,.05)",
        backgroundColor: "#fff",
        borderRadius :"10px",
        marginBottom:"20px",
        "&:hover": {
            color:"red",
            textDecoration :"none",
        },
    },
    specificationBoxTop:{
        display: "flex",
        alignItems: "flex-start",
        boxShadow :"none"
        
    },
    specificationDevelopment :{
        minWidth: "50px",
        height: "50px",
        backgroundRepeat: "no-repeat",
        margin:"10px"
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
        maxWidth:"400px",
        minHeight: "250px",
        boxShadow: "0 15px 15px 0 rgba(0,0,0,.05)",
        backgroundColor: "#fff",
        borderRadius :"10px",
    },
    cardMediaImg :{
        padding :"20px 10px 10px 25px"
    },
  
    
}))


export default function WhyChooseCodica() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <section className = {classes.root}>
                <Container maxWidth = "xl" className = {classes.containerstyle} disableGutters = {true}>
                    <div className = {classes.specification}>
                        <Typography variant = "h3">Why choose Codica</Typography>
                        <Grid container className = {classes.specificationBox}>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {RightSolutionIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                         <Typography variant ="h6" className = {classes.specificationCardHead}>The right solution for your needs</Typography>
                                         <Typography component ="p" className ={classes.specificationCardText}>Clients’ success is our priority. We carefully align your business requirements with software functionality to ensure the best value.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {RightSolutionIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                        <Typography variant ="h6" className = {classes.specificationCardHead}>The right solution for your needs</Typography>
                                        <Typography component ="p" className ={classes.specificationCardText}>Clients’ success is our priority. We carefully align your business requirements with software functionality to ensure the best value.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {FullControlDevelopmentIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                        <Typography variant ="h6" className = {classes.specificationCardHead}>Full control over development</Typography>
                                        <Typography component ="p" className ={classes.specificationCardText}>We provide daily and weekly reports on the project progress, and clearly communicate any issues that may arise beforehand.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {EnthusiasticteamIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                        <Typography variant ="h6" className = {classes.specificationCardHead}>Enthusiasticteam that cares</Typography>
                                        <Typography component ="p" className ={classes.specificationCardText}>We are proud of our result-oriented team that values communication, flexibility, and focuses on high-value relationships that last.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {BestIndustriesIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                        <Typography variant ="h6" className = {classes.specificationCardHead}>Best industry standards</Typography>
                                        <Typography component ="p" className ={classes.specificationCardText}>Having built numerous custom web applications, our experienced team offers the best solution for your business challenges.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl ={4} lg ={4} md ={6} className = {classes.dFlex}>
                                <Card className = {classes.cardHoverEffetct}>
                                    <CardMedia className = {classes.cardMediaImg}>
                                         <img src = {SupportAfterLunchIcon} style = {{maxWidth:"none"}}></img>
                                    </CardMedia>
                                    <CardContent className = {classes.specificationCardContent}>
                                        <Typography variant ="h6" className = {classes.specificationCardHead}>Support after launch</Typography>
                                        <Typography component ="p" className ={classes.specificationCardText}>Our work doesn’t stop when your custom product goes live. Our reliable support team will ensure your platform runs smoothly.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
