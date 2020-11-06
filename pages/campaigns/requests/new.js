import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";
import { Router, Link } from "../../../routes";

class RequestNew extends Component {
  static getInitialProps = (props) => {
    const { address } = props.query;
    return { address };
  };
  state = {
    description: "",
    value: "",
    recipient: "",
    errorMessage: "",
  };
  onSubmit = async (event) => {
    // To prevet default action, send it to the backend.
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(this.props.address);
      await campaign.methods
        .createRequest(
          this.state.description,
          web3.utils.toWei(this.state.value, "ether"),
          this.state.recipient
        )
        .send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>Back</Link>
        <h3>New Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Request Description</label>
            <Input
              label="description.."
              labelPosition="right"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Requested Value</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Request Recipient</label>
            <Input
              label="0x"
              labelPosition="right"
              value={this.state.recipient}
              onChange={(event) =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create !
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default RequestNew;
