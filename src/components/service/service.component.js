import React, { Component } from 'react';
import _ from 'lodash';
import Media from "react-media";
import WorksHelper from '../../utils/WorksHelper';

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      works: WorksHelper.works
    }
  }

  handleClick() {
    alert('button clicked');
  }

  filterByServiceName(service) {
    const { content } = this.props;
    const filteredData = _.filter(content, (obj) => {
      return obj.fields.serviceName.toLowerCase() === service;
    });
    return filteredData;
  }

  generateThumbnail() {
    const { works } = this.state;
    let work;
    work = works.map((item, index) => {
      return (
        <div className="column is-one-third" key={index}>
          <div>
            <div className="image-thumbnail">
              <img src={require(`../../static/images/service/service1.png`)}/>
              <div className="title">
                <h5>{item.title}</h5>
              </div>
              <div className="description">
                <p>
                  {item.description}
                </p>
                <a className="button-service" href="/service/detail">
                  View Service
                </a>
              </div>
            </div>
          </div>
        </div>
      ); 
    })
    return work;
  }

  generateServiceThumbnail(service, tallerClass = false) {
    const data = this.filterByServiceName(service);
    if (!_.isEmpty(data)) {
      const imageUrl = data[0].fields.thumbnailImage && data[0].fields.thumbnailImage.fields.file.url;
      const tallerclass = tallerClass ? 'taller' : '';
      return (
        <div className={`image-thumbnail ${tallerclass}`}>
          <img src={imageUrl}/>
          <div className="title">
            <h5>{data[0].fields.serviceName}</h5>
          </div>
          <div className="description">
            <p>
              {data[0].fields.shortDescription}
            </p>
            <a className="button-service" href={`/service/detail/${data[0].fields.slug}`}>
              View Service
            </a>
          </div>
        </div>
      );
    }
    return null;
  }

  generateContent(isMobile = false) {
    return (
      <section className={"work-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Our <span>Services</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-services">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('kap baja')}
                  </article>
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('tralis')}
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('pagar', true)}
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('kanopi')}
                  </article>
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('railing tangga')}
                  </article>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('pintu lipat')}
                  </article>
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('pintu dorong')}
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('ornamen tempat')}
                  </article>
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('konsol')}
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    {this.generateServiceThumbnail('balkon', true)}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Services;
