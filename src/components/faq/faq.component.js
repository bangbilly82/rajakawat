import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Faq extends Component {

  render() {
    const { faqHeading: title, faq: content } = this.props;
    return (
      <section className="faq-detail-container">
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
    );
  }
}

export default Faq;
