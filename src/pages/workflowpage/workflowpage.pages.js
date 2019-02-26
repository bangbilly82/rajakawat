import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import WorkflowDetail from '../../components/workflow/detail.component';
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
      title: 'Rajakawat memiliki mekanisme kerja yang akan memudahkan Anda di dalam setiap pekerjaan.',
      text: 'Seluruh tahap pengerjaan memastikan kepuasaan pelanggan dan keterlibatan pelanggan di dalam menentukan hasil akhir pengerjaan.'
    }
  }

  componentWillMount() {
    this.props.setCurrentHeader(this.props.location.pathname);
    this.props.setHeaderBackground('transparent');
    this.props.getPost();
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
        <div>
          <Hero title={this.state.title} text={this.state.text} alignment="right" background={'homepage-5.png'}/>
          <WorkflowDetail />
          {/* {this.generatePost()} */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkFlowPage);
