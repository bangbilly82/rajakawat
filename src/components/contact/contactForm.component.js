import React, { Component } from 'react';
import Button from '../shared/button.component';

class ContactForm extends Component {

  handleClick() {
    alert('form submitted');
  }

  render() {
    return (
      <div className="contact-form">
        <h5 className="title is-5">Leave a Comment:</h5>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Your Name"/>
          </div>
          <p className="help">This is a help text</p>
        </div>
        <div className="field">
          <div className="control">
            <input className="input" type="email" placeholder="Your Email"/>
          </div>
          <p className="help">This is a help text</p>
        </div>
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Your Comment"></textarea>
          </div>
        </div>
        <div className="button-send">
          <Button text="Send" uppercase clickHandler={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default ContactForm;
