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
// import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'

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
        // display:"flex",
        flexDirection:"row",
        // justifyContent :"center",
        maxWidth:"auto",
        minHeight: "250px",
        boxShadow: "0 15px 15px 0 rgba(0,0,0,.05)",
        backgroundColor: "#fff",
        borderRadius :"10px",
    },
    cardMediaImg :{
        // padding :"20px 10px 10px 25px"
    },
  
    
}))


export default function WhyChooseCodica() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <section className = {classes.root}>
                <Container maxWidth = "xl" className = {classes.containerstyle} disableGutters = {true}>
                    <div className = {classes.specification}>
                        <Typography variant = "h3">Here’s what our clients say</Typography>
                        <Grid container className = {classes.specificationBox}>
                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                        <Card className = {`${classes.cardHoverEffetct}`}>
                        <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe" style = {{backgroundColor :"orange"}}>R</Avatar>
                        }
                        title="Jason Hardie"
                        subheader="Founder of The Digital Village, Australia   "
                        >
                        </CardHeader>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="p">
                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        </Card>
                            </Grid>

                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                            <Card className = {`${classes.cardHoverEffetct}`}>
                        <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe" style = {{backgroundColor :"orange"}}>R</Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                         subheader="September 14, 2016"
                        >
                        </CardHeader>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="p">
                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        </Card>
                            </Grid>
                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                            <Card className = {`${classes.cardHoverEffetct}`}>
                        <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe" style = {{backgroundColor :"orange"}}>R</Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                         subheader="September 14, 2016"
                        >
                        </CardHeader>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="p">
                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        </Card>
                            </Grid>
                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                            <Card className = {`${classes.cardHoverEffetct}`}>
                        <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe" style = {{backgroundColor :"orange"}}>R</Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                         subheader="September 14, 2016"
                        >
                        </CardHeader>
                        <CardContent >
                            <Typography variant="body2" color="textSecondary" component="p">
                                 This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
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

