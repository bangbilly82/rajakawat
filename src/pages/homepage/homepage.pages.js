import React, { Component } from 'react';
import Button from '../../components/shared/button.component';
import Hero from '../../components/homepage/hero.component';
import About from '../../components/homepage/about.component';
import Service from '../../components/homepage/service.component';
import Work from '../../components/homepage/work.component';
import Flow from '../../components/homepage/flow.component';
import Contact from '../../components/contact/contact.component';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lorem Ipsum',
      text: 'Washington (CNN) Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump\'s personal life'
    }
  }
  render() {
    return (
      <div className="container is-fullhd">
        <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage'}/>
        <About />
        <Service />
        <Work />
        <Flow />
        <Contact title={this.state.title + ' dolor'} text={this.state.text}/>
      </div>
    );
  }
}

export default HomePage;
