import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import MultiVendorVehicle from '../../images/multi-vendor-vehicle-marketplace.png'
import OnlineCollaborationMarketImage from '../../images/onlinecollaborationmarket.png'
import OnlineTravelMarketplaceImage from '../../images/onlinetravelmarketplace.png'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme =>({

    containerstyle :{
        maxWidth :"1180px",
        margin :"0 auto"
    },
    serviceFeturedSection :{
        padding :"90px 0 0",
        marginLeft :"-15px",
        marginRight :"-15px"
    },
    serviceGlobalSubHead:{
        maxWidth:"850px",
        margin :"20px auto 0",
        color :"#232323",
        fontSize :"20px",
        lineHeight :"32px"
    },
    serviceFeturedSectionBox:{
        padding :"60px 0 0px",
        display :"flex",
        flexDirection :"row",
        justifyContent :"space-between"
    },
    MultiVendorVehicleHover :{
        "&:hover": {
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
        }
    },
    serviceFeturedSectionTitle:{
        fontSize:"30px",
        lineHeight :"45px",
        marginBottom :"20px",
        textDecoration :"none",
        color :"#232323",
        "&:hover": {
            textDecoration :"none",
            color :"#ed3e44"
        }
    },
    serviceFeturedSectionTitleText:{
        marginBottom :"20px"
    },
    serviceFeturedSectionDescription:{

        fontSize :"22px",
        lineHeight :"30px",
        marginBottom :"10px"
    },
    // serviceFeturedSectionView:{
    //     marginBottom :"20px",
    //     color :"#ed3e44",
    //     "&:hover":{
    //         textDecoration :"none",
    //         color :"#ed3e44",
    //     }
    // },
    serviceFeturedSectionViewText :{
        marginBottom :"20px"
    },
    arrowIconHover :{
        "&:hover":{
            webkitTransform: 'translateX(5px)',
            transform: 'translateX(5px)'
        }
    },
    serviceFeturedSectionButtomBox :{
        display :"flex",
        flexDirection :"row",
        justifyContent :"space-between"
    },
    serviceFeturedSectionNumberHead:{
        color:"#3d4067",
        fontSize:"35px",
        lineHeight:"35px",
        marginBottom :"10px"
    },
    serviceFeturedSectionNumberTitle :{
        fontSize :"16px",
        lineHeight:"22px",
        maxWidth :"190px"
    },
    btnViewAllOurWorks :{
        justifyContent :"center",
        padding :"30px 0",
        marginBottom :"90px",
        
    },
    btnViewAllOurWorksHover :{
        backgroundColor: "#ed3e44",
        textTransform :"inherit",
        "&:hover": {
            webkitTransform: 'translateY(-5px)',
            transform: 'translateY(-5px)',
            color: "#fff",
            backgroundColor: "#ed3e44",
            boxShadow: '0 15px 15px 0 rgba(0,0,0,.05)'
        }
    },
    serviceFeturedSectionView:{
        display :"flex",
        color :"#ed3e44",
        // marginLeft :"10px",
        marginTop:"5px",
        marginBottom :"20px",
        "&:hover": {
            color:"#ed3e44",
            webkitTransform: 'translateX(5px)',
            transform: 'translateX(5px)',
            textDecoration :"none",
        }
    }
   
}))

function DiscoverOurWorks() {
    const classes = useStyles()
    return (
        <section>
            <Container maxWidth = "xl" className = {classes.containerstyle} disableGutters = {true}>
                <div className = {classes.serviceFeturedSection}>
                    <Typography variant = "h2" align = "center">Discover our works</Typography>
                    <Typography component = "p" className ={classes.serviceGlobalSubHead} align = "center">
                        We have helped successfully launch clients' projects of different stages:  from product idea validation, MVP implementation to scaling, further development and support.
                    </Typography>
                    <Grid container className = {classes.serviceFeturedSectionBox}>
                        <Grid item xl ={6} lg = {6} md ={12}>
                            <a className = {classes.serviceFeturedSectionImage} href = "/">
                                 <img src= {MultiVendorVehicle} className = {classes.MultiVendorVehicleHover} alt="Featured project: Multi-vendor marketplace | Codica" title="Featured project: Multi-vendor marketplace | Codica" />
                            </a>
                        </Grid>
                        <Grid item xl={5} lg = {5} md = {12}>
                            <a className = {classes.serviceFeturedSectionTitle} href = "/">
                                <Typography variant = "h4" className = {classes.serviceFeturedSectionTitleText}>Multi-vendor vehicle marketplace</Typography>
                            </a>
                            <Typography component = "p" className = {classes.serviceFeturedSectionDescription}>
                                This is the first vehicle marketplace platform in Africa, and it consists of 90+ independent marketplaces, fully localized for each country. The marketplace was initially designed, developed and optimised with focus on mobile experience.
                            </Typography>
                            {/* <a className = {classes.serviceFeturedSectionView} href = "/">
                                <Typography component = "p" className = {classes.serviceFeturedSectionViewText}>View case study <span><TrendingFlatIcon className ={classes.arrowIconHover} /></span></Typography>
                            </a> */}
                                        <a className = {classes.serviceFeturedSectionView}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                <Grid container className = {classes.serviceFeturedSectionButtomBox}>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>90+</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>online marketplaces operating as part of the platform</Typography>
                                    </Grid>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>430%</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>traffic growth for the past 2 years thanks to SEO-optimised website</Typography>
                                    </Grid>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className = {classes.serviceFeturedSectionBox}>
                         <Grid item xl={5} lg = {5} md = {12}>
                            <a className = {classes.serviceFeturedSectionTitle} href = "/">
                                <Typography variant = "h4" className = {classes.serviceFeturedSectionTitleText}>Online collaboration market network</Typography>
                            </a>
                            <Typography component = "p" className = {classes.serviceFeturedSectionDescription}>
                                 This Australia-based collaboration platform enables entrepreneurs to  connect with digital experts, create teams and work with them on the projects within the online solution.
                            </Typography>
                                        <a className = {classes.serviceFeturedSectionView}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                <Grid container className = {classes.serviceFeturedSectionButtomBox}>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>1200+</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>active users at the platform</Typography>
                                    </Grid>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>250+</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>projects completed by the users</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl ={6} lg = {6} md ={12}>
                            <a className = {classes.serviceFeturedSectionImage} href = "/">
                                 <img src= {OnlineCollaborationMarketImage} className = {classes.MultiVendorVehicleHover} alt="Featured project: Multi-vendor marketplace | Codica" title="Featured project: Multi-vendor marketplace | Codica" />
                            </a>
                        </Grid>
                    </Grid>
                    <Grid container className = {classes.serviceFeturedSectionBox}>
                        <Grid item xl ={6} lg = {6} md ={12}>
                            <a className = {classes.serviceFeturedSectionImage} href = "/">
                                 <img src = {OnlineTravelMarketplaceImage} className = {classes.MultiVendorVehicleHover} alt="Featured project: Multi-vendor marketplace | Codica" title="Featured project: Multi-vendor marketplace | Codica" />
                            </a>
                        </Grid>
                        <Grid item xl={5} lg = {5} md = {12}>
                            <a className = {classes.serviceFeturedSectionTitle} href = "/">
                                <Typography variant = "h4" className = {classes.serviceFeturedSectionTitleText}>Online travel marketplace</Typography>
                            </a>
                            <Typography component = "p" className = {classes.serviceFeturedSectionDescription}>
                            The platform was built for an Australia-based expedition and travel company.  This custom online marketplace boasts a convenient booking system with many destinations, and an easy-to-use admin panel.
                            </Typography>
                            <a className = {classes.serviceFeturedSectionView}>
                                            <Typography>View case story</Typography>
                                            <TrendingFlatIcon style = {{marginLeft:"10px"}}></TrendingFlatIcon>
                                        </a>
                                <Grid container className = {classes.serviceFeturedSectionButtomBox}>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>$2 mln</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>worth of sales brought by the website within the first year</Typography>
                                    </Grid>
                                    <Grid item xl ={6}>
                                        <Typography className = {classes.serviceFeturedSectionNumberHead}>385%</Typography>
                                        <Typography className = {classes.serviceFeturedSectionNumberTitle}>traffic growth for the past 2 years thanks to SEO-optimised website</Typography>
                                    </Grid>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className = {classes.btnViewAllOurWorks}>
                        <Button variant = "contained" color ="secondary" className = {classes.btnViewAllOurWorksHover}>View all our works</Button>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}

export default DiscoverOurWorks