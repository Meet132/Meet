import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme =>({

    root :{
        position :"relative"
    },
    containerStyle :{
        maxWidth :"1300px",
        margin :"0 auto"
    },
    blueSection:{
        backgroundColor :"#3d4067",
        borderRadius :"10px",
        padding :"60px 20px",
        textAlign :"center"
    },
    blueSectionText :{
        color :"#fff",
        fontSize :"30px",
        lineHeight :"45px",
        padding :"0 0 40px",
        margin :"0",
        fontFamily: "Poppins-Bold,sans-serif"
    },
    blueSectionButton:{
        backgroundColor :"#fff",
        color: "#3d4067",
        borderRadius :"10px",
        textTransform :"inherit",
        padding :"12px 18px",
        fontSize :"20px",
        "&:hover": {
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
            color: "#3d4067",
            backgroundColor: "#fff",
            boxShadow: '0 15px 15px 0 rgba(0,0,0,.05)'
        }
    },
    sectionLink :{
        width:"520px",
        height :"520px",
        position:"absolute",
        top :"495px",
        left:"0",
        right :"0",
        margin :"0 auto"
    },
    wave :{
        borderRadius :"50%",
        border :"1px solid #fff",
        position :"absolute",
        top :"0",
        left :"0",
        right :"0",
        margin :"0 auto",
        textAlign :"center"

    },
    wave1:{
        width :"120px",
        height :"120px",
        marginTop :"-380px",
        opacity :"0.1"
    },
    wave2:{
        width :"320px",
        height :"320px",
        marginTop:"-475px",
        opacity :"0.1"
    },
    wave3:{
        width :"520px",
        height :"520px",
        marginTop :"-582px",
        opacity :"0.1"
    }

}))
export default function LookingForTeam() {
    const classes = useStyles();
    return (
        <section className = {classes.root}>
            <Container maxWidth = "xl" className = {classes.containerStyle}>
                <div className = {classes.blueSection}>
                    <Typography variant = "h4" className = {classes.blueSectionText}>Looking for a team to build an outstanding web product ?</Typography>
                    <Button variant = "contained" className = {classes.blueSectionButton}>Talk to an expert</Button>
                </div>
                <div className = {classes.sectionLink}>
                    <div className = {`${classes.wave} ${classes.wave1}`}></div>
                    <div className = {`${classes.wave} ${classes.wave2}`}></div>
                    <div className = {`${classes.wave} ${classes.wave3}`}></div>
                </div>
            </Container>
        </section>
    )
}
