import React, { Component } from 'react';

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
        <div className="overlay" style={style}>
          <h1 className="title is-1">{this.props.title}</h1>
          <hr className={`${alignment}-alignment`}/>
          <p>
            {this.props.text}
          </p>
        </div>
      </section>
    );
  }
}

export default Hero;
