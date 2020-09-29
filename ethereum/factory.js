import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC6B4FF86423221398a4b39A2D69E08871587b7b1"
);

export default instance;
