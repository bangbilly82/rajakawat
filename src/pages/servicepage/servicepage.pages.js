import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import Work from '../../components/homepage/work.component';

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

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lorem Ipsum',
      text: 'Razer has taken another step towards becoming one of Singapore’s major payments providers. The firm announced a partnership with Singtel that will see the two collaborate on fintech, gaming, and telecom.'
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
        <HeadTag title={'Raja Kawat - Service'}/>
        <div>
          <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage-4.png'}/>
          <Work />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
