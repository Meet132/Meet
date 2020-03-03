import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme =>({



}));

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `yellow`,
      marginBottom: `1rem`,
      zIndex : 110,
      top:0,
      position : "fixed",
      color:"black",
      width:"100%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1>Heelo</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
