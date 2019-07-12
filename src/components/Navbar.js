import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import MyButton from "../util/MyButton";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/Notifications";

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <MyButton tip="Post a scream!">
                <AddIcon color="primary" />
              </MyButton>
              <Link>
                <MyButton tip="Home">
                  <HomeIcon color="primary" />
                </MyButton>
              </Link>
              <MyButton tip="Notifications">
                <NotificationIcon color="primary" />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

Navbar.propTypes = {
  authentiacated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Navbar);
