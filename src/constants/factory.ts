import { config } from "../config";
import { SupportedChainId } from "./chain";

export const FACTORY_ADDRESSES: {
  [chainId: number]: string;
} = {
  [SupportedChainId.BSC]: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
  [SupportedChainId.MATIC]: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
  [SupportedChainId.AVAX]: "0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10",
  [SupportedChainId.OPTIMISMGOERLI]:
    "0xb3B889a909b1b0625DcAFE859f9B0Fd968D6d735",
  [SupportedChainId.OPTIMISM]: "0x8BCeDD62DD46F1A76F8A1633d4f5B76e0CDa521E",
};

export const INIT_CODE_HASHES: {
  [chainId: number]: string;
} = {
  [SupportedChainId.BSC]: config.PANCAKE_CODE_HASH,
  [SupportedChainId.MATIC]: config.QUICK_SWAP_CODE_HASH,
  [SupportedChainId.AVAX]: config.TRADER_JOE_CODE_HASH,
  [SupportedChainId.OPTIMISMGOERLI]: config.DETH_SWAP_CODE_HASH,
  [SupportedChainId.OPTIMISM]: config.DETH_SWAP_CODE_HASH,
};
