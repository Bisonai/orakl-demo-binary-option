import { UP_DOWN_TYPE } from "../contracts/types";

export interface ILatestRound {
  answer: number;
  answeredInRound: number;
  roundId: number;
  startedAt: number;
  updatedAt: number;
}

export interface IItem {
  startAt: Date;
  price: number;
  yourPick: string;
}

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export interface IWalletInfo {
  bnbBalance: number;
  address: string;
}

export interface IOptionModel {
  type: UP_DOWN_TYPE;
  amount: number;
}

export type Player = {
  player: string;
  bet: number;
  betAmount: number;
  requestId: number;
  result: number;
  transaction_id?: string;
  playAt: number;
  isWin: boolean;
};
