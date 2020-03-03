import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Banner from '../../images/banner1.jpg'



const useStyles = makeStyles(theme =>({

    root :{
        marginTop :"50px",
        backgroundColor :"#f9f9fb"
    },
    containerStyle :{
        maxWidth :"1300px",
        margin :"0 auto"
    },
    cardImage :{
        height :"300px",
        width:"400px"
    },
    articleTitle:{
        color: "#232323",
        fontFamily: "Poppins-Bold,sans-serif",
        fontSize: "30px",
        lineHeight: "34px",
        marginBottom: "30px",
        paddingTop :"20px"
    },
    postRelated :{
        border :"0",
    },
    postImage :{
        position:"relative",
        maxHeight :"240px",
        overflow :"hidden",
        borderRadius :"10px",
        maxWidth :"400px"
    },
    postGradient :{
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: "-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(79%,rgba(0,0,0,.23)),to(rgba(0,0,0,.6)))"
    },
    postTag :{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        top :"20px",
        bottom: "unset",
        padding: "0 10px",
        borderRadius: "5px",
        backgroundColor: "hsla(0,0%,94.1%,.8)",
        color: "#ed3e44",
        fontFamily: "Calibre-Medium,sans-serif",
        fontSize: "15px",
        lineHeight: "28px",
        fontWeight :"700"
    },
    postTagTitle :{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        padding: "0 10px",
        borderRadius: "5px",
        color: "#fff",
        lineHeight: "28px",
        fontSize: "20px",
        lineHeight: "30px",
        marginBottom: "10px",
        minHeight: "60px",
        fontWeight :"700"
    },
    insightsCategory :{
        fontSize :"15px",
        lineHeight :"1.5",
        color :"#ed3e44",
    },
    insightsNameArticals :{
        color:"#232323",
        fontSize :"20px",
        lineHeight:"34px",
        fontWeight :"700",
        textDecoration :"none",
        "&:hover":{
            color:"#ed3e44"
        }
    }

}))

export default function FeaturedInsight() {
    const classes = useStyles();
    return (
        <section className = {classes.root}>
            <Container maxWidth = "xl" className = {classes.containerStyle}>
                <div className = {classes.postRelated}>
                    <Typography variant = "h6" className = {classes.articleTitle}>Featured insights from Codica blog</Typography>
                    <Grid container spacing = {2}>
                        <Grid item xl = {4}>
                            <a href = "/">
                                <div className = {classes.postImage}>
                                    <img src = {Banner} className = {classes.postGradient} />
                                    <div className = {classes.postTag}>Technology</div>
                                    <div className = {classes.postTagTitle}>Pros & Cons of Using Ruby on Rails for Web Development</div>
                                </div>
                            </a>
                           
                        </Grid>
                        <Grid item xl = {4}>
                            <a href = "/">
                                <div className = {classes.postImage}>
                                    <img src = {Banner} className = {classes.postGradient} />
                                     <div className = {classes.postTag}>Technology</div>
                                    <div className = {classes.postTagTitle}>Pros & Cons of Using Ruby on Rails for Web Development</div>
                                </div>
                            </a>
                        </Grid>
                        <Grid item xl = {4}>
                            <div>
                                <Typography component = "p" className = {classes.insightsCategory}>Entrepreneurship</Typography>
                                <a href = "/" className = {classes.insightsNameArticals}>How To Start Your Own Online Marketplace</a>
                            </div>
                            <div>
                                <Typography component = "p" className = {classes.insightsCategory}>Technology</Typography>
                                <a href = "/" className = {classes.insightsNameArticals}>Progressive Web Apps vs Native Apps</a>
                            </div>
                            <div style ={{maxWidth :"400px"}}>
                                <Typography component = "p" className = {classes.insightsCategory}>Codica Way</Typography>
                                <a href = "/" className = {classes.insightsNameArticals}>Codica Listed Amongst Top Ukrainian Web Developers</a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            
        </section>
    )
}
