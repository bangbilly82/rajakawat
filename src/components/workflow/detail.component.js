import React, { Component } from 'react';
import Media from "react-media";
import IconPlan from '../../static/images/icon/icon-plan.png';
import IconBrief from '../../static/images/icon/icon-brief.png';
import IconWork from '../../static/images/icon/icon-work.png';

class WorkflowDetail extends Component {

  generateContent(isMobile = false) {
    return (
      <section className={"workflow-detail-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Work <span>Flow</span></h3>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconPlan}/>
                  <span>Brief</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                  Sampaikan kebutuhan Anda kepada tim Rajakawat. Kami akan membantu Anda menemukan solusi terbaik bagi kebutuhan Anda. Rajakawat selalu mempertimbangkan keadaan, dan kebutuhan client dalam menentukan solusi yang akan diberikan kepada client
                </p>
              </div>
            </div>
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconBrief}/>
                  <span>Planning</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                Bersama dengan client, kami akan rencanakan solusi terbaik untuk client. Kami ingin client mendapatkan solusi terbaik yang sesuai dengan kebutuhannya. Akan kami pastikan, dalam tahap perencanaan seluruh kebutuhan, pendapat dan keinginan client akan kami akomodir
                </p>
              </div>
            </div>
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconWork}/>
                  <span>Pengerjaan</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                Proses pengerjaan akan segera dilakukan setelah poses perencanaan matang. Perencanaan yang matang akan membantu Rajakawat dalam mengerjakan kebutuhan client. Sumber Daya Manusia yang terampil akan memastikan kebutuhan client akan terpenuhi dalam waktu relatif singkat.
                </p>
              </div>
            </div>
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

export default WorkflowDetail;
