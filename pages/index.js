import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import campaignFactory from "../ethereum/factory";
import Layout from "../components/Layout.js";
import { Link } from "../routes";

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
        description: (
          <Link route={`campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default campaignIndex;
