import React, { Component } from 'react';
import ServiceHelper from '../../utils/ServiceHelper';

class Service extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: ServiceHelper.services
    }
  }

  generateThumbnail() {
    const { services } = this.state;
    let service;
    service = services.map((item, index) => {
      return (
        <div className="column" key={index}>
          <img src={require(`../../static/images/icon/icon-home-${index + 1}.png`)} width="80px"/>
          <h5 className="title is-5">{item.title}</h5>
        </div>
      )
    })
    return service;
  }

  render() {
    return (
      <section className="service-container">
        <div className="columns">
          {this.generateThumbnail()}
        </div>
      </section>
    );
  }
}

export default Service;
