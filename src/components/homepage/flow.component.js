import React, { Component } from 'react';
import Button from '../shared/button.component';
import Media from "react-media";
import IconFlow1 from '../../static/images/icon/icon-flow-1.png';
import IconFlow2 from '../../static/images/icon/icon-flow-2.png';
import IconFlow3 from '../../static/images/icon/icon-flow-3.png';
import Flow1 from '../../static/images/flow-1.png';
import Flow2 from '../../static/images/flow-2.png';
import Flow3 from '../../static/images/flow-3.png';

class Flow extends Component {

  handleClick() {
    alert('button clicked');
  }

  generateContent(isMobile = false) {
    return (
      <section className={"flow-container " + ((isMobile) ? 'is-mobile' : null)}>
        <div className="columns">
          <div className="column left-container">
            <div className="columns is-multiline is-variable is-1">
              <div className="column is-full">
                <img src={Flow1}/>
              </div>
              <div className="column is-half">
                <img src={Flow2}/>
              </div>
              <div className="column is-half">
                <img src={Flow3}/>
              </div>
            </div>
          </div>
          <div className="column">
            <h3 className="title is-3">Our <span>Work Flow</span></h3>
            <hr />
            <p>
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety of questions related to the 2016 campaign and people who have figured in Trump's personal life
            </p>
            <div className="flow-icon-container">
              <img src={IconFlow1} width="120px"/>
              <img src={IconFlow2} width="120px"/>
              <img src={IconFlow3} width="120px"/>
            </div>
            <p className="sub-text">
              Washington (CNN)Special counsel Robert Mueller is interested in asking President Donald Trump a variety 
            </p>
            <Button text="view working flow" uppercase clickHandler={this.handleClick}/>
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

export default Flow;
