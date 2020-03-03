import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IIHTeamImage from '../../images/iih-team-image.png'
import CEOImage from '../../images/CEOImage.png'

const useStyles = makeStyles(theme =>({

    root:{
        backgroundColor :"#f9f9fb"
    },
    containerStyle :{
        maxWidth :"1180px",
        margin :"0 auto"
    },
    serviceGlobalHeading:{
        padding :"70px 0 0"
    },
    serviceGlobalSubHeading :{
        maxWidth :"835px",
        margin :"20px auto 60px"
    },
    testimonialsPd:{
        padding :"30px 0 65px"
    },
    testimonialsContainer:{
        maxWidth :"1180px",
        margin :"0 auto",
        padding:"60px 0 25px 60px"
    },
    testimonialsBox:{
        justifyContent :"space-between",
        textAlign :"center"
    },
    servicesTestimonialsLeftCard:{
        textAlign :"center"
    },
    servicesTestimonialsLeftCardImage:{
        maxWidth :"130px"
    },
    servicesTestimonialsLeftName:{
        fontSize :"24px",
        lineHeight :"36px",
        marginTop :"0px"
    },
    servicesTestimonialsLeftPosition:{
        fontSize :"20px",
        lineHeight : "21px",
        color :"#646465"
    },
    servicesTestimonialsLeftDescription:{
        fontSize:"20px",
        lineHeight :"30px",
        maxWidth:"855px",
        textAlign:"left"
    }
}))

function BuildingWebProduct() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <section className = {classes.root}>
                <Container maxWidth = "xl" className = {classes.containerStyle}>
                    <div className = {classes.serviceGlobalHeading}>
                        <Typography variant ="h3" align = "center">Building web products that users love</Typography>
                        <Typography component = "p" align ="center" className = {classes.serviceGlobalSubHeading}>
                            We are a 32-person custom software development team, passionate about technology  and innovation. We love creating modern web apps that are fast, engaging and scalable.  Over the past several years, our team has partnered with startups and established companies, to successfully deliver 30+ projects across various domains.
                        </Typography>
                        <img src = {IIHTeamImage}></img>
                    </div>
                </Container>
                <div className = {classes.testimonialsPd}>
                    <Container maxWidth = "xl" className = {classes.testimonialsContainer}>
                        <Grid container className = {classes.testimonialsBox}>
                            <Grid xl = {3} className = {classes.servicesTestimonialsLeftCard}>
                                <img src = {CEOImage} className = {classes.servicesTestimonialsLeftCardImage}></img>
                                <Typography className = {classes.servicesTestimonialsLeftName}>Dmitry Chekalin</Typography>
                                <Typography className = {classes.servicesTestimonialsLeftPosition}>CEO at Codica</Typography>
                            </Grid>
                            <Grid xl = {9} style = {{maxWidth:"75%"}}>
                                <Typography component = "p" className = {classes.servicesTestimonialsLeftDescription}>“I’m proud to say that Codica is the team with product-oriented thinking.  Having expert developers on board, we deliver great code quality, but this is not our only goal.</Typography>
                                <br></br>
                                <Typography component = "p" className = {classes.servicesTestimonialsLeftDescription}>
                                    From the start of our collaboration, we focus on the value we deliver to each project.  Applying our domain and technical expertise, we advise on the most efficient ways to make your product successful and profitable.”
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BuildingWebProduct