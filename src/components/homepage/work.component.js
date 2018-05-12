import React, { Component } from 'react';
import Media from "react-media";
import Button from '../shared/button.component';
import WorksHelper from '../../utils/WorksHelper';

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      works: WorksHelper.works
    }
  }

  handleClick() {
    alert('button clicked');
  }

  generateThumbnail() {
    const { works } = this.state;
    let work;
    work = works.map((item, index) => {
      return (
        <div className="column is-one-third" key={index}>
          <a href="#">
            <div className="image-thumbnail">
              <img src={require(`../../static/images/service/service${index + 1}.png`)}/>
              <div className="title">
                <h5>{item.title}</h5>
              </div>
              <div className="description">
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        </div>
      ); 
    })
    return work;
  }

  generateContent(isMobile = false) {
    return (
      <section className={"work-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Our <span>Works</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-multiline">
          {this.generateThumbnail()}
        </div>
        <div className="button-more">
          <Button text="View All Services" clickHandler={this.handleClick} uppercase/>
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

export default Work;
