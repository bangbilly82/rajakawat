import React, { Component } from 'react';
import Media from "react-media";

class Hero extends Component {

  render() {
    const { alignment, background } = this.props;
    const style = {
      textAlign: this.props.alignment
    }
    const backgroundStyle = {
      backgroundImage: `url(${require('../../static/images/' + background)})`
    }
    return (
      <section className="homepage-container" style={backgroundStyle}>
        <Media query="(max-width: 420px)">
          {matches =>
            matches ? (
              <div className="overlay is-mobile" style={style}>
                <h1 className="title is-1">{this.props.title}</h1>
                <hr className={`${alignment}-alignment`}/>
                <p>
                  {this.props.text}
                </p>
              </div>
            ) : (
              <div className="overlay" style={style}>
                <h1 className="title is-1">{this.props.title}</h1>
                <hr className={`${alignment}-alignment`}/>
                <p>
                  {this.props.text}
                </p>
              </div>
            )
          }
        </Media>
      </section>
    );
  }
}

export default Hero;
