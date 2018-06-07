import React, { Component } from 'react';
import Media from "react-media";

class Footer extends Component {

  generateContent(isMobile = false) {
    return (
      <div>
        <div className={"footer " + ((isMobile) ? 'is-mobile' : null)}>
          <div className="item">
            <label>Copyright 2018 Raja Kawat</label>
            <p>Designed by Studibrandinc</p>
          </div>
          <div className="item">
            <label>0271 - 666666</label>
            <p>info@rajakawat.com</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Media query="(max-width: 420px)">
        {matches =>
          matches ? (
            this.generateContent(true)
          ) : (
            this.generateContent()
          )
        }
      </Media>
    );
  }
}

export default Footer;
