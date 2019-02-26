import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creator/index';
import HeadTag from '../../utils/HeadTag';
import Hero from '../../components/homepage/hero.component';
import Services from '../../components/service/service.component';

const mapStateToProps = (state) => {
  return {
    link: state.header.link,
    servicesContent: state.services.content
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
    getServicesContent: () => {
      dispatch(actionCreators.getServiceContent());
    }
  }
}

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Our Services',
      text: 'Raja Kawat memiliki berbagai services yang bisa Anda pilih, sesuai dengan kebutuhan.'
    }
  }

  componentWillMount() {
    this.props.setCurrentHeader(this.props.location.pathname);
    this.props.setHeaderBackground('transparent');
    this.props.getServicesContent();
    this.resetScroll();
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

  generateServices() {
    const { servicesContent } = this.props;
    if (servicesContent) {
      return (
        <Services content={servicesContent}/>
      );
    }
  }

  render() {
    return (
      <div>
        <HeadTag title={'Raja Kawat - Service'}/>
        <div>
          <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage-4.png'}/>
          {this.generateServices()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
