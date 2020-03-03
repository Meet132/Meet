import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {createStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FinanceIcon from '../../images/finance.png'
import EcommarceIcon from '../../images/ecommerce.png'
import TravelIcon from '../../images/travel.png'
import AutomotiveIcon from '../../images/automotive.png'
import AccommodationRentalIcon from '../../images/accommodationRental.png'
import InsuranceIcon from '../../images/insurance.png'
import RubyIcon from '../../images/ruby.png'
import RailsIcon from '../../images/rubyonrails.png'
import VueIcon from '../../images/vuejs.png'
import ReactIcon from '../../images/reactjs.png'
import PostgreSQLIcon from '../../images/postgresql.png'
import AngularIcon from '../../images/angularjs.png'


const useStyles = makeStyles(theme =>({

    expertiseSection:{
        padding :"100px 0 0"
    },
    containerStyle :{
        maxWidth :"1180px",
        margin:"0 auto"
    },
    domains:{
        marginTop :"70px"
    },
    domainGridStyle:{
        marginLeft :"-15px",
        marginRight :"-15px",
        justifyContent :"space-around"
    },
    expertiseDomainHead :{
        color :"#232323",
        fontSize:"30px",
        lineHeight :"44px",
        marginBottom: "20px",
        fontWeight :"900",
    },
    expertiseDomainText:{
        color :"#232323",
        fontSize:"18px",
        textAlign:"left",
        lineHeight:"30px",
        maxWidth :"515px"
    },
    expertiseSectionIconBox:{
        maxWidth :"510px",
        display:"flex",
        flexWrap: "wrap"
        
    },
    expertiseSectionLogoBox:{
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 15px 15px rgba(0,0,0,.05)",
        borderRadius: "50px",
        maxWidth: "70px",
        minWidth: "70px",
        maxHeight: "70px",
        minHeight: "70px",
        marginBottom: "70px",
        textAlign: "center",
        marginRight:"100px"
    },
    expertiseSectionDomain:{
        backgroundPositionY: "-11px"
    },
    expertiseSectionDomainFinance:{
        backgroundPositionX: "-32px",
        marginLeft: "0px"
    },
    expertiseSectionDomainName:{
        color: "#232323",
        fontSize: "20px",
        lineHeight: "33px",
        margin: "15px -55px 0"
    },
    FinanceIconStyle:{
        marginTop :"20px"
    },
    ourExpertiseContainer:{
        // justifyContent :"space-between",
        marginLeft:"-15px",
        marginRight:"-15px"
    },
    btnSeeArticles :{
        color: "#fff",
        backgroundColor: "#ed3e44",
        textTransform :"inherit",
        padding:"10px 50px 10px 50px",
        textAlign :"center",
        "&:hover": {
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
            color: "#fff",
            backgroundColor: "#ed3e44",
            boxShadow: '0 15px 15px 0 rgba(0,0,0,.05)'
        }
    },
    questionTitle:{
        "&::before":{
            display:"block",
            position:"absolute",
            top:"8px",
            left:0,
            width :"4px",
            height :"80%",
            backgroundColor :"#ed3e44",
            content :'"test"'
        }
    },
    ourExpertiseContainerStyle:{
        paddingLeft:"40px",
        width:"80%"
    },
    aboutOurExpertise :{
        padding:"65px 0 90px",
        '&::before':{
            content: '""',
            width: "3px",
            height: "50px",
            background: "red",
            marginTop:"8px",
            position: "absolute"
        }
    }

}))

const styles = () =>
  createStyles({
    questionTitle: {
      '&::before': {
        display:"block",
        position:"absolute",
        top:"8px",
        left:0,
        width :"4px",
        height :"80%",
        backgroundColor :"#ed3e44",
        content :'"test"'
      }
    }
});
export default function Expertise() {
    const classes = useStyles();
    return (
        <section className = {classes.expertiseSection}>
            <Container maxWidth = "xl" className = {classes.containerStyle}>
                <Typography variant = "h3" align = "center">Expertise you can rely on</Typography>
                <div className = {classes.domains}>
                    <Grid container className = {classes.domainGridStyle}>
                        <Grid item xl = {6}>
                            <Typography className = {classes.expertiseDomainHead}>Domains</Typography>
                            <Typography className = {classes.expertiseDomainText}>
                                 Our experience of creating solutions for particular industries has allowed us to grow in-house expertise which we share with our customers. We provide consultations on every stage of the project development and build products following the best industry standards.
                            </Typography>
                        </Grid>
                        <Grid item xl = {6}>
                            <div className = {classes.expertiseSectionIconBox}>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {FinanceIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Finance</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {EcommarceIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>E-Commarce</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {TravelIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Travel</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {AutomotiveIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Automotive</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {AccommodationRentalIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Accommodation rental</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {InsuranceIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Insurance</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className = {classes.domains}>
                    <Grid container >
                    <Grid item xl = {6} className = {classes.domainGridStyle}>
                            <div className = {classes.expertiseSectionIconBox}>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {RubyIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Ruby</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {RailsIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Ruby on Rails</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {VueIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Vue.js</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {ReactIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>React</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {PostgreSQLIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>PostgreSQL</Typography>
                                </div>
                                <div className = {`${classes.expertiseSectionLogoBox} ${classes.expertiseSectionDomain}${classes.expertiseSectionDomainFinance}`}>
                                    <img src = {AngularIcon} className = {classes.FinanceIconStyle}></img>
                                    <Typography className = {classes.expertiseSectionDomainName}>Angular</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xl = {6}>
                            <Typography className = {classes.expertiseDomainHead}>Tech stack</Typography>
                            <Typography className = {classes.expertiseDomainText}>
                                 Over the years, we have picked a list of tools helping us build high-quality custom products that solve all business challenges. Together with our efficient development process, these tools enable us to keep the cost of custom software development within our clients’ expectations
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className = {classes.aboutOurExpertise}>
                    <Grid container className = {classes.ourExpertiseContainer}>
                        <Grid item xl ={8} className = {classes.ourExpertiseContainerStyle}>
                            <Typography variant = "h6" className={styles}>
                                Want to know more about our expertise?
                                <span><Typography component = "p">Codica team members regularly share valuable insights on our blog.</Typography></span>
                            </Typography>
                        </Grid>
                        <Grid item xl ={4}>
                             <Button variant = "contained" color = "secondary" className = {classes.btnSeeArticles}>See articles</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}
