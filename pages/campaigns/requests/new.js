import React, { Component } from "react";
import { Router, Link } from "../../../routes";
import Layout from "../../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Campaign from "../../../Ethereum/campaign";
import web3 from "../../../Ethereum/web3";

export default class NewRequest extends Component {
  state = {
    description: "",
    value: "",
    recepient: "",
    error: "",
    loading: false
  };

  static getInitialProps(props) {
    return {
      address: props.query.address
    };
  }

  onChange = e => {
    let { value, name } = e.target;

    this.setState(() => ({ [name]: value }));
  };

  // HANDLER FUNCTION FOR SUBMITTING THE CREATE REQUEST FORM
  onSubmit = async e => {
    e.preventDefault();
    let { address } = this.props;
    let { description, value, recepient } = this.state;
    const campaign = Campaign(address);
    this.setState(previousState => {
      return {
        loading: true,
        error: ""
      };
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recepient)
        .send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${address}/requests`);
    } catch (err) {
      this.setState(() => ({ error: err.message }));
    }

    this.setState(previousState => {
      return {
        loading: false
      };
    });
  };

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Go Back</a>
        </Link>
        <Form
          style={{ marginTop: "20px" }}
          onSubmit={this.onSubmit}
          error={!!this.state.error}
        >
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              name="description"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Value</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              onChange={this.onChange}
              name="value"
            />
          </Form.Field>
          <Form.Field>
            <label>recepient</label>
            <Input
              value={this.state.recepient}
              onChange={this.onChange}
              name="recepient"
            />
          </Form.Field>

          <Message error header="Crap!!!!" content={this.state.error} />
          <Button
            style={{ marginTop: "20px" }}
            primary
            content="Create"
            loading={this.state.loading}
          />
        </Form>
      </Layout>
    );
  }
}
