import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import Faq from '../../components/faq/faq.component';
import Blog from '../../components/blog/blog.component';

const mapStateToProps = (state) => {
  return {
    link: state.header.link,
    faqContent: state.faq.content
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentHeader: (value) => {
      dispatch(actionCreators.setCurrentHeader(value));
    },
    setHeaderBackground: (background) => {
      dispatch(actionCreators.setHeaderBackground(background));
    },
    getFaq: () => {
      dispatch(actionCreators.getFaq());
    }
  }
}

class FaqPage extends Component {
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
    this.props.getFaq();
    this.resetScroll();
  }

  generateFaq() {
    const { faqContent } = this.props;
    if (faqContent) {
      const props = faqContent.fields;
      return (
        <Faq {...props} />
      );
    }
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HeadTag title={'Raja Kawat - FAQ'}/>
        <div className="container is-fullhd">
          {this.generateFaq()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaqPage);
