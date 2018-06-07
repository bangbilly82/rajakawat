import React, { Component } from 'react';
import Media from "react-media";
import IconPlan from '../../static/images/icon/icon-plan.png';
import IconBrief from '../../static/images/icon/icon-brief.png';
import IconWork from '../../static/images/icon/icon-work.png';

class WorkflowDetail extends Component {

  generateContent(isMobile = false) {
    return (
      <section className={"workflow-detail-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Lorem <span>Ipsum</span></h3>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconPlan}/>
                  <span>Lorem</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
              </div>
            </div>
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconBrief}/>
                  <span>Lorem</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
              </div>
            </div>
            <div className="workflow-list-wrapper">
              <div className="workflow-list-item">
                <div className="icon-item">
                  <img src={IconWork}/>
                  <span>Lorem</span>
                </div>
              </div>
              <div className="workflow-list-item">
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
                </p>
                <p>
                A few years ago, Southeast Asian ecommerce skyrocketed beyond precedent. However, with the rise of Lazada, Zalora, and Shopee, a new problem arose – the lack of logistics. Customers needed to get their packages delivered quickly and reliably. Demand just couldn’t cope.
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
