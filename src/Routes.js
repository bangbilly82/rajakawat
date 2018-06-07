import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.pages';
import ServicePage from './pages/servicepage/servicepage.pages';
import ServiceDetailPage from './pages/servicepage/servicedetail.pages';
import WorkFlowPage from './pages/workflowpage/workflowpage.pages';
import FaqPage from './pages/faqpage/faqpage.pages';
import ContactPage from './pages/contactpage/contactpage.pages';
import Scroller from './components/shared/scroller.component';
import Loader from './components/shared/loader.component';

class Routes extends Component {

  render() {
    return ( 
      <div>
        <Header background="transparent"/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/service" component={ServicePage}/>
        <Route path="/service/detail" component={ServiceDetailPage}/>
        <Route exact path="/workflow" component={WorkFlowPage}/>
        <Route exact path="/faq" component={FaqPage}/>
        <Route exact path="/contact-us" component={ContactPage}/>
        <Footer />
        <Scroller />
        <Loader />
      </div>
    );
  }
}

export default Routes;
