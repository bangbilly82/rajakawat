import React, { Component } from 'react';
import { connect } from "react-redux";
import Media from "react-media";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Maps from '../../components/shared/maps.component';

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
      text: 'Singapore-based Helicap is a new fintech platform that aims to bring a fund management angle in the peer-to-peer (P2P) lending space. To make this happen, it has raised US$1.5 million in seed funding.'
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

  generateForm(isMobile = false) {
    return (
      <div className={"contact-us__form " + ((isMobile) ? 'is-mobile' : null)}>
        <div className="columns">
          <div className="column">
            <h3 className="title is-3">Lorem <span>Ipsum</span></h3>
            <hr />
            <address>
              Address : Jl. Lorem Ipsum RT 02/XI <br/>
              Email : info@rajakawat.com <br/>
              Phone : 0271 - 666666
            </address>
          </div>
          <div className="column">
            <h4 className="title is-4">Leave a Comment</h4>
            <form>
              <div className="columns">
                <div className="column">
                  <input className="input" type="text" placeholder="Your Name"/>
                </div>
                <div className="column">
                  <input className="input" type="text" placeholder="Your Email"/>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <textarea className="textarea" placeholder="Your Comment"></textarea>
                </div>
              </div>
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
