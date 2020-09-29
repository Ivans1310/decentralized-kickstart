import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import campaignFactory from "../ethereum/factory";

class campaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await campaignFactory.methods
      .getDeployedCampaigns()
      .call();
    console.log(campaigns);
    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default campaignIndex;
