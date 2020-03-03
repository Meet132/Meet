import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CEOImage from '../../images/CEOImage.png'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles(theme => ({

    root:{
        backgroundColor :"#f9f9fb"
    },
    containerstyle :{
        maxWidth :"1180px",
        margin :"0 auto"
    },
    specification :{
        padding:"80px 0px 20px",
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
        flexDirection:"row",
        maxWidth:"auto",
        minHeight: "250px",
        boxShadow: "0 15px 15px 0 rgba(0,0,0,.05)",
        backgroundColor: "#fff",
        borderRadius :"10px",
    },
    cardHeaderStyle :{
        flex:"none",
        textAlign :"left"
    },
    cardContentTypography :{
        marginBottom :"10px"
    },
    cardContent :{
        marginLeft :"20px",
        marginRight :"20px"
    },
    cardAction:{
        marginLeft :"20px"
    },
    cardActionLink:{
        display :"flex",
        color :"#ed3e44",
        marginLeft :"10px",
        marginBottom :"30px",
        "&:hover": {
            color:"#ed3e44",
            webkitTransform: 'translateX(5px)',
            transform: 'translateX(5px)',
            textDecoration :"none",
        }
    }
    
}))


export default function OurClientSay() {
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
                                    <CardHeader className = {classes.cardHeaderStyle}
                                     avatar = {
                                        <img src = {CEOImage} height = "100px" width ="100px"/>
                                    }
                                    title="Jason Hardie"
                                    subheader="Founder of The Digital Village, Australia"
                                    >
                                    </CardHeader>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                            “The Codica team have been terrific to work with. The ability to interpret business needs and apply them with little guidance has been of great value for our Startup.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        The outcome of our Beta version is perfect for our needs and the technology foundation is there for future rapid growth.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        A partnership of trust and respect is reciprocated and we look forward to working with Codica into the future.”
                                        </Typography>
                                    </CardContent>
                                    <CardActions className ={classes.cardAction}>
                                        <a className = {classes.cardActionLink}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                                <Card className = {`${classes.cardHoverEffetct}`}>
                                    <CardHeader className = {classes.cardHeaderStyle}
                                     avatar = {
                                        <img src = {CEOImage} height = "100px" width ="100px"/>
                                    }
                                    title="Ronald Kok"
                                    subheader="CEO Analist Netherlands"
                                    >
                                    </CardHeader>
                                    <CardContent className = {classes.cardContent}>
                                         <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                         “We cooperate for many years with Codica and are very happy that we can let all our IT projects being developed by them, including our main product Analist.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        We've been working closely with the dev team, and this is the key to the successful launching of our project.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        These guys are up-to-date with the latest technology, and they know what they are doing, delivering quality code.”
                                        </Typography>
                                    </CardContent>
                                    <CardActions className ={classes.cardAction}>
                                        <a className = {classes.cardActionLink}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                                <Card className = {`${classes.cardHoverEffetct}`}>
                                    <CardHeader className = {classes.cardHeaderStyle}
                                     avatar = {
                                        <img src = {CEOImage} height = "100px" width ="100px"/>
                                    }
                                    title="Ben Alexander"
                                    subheader="Director iExpedition Australia"
                                    >
                                    </CardHeader>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        “Building the relationship with Codica has been great. The platform that they delivered, over the past 7 months has exceeded our goals. We have in fact processed twice as many sales, as we were aiming to achieve the first 12 months! Further, the system is very responsive to search algorithms, with many of our pages appearing on page 1 already.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        I cannot recommend Codica and the team highly enough!”
                                        </Typography>
                                    </CardContent>
                                    <CardActions className ={classes.cardAction}>
                                        <a className = {classes.cardActionLink}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xl ={6} lg ={6} md ={6} className = {classes.dFlex}>
                                <Card className = {`${classes.cardHoverEffetct}`}>
                                    <CardHeader className = {classes.cardHeaderStyle}
                                     avatar = {
                                        <img src = {CEOImage} height = "100px" width ="100px"/>
                                    }
                                    title="Fredrik Orrenius"
                                    subheader="CEO, Emerging Classifieds Ventures Australia"
                                    >
                                    </CardHeader>
                                    <CardContent className = {classes.cardContent}>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        “For now, we have been working with Codica for 3 years already, and the results have been great. The initial website was perfect to raise investment, and we further developed it into a complex and high-performing marketplace platform..
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align = "left" className = {classes.cardContentTypography}>
                                        These guys know how to deliver a high-quality product on time and on budget. I highly recommend Codica, the team is highly professional and very dedicated.”
                                        </Typography>
                                    </CardContent>
                                    <CardActions className ={classes.cardAction}>
                                        <a className = {classes.cardActionLink}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
