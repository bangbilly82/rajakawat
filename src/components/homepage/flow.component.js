import React, { Component } from 'react';
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
            <h3 className="title is-3">How <span>We Works</span></h3>
            <hr />
            <p>
              Tertarik untuk menggunakan jasa Raja Kawat? Ingin tahu bagaimana cara kerja kami?
            </p>
            <div className="flow-icon-container">
              <img src={IconFlow1} width="120px"/>
              <img src={IconFlow2} width="120px"/>
              <img src={IconFlow3} width="120px"/>
            </div>
            <p className="sub-text">
              Sistem pengerjaan Raja Kawat dibuat untuk memberi kemudahan bagi customers kami 
            </p>
            <a className="button-service" href="/workflow">
              view detail working flow
            </a>
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
