import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import About from '../../components/homepage/about.component';
import Service from '../../components/homepage/service.component';
import Work from '../../components/homepage/work.component';
import Flow from '../../components/homepage/flow.component';
import Contact from '../../components/contact/contact.component';

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

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lorem Ipsum',
      text: 'While regulators across Southeast Asia worry about Grab’s virtual monopoly on the ride-hailing market after Uber’s departure, the reality is that it isn’t the only game in town.'
    }
  }

  componentWillMount() {
    this.props.setCurrentHeader(this.props.location.pathname);
    this.props.setHeaderBackground('transparent');
    this.resetScroll();
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HeadTag title={'Raja Kawat - Homepage'}/>
        <div>
          <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage.png'}/>
          <About />
          <Service />
          <Work />
          <Flow />
          <Contact title={'Tell us what you need'} text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
