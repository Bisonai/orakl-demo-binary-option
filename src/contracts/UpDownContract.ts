import { ethers } from "ethers";
import { ILatestRound } from "../types";
import { BaseInterface } from "./interfaces";
import FEED_PROXY_ABI from "./abis/FeedProxyABI.json";

export class UpDownContract extends BaseInterface {
  constructor(provider: ethers.providers.Web3Provider, smAddress: string) {
    super(provider, smAddress, FEED_PROXY_ABI);
  }

  latestRoundDataAsync = async (): Promise<ILatestRound> => {
    const rs = await this._contract.latestRoundData();
    const decimals = await this._contract.decimals();

    return {
      answer: this._toNumber(rs.answer) / Math.pow(10, decimals),
      roundId: this._toNumber(rs.id),
      updatedAt: this._toNumber(rs.updatedAt),
    };
  };
}
