import React, { Component } from 'react';
import Media from "react-media";

class About extends Component {

  generateContent(isMobile = false) {
    return (
      <section className={"about-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">AFTER UBER LEAVES, NEW RIVALS EMERGE</h3>
        <hr />
        <div className="columns">
          <div className="column">
            <p>
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump's personal life, business interactions and administration, according to Mueller's list of questions for Trump obtained and reported on by The New York Times.
            </p>
            <p>
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump's personal life, business interactions and administration, according to Mueller's list of questions for Trump obtained and reported on by The New York Times.
            </p>
          </div>
          <div className="column">
            <p>
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump's personal life, business interactions and administration, according to Mueller's list of questions for Trump obtained and reported on by The New York Times.
            </p>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <Media query="(max-width: 420px)">
        {matches =>
          matches ? (
            this.generateContent(true)
          ) : (
            this.generateContent()
          )
        }
      </Media>
    );
  }
}

export default About;
