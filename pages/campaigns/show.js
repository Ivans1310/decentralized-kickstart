import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import ContributeForm from "../../components/ContributeForm";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static getInitialProps = async (props) => {
    const campaign = Campaign(props.query.address);
    const sumary = await campaign.methods.getSummary().call();

    console.log(props.query.address);
    return {
      minimumContribution: sumary[0],
      balance: sumary[1],
      requestsCount: sumary[2],
      approversCount: sumary[3],
      manager: sumary[4],
      address: props.query.address,
    };
  };

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
    } = this.props;

    const items = [
      {
        header: manager,
        description:
          "The manager created this campaign and can create requests to wtihdraw money",
        meta: "Address of Manager",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        description:
          "You must contribute at leat this much wei to be an approval",
        meta: "Minimum Contribution (wei)",
      },
      {
        header: requestsCount,
        description:
          "A request tries to withdraw money from teh contract. Request must be approved by approvers",
        meta: "Number of Requestes",
      },
      {
        header: approversCount,
        description:
          "A request tries to withdraw money from teh contract. Request must be approved by approvers",
        meta: "Number of approvers",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        description: "The balance is how much money this campaign has",
        meta: "Campaign Balance (ether)",
      },
    ];

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h3>Campaing show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <Button content="View requests" primary />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
