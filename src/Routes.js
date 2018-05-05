import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.pages';
import ServicePage from './pages/servicepage/servicepage.pages';
import WorkFlowPage from './pages/workflowpage/workflowpage.pages';

class Routes extends Component {

  render() {
    return ( 
      <div className="global-wrapper container is-fullhd">
        <Header background="transparent"/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/service" component={ServicePage}/>
        <Route path="/workflow" component={WorkFlowPage}/>
        <Footer />
      </div>
    );
  }
}

export default Routes;
