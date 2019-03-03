import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../Ethereum/web3";
import Campaign from "../Ethereum/campaign";

export default class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    this.setState(() => ({ loading: true }));
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    } catch (err) {
      console.log(err);
    }
    this.setState(() => ({ loading: false }));
  };
  render() {
    let { Row, Cell } = Table;
    let { request, id, approversCount } = this.props;
    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          <Button
            basic
            color="green"
            content="Approve"
            onClick={this.onApprove}
          />
        </Cell>
        <Cell>
          <Button basic color="teal" content="Finalize" />
        </Cell>
      </Row>
    );
  }
}
