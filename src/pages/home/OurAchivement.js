import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TopWebDevelopersImage from '../../images/topwebdevelopers.png'
import TopSoftwaredevelopmentImage from '../../images/topsoftwaredevelopment.png'
import TopAppDevelopersImage from '../../images/topappdevelopers.png'
import Top10WebDevelopment from '../../images/top10+webdevelopment.png'
import TopRubyOnRailsImage from '../../images/toprubyonrails.png'
import TopDigitaLagencyImage from '../../images/topdigitalagency.png'
import TopCustomImage from '../../images/topcustomsoftwaredevelopment.png'


const useStyles = makeStyles(theme=>({

    containerStyle :{
        maxWidth :"1180px",
        margin:"0 auto"
    },
    ourAchivementHeading :{
        padding:"90px 0 60px 0"
    },
    achivementBox:{
        justifyContent:"space-between",
        alignItems :"center",
        flexWrap :"wrap",
        margin: "25px auto 40px"

    },
    achivementContentBox:{
        // padding :"0px 30px 30px 30px",
        textAlign :"center",
        margin :"15px"

    },
    achivementContent :{
        color :"#232323",
        textDecoration :"none",
        "&:hover":{
            color:"#232323",
            textDecoration :"none"
        }
    },
    achivementContentText :{
        maxWidth :"250px"
    },
    btnViewAllOurWorks :{
        justifyContent :"center",
        padding :"30px 0",
        marginBottom :"90px",
    },
    btnViewAllOurWorksHover :{
        backgroundColor: "#ed3e44",
        textTransform :"inherit",
        padding :"10px 30px 10px 30px",
        "&:hover": {
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
            color: "#fff",
            backgroundColor: "#ed3e44",
            boxShadow: '0 15px 15px 0 rgba(0,0,0,.05)'
        }
    }

}))

export default function OurAchivement() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth ="xl" className = {classes.containerStyle}>
                <Typography variant ="h3" align = "center" className = {classes.ourAchivementHeading}>Our Achivement</Typography>
                <Grid container className = {classes.achivementBox}>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopWebDevelopersImage} />
                            <Typography className = {classes.achivementContentText}>Top web developers in Ukeraine  by Clutch</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopWebDevelopersImage} />
                            <Typography className = {classes.achivementContentText}>Top B2B Companies in Ukeraine  by Clutch</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopSoftwaredevelopmentImage} />
                            <Typography className = {classes.achivementContentText}>Top Software Development Company bygoodfirms.co</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopAppDevelopersImage} />
                            <Typography className = {classes.achivementContentText}>Top App developers 2019 byThe Mainfest</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {Top10WebDevelopment} />
                            <Typography className = {classes.achivementContentText}>Top 10+ Web Development Firms in Ukraine 2019</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopRubyOnRailsImage} />
                            <Typography className = {classes.achivementContentText}>Top Ruby on Rails Development Companies 2019</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopDigitaLagencyImage} />
                            <Typography className = {classes.achivementContentText}>Recognized by topdigital.agency</Typography>
                        </a>
                    </Grid>
                    <Grid item xl = {3} className = {classes.achivementContentBox}>
                        <a src = "" href ="/" className = {classes.achivementContent}>
                            <img src = {TopCustomImage} />
                            <Typography className = {classes.achivementContentText}>Top Custom Software Development Firms by appfutura</Typography>
                        </a>
                    </Grid>
                </Grid>
                <Grid container className = {classes.btnViewAllOurWorks}>
                        <Button variant = "contained" color ="secondary" className = {classes.btnViewAllOurWorksHover}>Discuss your project</Button>
                    </Grid>
            </Container>
        </section>
    )
}