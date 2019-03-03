import web3 from "./web3";
import campaignFactory from "./Build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0x6781254E1F854569CA1999391FfaDE415F4DaB9B"
);

export default instance;
