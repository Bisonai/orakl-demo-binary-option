import { ethers } from "ethers";
import { ILatestRound } from "../types";
import { BaseInterface } from "./interfaces";
import AGGREGATOR_ABI from "./abis/AggregatorABI.json";

export class UpDownContract extends BaseInterface {
  constructor(provider: ethers.providers.Web3Provider, smAddress: string) {
    super(provider, smAddress, AGGREGATOR_ABI);
  }

  latestRoundDataAsync = async (): Promise<ILatestRound> => {
    const rs = await this._contract.latestRoundData();
    const decimals = await this._contract.decimals();

    return {
      answer: this._toNumber(rs.answer) / Math.pow(10, decimals),
      answeredInRound: this._toNumber(rs.answer),
      roundId: this._toNumber(rs.roundId),
      startedAt: this._toNumber(rs.startedAt),
      updatedAt: this._toNumber(rs.updatedAt),
    };
  };
}
