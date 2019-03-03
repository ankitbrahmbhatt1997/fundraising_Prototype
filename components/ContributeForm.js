import React, { Component } from "react";
import { Form, Message, Button, Input } from "semantic-ui-react";
import Campaign from "../Ethereum/campaign";
import web3 from "../Ethereum/web3";
import { Router } from "../routes";

export default class ContributeForm extends Component {
  state = {
    value: "",
    error: "",
    loading: false
  };

  onChange = e => {
    let value = e.target.value;
    this.setState(() => ({ value }));
  };

  onSubmit = async e => {
    e.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState(() => ({ loading: true, error: "" }));
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (e) {
      this.setState(() => ({ error: e.message }));
    }
    this.setState(() => ({
      loading: false,
      value: ""
    }));
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.error}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input label="ether" labelPosition="right" onChange={this.onChange} />
        </Form.Field>
        <Message error header="Crap !!!" content={this.state.error} />
        <Button loading={this.state.loading} primary>
          Contribute
        </Button>
      </Form>
    );
  }
}
