import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Media from "react-media";

class Faq extends Component {

  generateContent(isMobile = false) {
    const { faqHeading: title, faq: content } = this.props;
    return (
      <section className={"faq-detail-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">{title}</h3>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="content">
              <ReactMarkdown source={content} />
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

export default Faq;
