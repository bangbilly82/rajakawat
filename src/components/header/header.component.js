import React, { Component } from 'react';
import Logo from '../../static/images/icon/rajakawat-logo.png';

class Header extends Component {
  render() {
    const { background } = this.props;
    const style = {
      background
    }
    return (
      <div className="container is-fullhd">
        <div className="header" style={style}>
          <div className="item">
            <img src={Logo} width="200px"/>
          </div>
          <div className="item">
            <div className="menu">
              <a>Home</a>
              <a>Service</a>
              <a>Work Flow</a>
              <a>Contact Us</a>
              <a>FAQ</a>
            </div>
          </div>
          <div className="item">
            <div className="social-media">
              <a><i className="fa fa-facebook"></i></a>
              <a><i className="fa fa-twitter"></i></a>
              <a><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
