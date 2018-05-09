import React, { Component } from 'react';

class Scroller extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.pageYOffset > 400) {
      this.setState({
        show: true
      });
    } else if (window.pageYOffset < 400) {
      this.setState({
        show: false
      });
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth' 
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="scroller-container">
        <div className={'scroller ' + ((show) ? 'show' : '')} onClick={this.scrollToTop}>
          <i className="fa fa-chevron-up"></i>
        </div>
      </div>
    );
  }
}

export default Scroller;
