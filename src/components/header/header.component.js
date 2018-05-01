import React, { Component } from 'react';
import Logo from '../../static/images/icon/rajakawat-logo.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: null,
      isTransparent: true
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.pageYOffset > 230) {
      this.setState({
        color: '#fff',
        isTransparent: false
      });
    } else if (window.pageYOffset < 230) {
      this.setState({
        color: null,
        isTransparent: true
      });
    }
  }

  render() {
    const { background } = this.props;
    const { color, isTransparent } = this.state;
    const style = {
      background: (color === null) ? background : color,
      padding: (isTransparent) ? null : '1rem 6rem'
    }
    return (
      <div className="container is-fullhd">
        <div className={"header " + ((isTransparent) ? null : 'is-shadowed')} style={style}>
          <div className="item">
            <div className="logo">
              <img src={Logo} width={((isTransparent) ? '200px' : '150px')}/>
            </div>
          </div>
          <div className="item">
            <div className={'menu ' + ((isTransparent) ? null : 'is-not-transparent')}>
              <a href={"/"}>Home</a>
              <a href={"/service"}>Service</a>
              <a href={"/workflow"}>Work Flow</a>
              <a>Contact Us</a>
              <a>FAQ</a>
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

export default Header;
