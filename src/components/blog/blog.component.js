import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Media from "react-media";
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
    const { posts } = this.props;
    let post;
    post = posts.map((item, index) => {
      const title = item.fields.title.substr(0, 50) + '...';
      const slug = item.fields.slug;
      const imageUrl = item.fields.image.fields.file.url;
      const content = item.fields.content.substr(0, 120) + '...';
      return (
        <div className="column is-one-third" key={index}>
          <a href={'workflow/' + slug}>
            <div className="image-thumbnail">
              <div className="image">
                <img src={imageUrl}/>
              </div>
              <div className="description">
                <h5 className="title is-5">{title}</h5>
                <ReactMarkdown source={content} />
              </div>
            </div>
          </a>
        </div>
      ); 
    })
    return post;
  }

  generateContent(isMobile = false) {
    return (
      <section className={"blog-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Our <span>Blog</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-multiline">
          {this.generateThumbnail()}
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

export default Blog;
