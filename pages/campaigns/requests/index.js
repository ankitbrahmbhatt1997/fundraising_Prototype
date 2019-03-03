import React, { Component } from "react";
import Layout from "../../../components/Layout";
import Campaign from "../../../Ethereum/campaign";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import RequestRow from "../../../components/RequestRow";

export default class RequestList extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    return {
      address: props.query.address,
      requests,
      approversCount
    };
  }
  /// Function for rendering the multiple requests

  renderRequests = () => {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          request={request}
          id={index}
          key={index}
          approversCount={this.props.approversCount}
          address={this.props.address}
        />
      );
    });
  };

  render() {
    let { Row, Header, Cell, Body } = Table;

    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>

        <Table celled>
          <Header>
            <Row>
              <Cell>ID</Cell>
              <Cell>Description</Cell>
              <Cell>Amount</Cell>
              <Cell>Recipient</Cell>
              <Cell>Approval Count</Cell>
              <Cell>Approve</Cell>
              <Cell>Finalize</Cell>
            </Row>
          </Header>
          <Body>{this.renderRequests()}</Body>
        </Table>
      </Layout>
    );
  }
}
