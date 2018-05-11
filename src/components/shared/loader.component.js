import React, { Component } from 'react';

class Loader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    const { loading } = this.props;
    return (
      (loading) ? 
      <div className="loader-container">
        <div className="loader-gif">
          <img src={require('../../static/images/loader.gif')}/>
        </div>
      </div> : null
    );
  }
}

export default Loader;
