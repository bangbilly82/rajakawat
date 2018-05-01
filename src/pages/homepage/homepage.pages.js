import React, { Component } from 'react';
import Header from '../../components/header/header.component';

class HomePage extends Component {
  render() {
    return (
      <div className="container is-fullhd">
        <Header background="transparent"/>
        <div className="homepage-container">
          <div className="overlay">
            <h1 className="title is-1">Lorem Ipsum</h1>
            <hr />
            <p>
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump's personal life, business interactions and administration, according to Mueller's list of questions for Trump obtained and reported on by The New York Times.

              The topics, which CNN previously reported can be classified into four main areas, involve questions about Trump's former national security adviser Michael Flynn, former FBI Director James Comey, Attorney General Jeff Sessions and any Russian coordination with his presidential campaign, according to The New York Times.
              Mueller is leading the investigation into Russian meddling in the 2016 election and if there were any ties between Moscow and Trump campaign associates. Trump has repeatedly denied collusion.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
