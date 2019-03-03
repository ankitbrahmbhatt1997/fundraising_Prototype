import { Router, Link } from "../../routes";
import Layout from "../../components/Layout";
import Campaign from "../../Ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import React, { Component } from "react";
import ContributeForm from "../../components/ContributeForm";
import web3 from "../../Ethereum/web3";

export default class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = await Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address
    };
  }

  renderCards() {
    let {
      manager,
      minimumContribution,
      approversCount,
      requestCount,
      balance
    } = this.props;
    const items = [
      {
        header: manager,
        description:
          "The manager created this campaign and can create spending Request",
        meta: "Address of the manager",
        style: { overflowWrap: "break-word" }
      },
      {
        header: `${minimumContribution} Wei`,
        description:
          "Minimum contribution a contributor can give to the campaign",
        meta: "minimum contribution"
      },
      {
        header: requestCount,
        description: "Total number of spending Requests",
        meta: "Request Count"
      },
      {
        header: approversCount,
        description: "Total number of people contributing to the Campaign",
        meta: "Contributors"
      },
      {
        header: `${web3.utils.fromWei(balance, "ether")} Ether`,
        description: "Total balance of the campaign",
        meta: "Balance"
      }
    ];

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Column width={10}>
            <h3>Campaign Show</h3>

            {this.renderCards()}

            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button style={{ marginTop: "20px" }} primary>
                  View Request
                </Button>
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}
