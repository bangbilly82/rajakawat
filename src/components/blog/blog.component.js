import React, { Component } from 'react';
import WorksHelper from '../../utils/WorksHelper';

class Blog extends Component {

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
              <div className="description">
                <h5 className="title is-5">{item.title}</h5>
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

  render() {
    const style = {
      'text-align': this.props.alignment
    }
    return (
      <section className="blog-container">
        <h3 className="title is-3">Lorem <span>Ipsum</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-multiline">
          {this.generateThumbnail()}
        </div>
      </section>
    );
  }
}

export default Blog;
