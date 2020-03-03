import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TopWebDevelopr from '../../images/topwebdevelopers.png'
import TopSoftwareDevelopment from '../../images/topsoftwaredevelopment.png'
import TopAppDevelopment from '../../images/topappdevelopers.png'
import TopRubyRails from '../../images/toprubyonrails.png'
import TopDigitalAgency from '../../images/topdigitalagency.png'
import TopCustomeSoftware from '../../images/topcustomsoftwaredevelopment.png'



const useStyles = makeStyles(theme => ({

    root:{
        bottom:0,
        position:"relative",
        marginTop :"50px"
        // width:"94%",
        // left :"2%",
        // right :"2%"

    },
    footerBox :{
        display:"flex",
        flexDirection:"row",
        maxWidth :"94%",
        margin :"0 auto"
    },
    footerButtom:{
        maxWidth :"94%",
        margin :"0 auto"
    },

    footerBoxTop :{
        marginBottom :"10px",
        display:"flex",
        flexDirection :"row",
        justifyContent :"space-between"
    },
    footerBootomBox :{
        display:"flex",
        flexDirection :"row",
        justify :"space-around",
        color :"grey",
        fontSize :"20px",
        padding:"3px",
        marginTop :"5px"
    },
    footerLocationStyle :{
        float : "right",
        '@media(max-width:962px)' :{
            float :"none",
        }
    },
    iconStyle :{
        height :"70px",
        width :"auto",
        marginTop:"3px",
        marginBottom :"0px",
        marginLeft :"10px"
    },
    navServiceStyle :{
        listStyleType :"none",
        margin:"0px",
        textAlign:"left",
        padding:"5px"
    },
    navServiceList :{
        color : "#7b7b7b",
        "&:hover": {
            color: "#ed3e44"
        },
    },
    footerMainHeading :{
        fontSize :"20px",
        color :"#232323",
        fontFamily: "Poppins-Bold,sansSerif",
        textAlign :"left"
    },
    socialIconStyle : {

        marginRight :"15px"
    },
    footerGridBoxStyle : {
        padding :"0px 10px 0px 10px",
        margin :"0px 10px 0px 10px"
    },
    btnContactUsStyle :{
        "&:hover": {
            color: "white",
            background :"#ed3e44"
        },
    }
}))

const IIHServices = () =>{
    const classes = useStyles();
    return(
        <nav>
            <ul className ={classes.navServiceStyle} style = {{padding:"1px"}}>
                {iihServices.map((link) =>{
                    return(
                        <li key ={link.name} className = {classes.navServiceList} >{link.name}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

const FooterMenuLinks = () =>{
    const classes = useStyles();
    return(
        <nav>
            <ul className ={classes.navServiceStyle}>
                {footerMenuLinks.map((link) =>{
                    return(
                        <li key ={link.name} className = {classes.navServiceList} >{link.name}</li>
                    )
                })}
            </ul>
        </nav>
    )
}
const FooterComanyDetails = () =>{
    const classes = useStyles();
    return(
        <nav>
            <ul className ={classes.navServiceStyle}>
                {comapnyContanctDetails.map((link) =>{
                    return(
                        <li key ={link.name} className = {classes.navServiceList} >{link.value}</li>
                    )
                })}
            </ul>
        </nav>
    )
}
function Footer() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
                <div className = {classes.footerBox}>
                <Grid container className = {classes.footerBoxTop}>
                    <Grid item xs={12} md ={3} lg={3} xl={3} style ={{padding :"0px 10px 0px 10px"}}>
                        <div style ={{display:"flex" ,flexDirection :"column"}} >
                            <div>
                                <img src = "https://www.whatech.com/media/com_mtree/images/listings/m/7485.jpg" alt ="IIh" className = {classes.iconStyle}/>
                            </div>
                            <div>
                                <Typography component = "p" style ={{fontSize:"16px",color:"#7b7b7b",maxWidth :"266px",margin:"15px 0 30px"}}>
                                    Custom software development consultancy. We love creating reliable, robust and visually appealing web apps using Ruby on Rails, Angular, React, Vue.js.
                                </Typography>
                            </div>
                            <div>
                                <Button variant = "outlined" color ="secondary" className = {classes.btnContactUsStyle}>Contact Us</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs ={12} lg ={9} md ={9} xl ={9}>
                        <Grid container>
                            <Grid item xs ={12} md ={3} lg= {2} className = {classes.footerGridBoxStyle} style ={{paddingRight : "1px"}}>
                                <div>
                                    <Typography variant = "h6" className = {classes.footerMainHeading}>Services</Typography>
                                    <IIHServices />
                                 </div>
                            </Grid>
                            <Grid item xs ={12} md ={5} lg= {5} style ={{display:"flex" ,flexDirection :"row"}}>
                                <Grid item xs= {12} md ={6} lg ={6} className = {classes.footerGridBoxStyle}>
                                    <div>
                                         <Typography 
                                            component = "p"
                                            className = {classes.footerMainHeading}>
                                             Company
                                         </Typography>
                                         <FooterMenuLinks />
                                     </div>
                                </Grid>
                                <Grid item xs= {12} md ={6} lg ={6} className = {classes.footerGridBoxStyle}>
                                    <div>
                                        <Typography 
                                            component = "p"
                                            className = {classes.footerMainHeading}>
                                            Contact
                                        </Typography>
                                        <FooterComanyDetails />
                                        <Typography 
                                            component = "p"
                                            className = {classes.footerMainHeading}>
                                            Socials
                                        </Typography>
                                            <a 
                                                href = "https://www.facebook.com/CodicaCom" target="_blank">
                                                    <FacebookIcon className = {classes.socialIconStyle} />
                                            </a>
                                            <a 
                                                href="https://twitter.com/codicacom" target="_blank">
                                                    <TwitterIcon className = {classes.socialIconStyle}/>
                                            </a>
                                            <a 
                                                href="https://www.linkedin.com/company/codica-com/" target="_blank">
                                                    <LinkedInIcon className = {classes.socialIconStyle}/>
                                            </a>
                                            <a 
                                                href="https://github.com/codica2" target="_blank">
                                                    <GitHubIcon className = {classes.socialIconStyle}/>
                                            </a>
                                            <a 
                                                href="https://www.instagram.com/codica_com" target="_blank">
                                                    <InstagramIcon className = {classes.socialIconStyle}/>
                                            </a>
                                            <a href ="https://medium.com/codica" target="_blank">
                                                <img src = "https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" height ="24px" width = "24px" style ={{marginBottom :"0.1rem"}}></img>
                                            </a>
                                        </div>
                                 </Grid>
                            </Grid>
                            <Grid item xs ={12} md ={4} lg= {4} className = {classes.footerGridBoxStyle}>
                                <div>
                                    <Typography component = "p">
                                        Awards
                                    </Typography>
                                    <Grid container>
                                        <Grid item xl = {4}>
                                            <img src = {TopWebDevelopr} height ="90px" width ="90px" ></img>
                                        </Grid>
                                        <Grid item xl = {4}>
                                            <img src = {TopSoftwareDevelopment} height ="90px" width ="90px" ></img>
                                        </Grid>
                                        <Grid item xl = {4}>
                                            <img src = {TopAppDevelopment} height ="90px" width ="90px" ></img>
                                        </Grid>
                                        <Grid item xl = {4}>
                                            <img src = {TopRubyRails} height ="90px" width ="90px" ></img>
                                        </Grid>
                                        <Grid item xl = {4}>
                                            <img src = {TopDigitalAgency} height ="90px" width ="90px" ></img>
                                        </Grid>
                                        <Grid item xl = {4}>
                                            <img src = {TopCustomeSoftware} height ="90px" width ="90px" ></img>
                                        </Grid>
                                    </Grid>
                                 </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>          
                </div>
                <div className = {classes.footerButtom}>
                    <Divider />
                    <Grid container className ={classes.footerBootomBox}>
                        <Grid item xs={12} md={4} lg= {6} xl ={6} >
                            <Typography variant ="h6">© 2020 Codica OU</Typography>
                        </Grid>
                        <Grid item xs={12} md ={6} lg= {6} xl ={6}>
                           <Typography component = "p" className = {classes.footerLocationStyle}><LocationOnIcon style ={{fontSize :"17px"}}/> 11411, Majaka 26, Tallinn, Estonia</Typography>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )
}

const iihServices = [
    {
        name :"Custom software development",
        link :"/CustomSoftwareDevelopment/"
    },
    {
        name :"Online marketplace development",
        link :"/OnlineMarketplaceDevelopment/"
    },
    {
        name :"SaaS development",
        link :"/SaaSDevelopment/"
    },
    {
        name :"PWA development",
        link :"/PWADevelopment/"
    },
    {
        name :"UI/UX design",
        link :"/UI/UXdesign/"
    },
    {
        name :"MVP development",
        link :"/MVPdevelopment/"
    },    
]

const footerMenuLinks = [
    {
        name :"Company",
        link :"/company/"
    },
    {
        name :"Case Studies",
        link :"/caseStudies/"
    },
    {
        name :"Approach",
        link :"/approach/"
    },
    {
        name :"Careers",
        link :"/careers/"
    },
    {
        name :"Blog",
        link :"/blog/"
    }
]
const comapnyContanctDetails = [
    {
        name :"email",
        value :"hello@codica.com"
    },
    {
        name :"phone",
        value :"+380977789031"
    }
]

export default Footer