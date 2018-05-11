import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
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
      header: Config.header
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
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
        <Link to={link.path} style={(currentLink === link.path) ? active : null} key={index}>{link.name}</Link>
      );
    })
    return links;
  }

  setCurrentHeader(value) {
    this.props.setCurrentHeader(value);
  }

  render() {
    const { backgroundColor } = this.props;
    const { color, isTransparent } = this.state;
    const style = {
      background: (color === null) ? backgroundColor : color,
      padding: (isTransparent) ? null : '1rem 6rem'
    }
    return (
      <div className="container is-fullhd">
        <div className={"header " + ((isTransparent) ? null : 'is-shadowed')} style={style}>
          <div className="item">
            <div className="logo">
              <Link to={"/"}><img src={Logo} width={((isTransparent) ? '150px' : '100px')}/></Link>
            </div>
          </div>
          <div className="item">
            <div className={'menu ' + ((isTransparent) ? null : 'is-not-transparent')}>
              {this.generateHeaderLink()}
            </div>
          </div>
          <div className="item">
            <div className={"social-media " + ((isTransparent) ? null : 'is-not-transparent')}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
