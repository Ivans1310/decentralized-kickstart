import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x74172A3F0031CD22673AB6378a68998f92c77dDB"
);

export default instance;
