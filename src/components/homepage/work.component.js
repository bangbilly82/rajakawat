import React, { Component } from 'react';
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
            </div>
          </a>
        </div>
      ); 
    })
    return work;
  }

  render() {
    const style = {
      'text-align': this.props.alignment
    }
    return (
      <section className="work-container">
        <h3 className="title is-3">Lorem <span>Ipsum</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-multiline">
          {this.generateThumbnail()}
        </div>
        <div className="button-more">
          <Button text="View All Services" clickHandler={this.handleClick} uppercase/>
        </div>
      </section>
    );
  }
}

export default Work;
