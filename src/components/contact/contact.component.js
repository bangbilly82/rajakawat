import React, { Component } from 'react';
import Media from "react-media";
import ContactForm from './contactForm.component';

class Contact extends Component {

  generateContent(isMobile = false) {
    const style = {
      textAlign: this.props.alignment
    }
    return (
      <section className={"contact-container " + ((isMobile) ? 'is-mobile' : null)}>
        <div className="overlay" style={style}>
          <div className="columns">
            <div className="column is-7 contact-heading">
              <h1 className="title is-1">{this.props.title}</h1>
              <hr />
              <p>
                {this.props.text}
              </p>
              <p className="sub-text">
                {this.props.text}
              </p>
            </div>
            <div className="column is-5 contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
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

export default Contact;
