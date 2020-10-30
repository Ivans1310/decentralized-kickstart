import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
  static getInitialProps = async (props) => {
    const campaign = Campaign(props.query.address);
    const sumary = await campaign.methods.getSummary().call();
    console.log(sumary);
    return {};
  };
  render() {
    return (
      <Layout>
        <h3>Campaing show</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
