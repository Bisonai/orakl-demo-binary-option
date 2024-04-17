# Binary Option

This repository contains a simple binary option game utilizing [Orakl Network Data Feeds](https://orakl.network/data-feed).
Data feeds are deployed on Klaytn mainnet (Cypress) and testnet (Baobab), and this repository is compatible with both.

## What is Binary Option Game?


"Binary Option" is a proof of concept betting game that utilizes price data submitted to [Orakl Network Data Feeds](https://docs.orakl.network/developers-guide/data-feed).
Players start with 100 points, aiming to accurately predict the direction (up or down) of cryptocurrency price movement.

Correct predictions earn players 5 points, while incorrect ones result in a loss of 5 points.
Asset prices are fetched from the [Aggregator smart contract](https://docs.orakl.network/developers-guide/data-feed#read-data) and compared with the same asset's price after 30 seconds.
Users can select any supported data feed to participate in the game.

## Development

Install dependencies.

```shell
yarn install
```

Next, you can start the frontend in a development mode.

```shell
yarn dev
```

Or you can build it first, and then launch in a production mode.

```shell
yarn build
yarn start
```

## License

[MIT License](LICENSE)
