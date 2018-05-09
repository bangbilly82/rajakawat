import React, { Component } from 'react';

class Loader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="loader-container">
        <div className="loader-gif">
          <img src={require('../../static/images/loader.gif')}/>
        </div>
      </div>
    );
  }
}

export default Loader;
