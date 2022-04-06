import { Address } from '../../types';
import BigNumber from 'bignumber.js';

export interface Token {
  address: string;
  balance: bigint;
  decimals: number;
  denormWeight: bigint;
}

export type PoolState = {
  id: string;
  swapFee: bigint;
  totalWeight: bigint;
  tokens: Token[];
  tokensList: string[];
  publicSwap?: string;
};

export interface PoolStates {
  pools: PoolState[];
}

export type PoolStateMap = { [address: string]: PoolState };

export type BalancerSwap = {
  pool: Address;
  tokenInParam: string;
  tokenOutParam: string;
  maxPrice: string;
};

export type BalancerV1Data = {
  exchangeProxy: Address;
  pool: Address;
};

export type OptimizedBalancerV1Data = {
  exchangeProxy: Address;
  swaps: BalancerSwap[];
};

export type DexParams = {
  subgraphURL: string;
};

type BalancerBatchEthInSwapExactInParam = [
  swaps: BalancerSwap[],
  destToken: string,
  destAmount: string,
];
type BalancerBatchEthOutSwapExactInParam = [
  swaps: BalancerSwap[],
  srcToken: string,
  srcAmount: string,
  destAmount: string,
];
type BalancerBatchSwapExactInParam = [
  swaps: BalancerSwap[],
  srcToken: string,
  destToken: string,
  srcAmount: string,
  destAmount: string,
];
type BalancerBatchEthInSwapExactOutParam = [
  swaps: BalancerSwap[],
  destToken: string,
];
type BalancerBatchEthOutSwapExactOutParam = [
  swaps: BalancerSwap[],
  srcToken: string,
  maxTotalAmountIn: string,
];
type BalancerBatchSwapExactOutParam = [
  swaps: BalancerSwap[],
  srcToken: string,
  destToken: string,
  maxTotalAmountIn: string,
];

export type BalancerParam =
  | BalancerBatchEthInSwapExactInParam
  | BalancerBatchEthOutSwapExactInParam
  | BalancerBatchSwapExactInParam
  | BalancerBatchEthInSwapExactOutParam
  | BalancerBatchEthOutSwapExactOutParam
  | BalancerBatchSwapExactOutParam;

export enum BalancerFunctions {
  batchEthInSwapExactIn = 'batchEthInSwapExactIn',
  batchEthOutSwapExactIn = 'batchEthOutSwapExactIn',
  batchSwapExactIn = 'batchSwapExactIn',
  batchEthInSwapExactOut = 'batchEthInSwapExactOut',
  batchEthOutSwapExactOut = 'batchEthOutSwapExactOut',
  batchSwapExactOut = 'batchSwapExactOut',
}