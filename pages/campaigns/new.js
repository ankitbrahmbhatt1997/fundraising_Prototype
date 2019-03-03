import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../../Ethereum/web3";
import factory from "../../Ethereum/factory";
import { Router } from "../../routes";

export default class CampaignNew extends Component {
  state = {
    minimumContribution: 0,
    error: "",
    loading: false
  };

  onChange = e => {
    let minimum = e.target.value;
    this.setState(() => {
      return { minimumContribution: minimum };
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    this.setState(previousState => {
      return {
        loading: true,
        error: ""
      };
    });
    try {
      let accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });

      Router.pushRoute("/");
    } catch (err) {
      this.setState(() => {
        return {
          error: err.message
        };
      });
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
        <h3>New Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.error}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={this.onChange}
            />
          </Form.Field>
          <Message error header="Crap !!!" content={this.state.error} />
          <Button primary loading={this.state.loading}>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}
