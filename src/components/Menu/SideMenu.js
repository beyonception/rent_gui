import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import config from "../../config";
import MenuItem from "./MenuItem"

class SideMenu extends Component {
  state = {
    UserName: ""
  };

  authenticateWithRefreshToken = (userAuth) => {
    Axios.post(config.urls.AUTH_SERVICE + "authenticateWithrefreshtoken", userAuth)
      .then(res => {
        localStorage.setItem("userAuth", JSON.stringify(res.data));
      })
      .catch((err) => {
        throw err;
      })
  }

  decodeToken = (userAuth) => {
    Axios.post(config.urls.AUTH_SERVICE + "decodeToken", userAuth)
      .then(res => {
        if (res.data.user !== null || res.data.user !== undefined) {
          this.setState({ UserName: res.data.user.FirstName });
        }
        if (res.data.status === 403) {
          userAuth = { "refresh_token": JSON.parse(localStorage.getItem("userAuth")).refresh_token };
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  componentDidMount = async () => {
    let userAuth = { "access_token": JSON.parse(localStorage.getItem("userAuth")).access_token };
    let isAuthorised = this.decodeToken(userAuth);
    if (!isAuthorised) {
      userAuth = { "refresh_token": JSON.parse(localStorage.getItem("userAuth")).refresh_token };
      this.authenticateWithRefreshToken(userAuth);
      userAuth = { "access_token": JSON.parse(localStorage.getItem("userAuth")).access_token };
      this.decodeToken(userAuth);
    }
  }

  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary">
          <Link to='/dashboard' className="brand-link">
            <img src={require('../../assets/images/Logo.png')} className="brand-image img-circle elevation-3" alt="logo" />
            <span className="brand-text font-weight-light">Rent Management</span>
          </Link>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src={require('../../assets/images/user.jpg')} className="img-circle elevation-2" alt="User Logo"></img>
              </div>
              <div className="info">
                <a href="#" className="d-block">{this.state.UserName}</a>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuItem
                  routePath="/ManageUsers"
                  menuText="Manage Users"
                />
                <MenuItem
                  routePath="/ManageExpenses"
                  menuText="Manage Expenses"
                />
                <MenuItem
                  routePath="/"
                  menuText="Logout"
                />
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default SideMenu; 