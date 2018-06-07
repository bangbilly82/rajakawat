import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Media from "react-media";
import * as actionCreators from '../../action-creator/index';
import Config from '../../config/config';
import Logo from '../../static/images/icon/rajakawat-logo.png';

const mapStateToProps = (state) => {
  return {
    link: state.header.link,
    backgroundColor: state.header.background
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentHeader: (value) => {
      dispatch(actionCreators.setCurrentHeader(value));
    }
  }
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: null,
      isTransparent: true,
      header: Config.header,
      mobileShow: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  setCurrentHeader(value) {
    this.props.setCurrentHeader(value);
  }

  handleScroll() {
    if (window.pageYOffset > 150) {
      this.setState({
        color: '#fff',
        isTransparent: false
      });
    } else if (window.pageYOffset < 150) {
      this.setState({
        color: null,
        isTransparent: true
      });
    }
  }

  generateHeaderContent(isMobile = false) {
    const { backgroundColor } = this.props;
    const { color, isTransparent } = this.state;
    const style = {
      background: (color === null) ? backgroundColor : color,
      padding: (isTransparent || isMobile) ? null : '1rem 6rem'
    }
    const styleMobile = {
      background: (color === null) ? backgroundColor : color
    }
    if (isMobile) {
      return this.mobileHeader(isTransparent, styleMobile);
    }
    return this.desktopHeader(isTransparent, style);
  }

  generateLogo(isTransparent) {
    return (
      <div className="item">
        <div className="logo">
          <Link to={"/"}><img src={Logo} width={((isTransparent) ? '150px' : '100px')}/></Link>
        </div>
      </div>
    )
  }

  generateSocialMediaLink(isTransparent) {
    return (
      <div className="item">
        <div className={"social-media " + ((isTransparent) ? null : 'is-not-transparent')}>
          <a><i className="fa fa-facebook"></i></a>
          <a><i className="fa fa-twitter"></i></a>
          <a><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    )
  }

  generateHeaderLink() {
    const { link: currentLink } = this.props;
    const { header } = this.state;
    let links;
    links = header.map((link, index) => {
      const active = {
        fontWeight: '700',
        borderBottom: '2px solid #aaa'
      };
      return (
        <Link to={link.path} style={(currentLink === link.path) ? active : null} key={index} onClick={this.showMobileMenu.bind(this)}>{link.name}</Link>
      );
    })
    return links;
  }

  desktopHeader(isTransparent, style) {
    return (
      <div className={"header " + ((isTransparent) ? null : 'is-shadowed')} style={style}>
        {this.generateLogo(isTransparent)}
        <div className="item">
          <div className={'menu ' + ((isTransparent) ? null : 'is-not-transparent')}>
            {this.generateHeaderLink()}
          </div>
        </div>
        {this.generateSocialMediaLink(isTransparent)}
      </div>
    )
  }

  mobileHeader(isTransparent, style) {
    const { mobileShow } = this.state;
    const iconBars = <i className="fa fa-bars"></i>;
    const iconCross = <i className="fa fa-times"></i>;
    return (
      <div className={"header-mobile"}>
        <div className={"header-mobile__trigger " + ((isTransparent) ? null : 'is-shadowed')} style={style}>
          <Link to={"/"}><img src={Logo} width="100px"/></Link>
          <span className="header-bars" onClick={this.showMobileMenu.bind(this)} style={((isTransparent) ? {color: '#fff'} : {color: '#333'})}>{(mobileShow) ? iconCross : iconBars}</span>
        </div>
        <div className={"header-mobile__off-canvas " + ((mobileShow) ? null : 'hide')}>
          {this.generateLogo(false)}
          <div className="item">
            <div className={'menu'}>
              {this.generateHeaderLink()}
            </div>
          </div>
          {this.generateSocialMediaLink(false)}
        </div>
      </div>
    )
  }

  showMobileMenu() {
    this.setState({
      mobileShow: !this.state.mobileShow
    })
  }

  render() {
    const { backgroundColor } = this.props;
    const { color, isTransparent } = this.state;
    const style = {
      background: (color === null) ? backgroundColor : color,
      padding: (isTransparent) ? null : '1rem 6rem'
    }
    return (
      <div>
        <Media query="(max-width: 420px)">
          {matches =>
            matches ? (
              this.generateHeaderContent(true)
            ) : (
              this.generateHeaderContent()
            )
          }
        </Media>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
