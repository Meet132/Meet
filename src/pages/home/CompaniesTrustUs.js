import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import CompanyTrust from '../../images/amazingcomapinestrustlogo.png'
import DigitalVillage from '../../images/digitalvillage.png'
import Analist from '../../images/analist.nl.png'
import Rangonfly from '../../images/rangonfly.png'
import Iexpedition from '../../images/iexpedition.png'
import SafeDk from '../../images/safeDk.png'
import AfricarGroup from '../../images/africargroup.png'
import Galith from '../../images/galith.png'
import AlexvanGronongen from '../../images/alexvangronongen.png'




const useStyles = makeStyles(theme =>({

    root :{
        padding :"90px 0 60px 0"
    },
    containerStyle :{
        maxWidth :"1180px",
        margin:"0 auto"
    },
    heading :{
        padding :"60px 0 0px 0"
    },
    subHeading :{
        margin :"20px auto 60px",
        maxWidth :"960px",
    },
    dFlex :{
        paddingLeft:"15px",
        paddingRight:"15px",
        position:"relative",
        marginBottom :"50px",
        minWidth :"47%",
        display :"flex",
        alignItems :"center",
        justifyContent :"flex-start",
        height :"50px"
    },
    companyTrustImage:{
        marginTop :"-35px",
        marginRight :"80px"
    },
    companyLogosConatainer :{
        marginLeft :"20px"
    },
    companyContainer :{
        flexWrap :"nowrap"
    }
}))



export default function CompaniesTrustUs() {
    const classes = useStyles();
    return (
        <section className = {classes.root}>
            <Container maxWidth ="xl" disableGutters = {true} className = {classes.containerStyle}>
                <Typography variant = "h4" align = "center" className = {classes.heading}>These amazing companies trust us</Typography>
                <Typography align = "center" component = "p" className = {classes.subHeading}>
                     We only measure our success by our clients’ achievements. We are proud to say that by prioritizing the value we bring to our customers, we have managed to develop long-term partnerships built on trust.
                </Typography>
                <Grid container className = {classes.companyContainer}> 
                    <Grid item xl = {7} className = {classes.companyLogosConatainer} >
                        <Grid container>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {Analist} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {DigitalVillage} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {Rangonfly} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {Iexpedition} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {SafeDk} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {AlexvanGronongen} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {AfricarGroup} />
                            </Grid>
                            <Grid item xl = {6} className = {classes.dFlex}>
                                <img src = {Galith} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl = {5} className={classes.companyTrustImage}>
                        <img src = {CompanyTrust} style = {{maxWidth:"none"}}/>
                    </Grid>
                </Grid>
            </Container>
        </section>

    )
}
