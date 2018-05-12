import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import ServiceDetail from '../../components/service/detail.component';
import Blog from '../../components/blog/blog.component';

const mapStateToProps = (state) => {
  return {
    link: state.header.link,
    posts: state.post.content
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
    getPost: () => {
      dispatch(actionCreators.getPost());
    },
    hideLoader: () => {
      dispatch(actionCreators.hideLoader())
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
    this.props.setHeaderBackground('transparent');
    this.props.getPost()
    this.resetScroll();
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  generatePost() {
    const { posts } = this.props;
    if (posts) {
      return (
        <Blog posts={posts} />
      );
    }
  }

  render() {
    return (
      <div>
        <HeadTag title={'Raja Kawat - Workflow'}/>
        <div className="container is-fullhd">
          <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage-10.png'}/>
          <ServiceDetail />
          {this.generatePost()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkFlowPage);
