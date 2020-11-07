# decentralized-kickstarter

![decentralized_kickstart](https://user-images.githubusercontent.com/19709997/98430690-55f43280-207d-11eb-9c54-39dfe415928a.gif)

## Contracts structure

A principal Factory contract is in charge to deploy on the Ethereum network the campaign contracts, avoiding saboteurs from creating multiple unsense campaign contracts.

Funtion that creates the new campaigns

```
 function createCampaign(uint256 minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
```

## Requirements

To run development mode or export the app for hosting, you'll need the following:

- [Node](https://nodejs.org/en/) 10.15.x or later
  (set in [.node-version](.node-version))
- [NPM CLI](https://www.npmjs.com/get-npm) 6.4.1 or later

If installing Node via [nodenv](https://github.com/nodenv/nodenv), you can use
[nodenv/jetbrains-npm](https://github.com/nodenv/jetbrains-npm) for WebStorm support.

## Setup

Install the required Node packages:

```
npm ci
```

## Development

To run the Next.js dev server:

```
npm run dev
```

## Development

To run the Unit test:

```
npm run test
```

## Warnings

During development, be sure to set the Rinkeby network on Metamask to avoid wasting real money.
