import React, { Component } from 'react';
import { connect } from "react-redux";
import Media from "react-media";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import { sendEmail } from '../../middleware/api';
import Maps from '../../components/shared/maps.component';
import Loader from '../../components/shared/loader.component';

const mapStateToProps = (state) => {
  return {
    link: state.header.link
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentHeader: (value) => {
      dispatch(actionCreators.setCurrentHeader(value));
    },
    setHeaderBackground: (background) => {
      dispatch(actionCreators.setHeaderBackground(background));
    }
  }
}

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Startup bags funds from Singapore ex-minister to get ultra-wealthy into crowdlending',
      text: 'Singapore-based Helicap is a new fintech platform that aims to bring a fund management angle in the peer-to-peer (P2P) lending space. To make this happen, it has raised US$1.5 million in seed funding.',
      sender: '',
      email: '',
      comment: '',
      loading: false
    }
  }

  componentWillMount() {
    this.props.setCurrentHeader(this.props.location.pathname);
    this.props.setHeaderBackground('black');
    this.resetScroll();
  }

  generateMaps() {
    return (
      <Maps />
    );
  }

  handleNameChange(evt) {
    this.setState({
      sender: evt.target.value
    });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  formSubmit(evt) {
    evt.preventDefault();
    const { sender, email, comment } = this.state;
    const payload = {
      sender: email,
      subject: sender,
      text: comment
    };
    this.setState({
      loading: true
    });
    sendEmail(payload, () => {
      this.setState({
        sender: '',
        email: '',
        comment: '',
        loading: false
      });
    });
  }

  generateForm(isMobile = false) {
    const { sender, email, comment } = this.state;
    return (
      <div className={"contact-us__form " + ((isMobile) ? 'is-mobile' : null)}>
        <div className="columns">
          <div className="column">
            <h3 className="title is-3">Contact <span>Us</span></h3>
            <hr />
            <address>
              Address : Jl. Lorem Ipsum RT 02/XI <br/>
              Email : info@rajakawat.com <br/>
              Phone : 0271 - 666666
            </address>
          </div>
          <div className="column">
            <h4 className="title is-4">Leave a Comment</h4>
            <form onSubmit={this.formSubmit.bind(this)}>
              <div className="columns">
                <div className="column">
                  <input className="input" type="text" placeholder="Your Name" value={sender} onChange={this.handleNameChange.bind(this)} required/>
                </div>
                <div className="column">
                  <input className="input" type="email" placeholder="Your Email" value={email} onChange={this.handleEmailChange.bind(this)} required/>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <textarea className="textarea" placeholder="Your Comment" value={comment} onChange={this.handleCommentChange.bind(this)} required/>
                </div>
              </div>
              <button className="button-service" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="contact-us__container">
        <HeadTag title={'Raja Kawat - FAQ'}/>
        <div>
          {this.generateMaps()}
          <Media query="(max-width: 420px)">
            {matches =>
              matches ? (
                this.generateForm(true)
              ) : (
                this.generateForm()
              )
            }
          </Media>
        </div>
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
