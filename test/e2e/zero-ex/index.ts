import { BigNumberish, BytesLike } from "ethersv5";

export interface SimpleOrder {
  takerAddress: string;
  makerAssetAmount: BigNumberish;
  takerAssetAmount: BigNumberish;
  makerAssetAddress: BytesLike;
  takerAssetAddress: BytesLike;
}
