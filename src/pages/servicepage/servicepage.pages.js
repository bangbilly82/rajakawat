import React, { Component } from 'react';
import Footer from '../../components/footer/footer.component';
import Button from '../../components/shared/button.component';
import Hero from '../../components/homepage/hero.component';

class ServicePage extends Component {
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
        <Hero title={this.state.title} text={this.state.text} alignment="left" background={'homepage-4'}/>
      </div>
    );
  }
}

export default ServicePage;
