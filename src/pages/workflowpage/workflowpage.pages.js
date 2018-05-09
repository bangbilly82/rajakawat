import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import Hero from '../../components/homepage/hero.component';
import ServiceDetail from '../../components/service/detail.component';
import Blog from '../../components/blog/blog.component';

const mapStateToProps = (state) => {
  return {
    link: state.header.link
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentHeader: (value) => {
      dispatch(actionCreators.setCurrentHeader(value));
    }
  }
}

class WorkFlowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Startup bags funds from Singapore ex-minister to get ultra-wealthy into crowdlending',
      text: 'Singapore-based Helicap is a new fintech platform that aims to bring a fund management angle in the peer-to-peer (P2P) lending space. To make this happen, it has raised US$1.5 million in seed funding.'
    }
  }

  componentWillMount() {
    this.props.setCurrentHeader(this.props.location.pathname);
    this.resetScroll();
    document.title = 'Our Work Flow';
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container is-fullhd">
        <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage-10.png'}/>
        <ServiceDetail />
        <Blog />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkFlowPage);
