import { Token, Ether } from "@uniswap/sdk-core";
import { TokenListDetail } from "../types";
import { SupportedChainId } from "./chain";
import { config } from "../config";

export const BASE_TOKENS = {
  [SupportedChainId.BSC]: {
    CAKE: new Token(
      SupportedChainId.BSC,
      "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      18,
      "CAKE",
      "PancakeSwap Token"
    ),
    WBNB: new Token(
      SupportedChainId.BSC,
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      18,
      "WBNB",
      "Wrapped BNB"
    ),
    DAI: new Token(
      SupportedChainId.BSC,
      "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      18,
      "DAI",
      "Dai Stablecoin"
    ),
    BUSD: new Token(
      SupportedChainId.BSC,
      "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      18,
      "BUSD",
      "Binance USD"
    ),
    BTCB: new Token(
      SupportedChainId.BSC,
      "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      18,
      "BTCB",
      "Binance BTC"
    ),
    USDT: new Token(
      SupportedChainId.BSC,
      "0x55d398326f99059fF775485246999027B3197955",
      18,
      "USDT",
      "Tether USD"
    ),
    UST: new Token(
      SupportedChainId.BSC,
      "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
      18,
      "UST",
      "Wrapped UST Token"
    ),
    ETH: new Token(
      SupportedChainId.BSC,
      "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      18,
      "ETH",
      "Binance-Peg Ethereum Token"
    ),
  },
  [SupportedChainId.MATIC]: {
    WBTC: new Token(
      SupportedChainId.MATIC,
      "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      18,
      "wBTC",
      "Wrapped Bitcoin"
    ),
    MAUSDC: new Token(
      SupportedChainId.MATIC,
      "0x9719d867A500Ef117cC201206B8ab51e794d3F82",
      6,
      "maUSDC",
      "Matic Aave interest bearing USDC"
    ),
    ETHER: new Token(
      SupportedChainId.MATIC,
      "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      18,
      "ETH",
      "Ether"
    ),
    QUICK: new Token(
      SupportedChainId.MATIC,
      "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
      18,
      "QUICK",
      "QuickSwap"
    ),
    DAI: new Token(
      SupportedChainId.MATIC,
      "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      18,
      "DAI",
      "Dai Stablecoin"
    ),
    BTCB: new Token(
      SupportedChainId.MATIC,
      "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      8,
      "WBTC",
      "Wrapped BTC"
    ),

    USDT: new Token(
      SupportedChainId.MATIC,
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      6,
      "USDT",
      "Tether USD"
    ),
    USDC: new Token(
      SupportedChainId.MATIC,
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      6,
      "USDC",
      "USD Coin"
    ),
  },
  [SupportedChainId.AVAX]: {
    PNG: new Token(
      SupportedChainId.AVAX,
      "0x60781C2586D68229fde47564546784ab3fACA982",
      18,
      "PNG",
      "Pangolin"
    ),
    JOE: new Token(
      SupportedChainId.AVAX,
      "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd",
      18,
      "JOE",
      "JOE Token"
    ),
    USDTe: new Token(
      SupportedChainId.AVAX,
      "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
      6,
      "USDT.e",
      "Tether USD"
    ),
    DAIe: new Token(
      SupportedChainId.AVAX,
      "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      18,
      "DAI.e",
      "Dai Stablecoin"
    ),
    USDCe: new Token(
      SupportedChainId.AVAX,
      "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
      6,
      "USDC.e",
      "USD Coin"
    ),
  },
  [SupportedChainId.OPTIMISMGOERLI]: {
    WBTC: new Token(
      SupportedChainId.OPTIMISMGOERLI,
      "0x16d8928c26E9575F8e6ee2aa27231D02a115De07",
      8,
      "WBTC",
      "Wrapped BTC"
    ),
    dETH: new Token(
      SupportedChainId.OPTIMISMGOERLI,
      "0x36BfD9Ea653e02A05a4e0295C45677734c9ab97C",
      18,
      "dETH",
      "dETH"
    ),
    Velo: new Token(
      SupportedChainId.OPTIMISMGOERLI,
      "0x5Fba98EC955b817A76b62d4B73907c7EA2ee66eB",
      18,
      "VELO",
      "VELO"
    ),
    OPP: new Token(
      SupportedChainId.OPTIMISMGOERLI,
      "0xdeaE6cF2C4216Cd5bf5C258c686FC5584BcB8C30",
      18,
      "OPP",
      "OPP"
    ),
  },
  [SupportedChainId.OPTIMISM]: {
    WBTC: new Token(
      SupportedChainId.OPTIMISM,
      "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      8,
      "WBTC",
      "Wrapped BTC"
    ),
    dETH: new Token(
      SupportedChainId.OPTIMISM,
      "0x39d36cF934aAE9Fcf4c5112648a016B8A7127B35",
      18,
      "dETH",
      "dETH"
    ),
    Velo: new Token(
      SupportedChainId.OPTIMISM,
      "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
      18,
      "VELO",
      "VELO"
    ),
    OPP: new Token(
      SupportedChainId.OPTIMISM,
      "0x676f784d19c7F1Ac6C6BeaeaaC78B02a73427852",
      18,
      "OPP",
      "OPP"
    ),
  },
};

export const ETHER_TOKEN_LIST: { [chainId: number]: TokenListDetail } = {
  [SupportedChainId.BSC]: {
    chainId: SupportedChainId.BSC,
    symbol: "BNB",
    name: "BNB Token",
    decimals: 18,
    address: "",
    logoURI: `${config.PUBLIC_URL}images/icon/tokens/bnb.png`,
    isNative: true,
  },
  [SupportedChainId.MATIC]: {
    chainId: SupportedChainId.MATIC,
    symbol: "MATIC",
    name: "MATIC Token",
    decimals: 18,
    address: "",
    logoURI: `${config.PUBLIC_URL}images/icon/tokens/matic.svg`,
    isNative: true,
  },
  [SupportedChainId.AVAX]: {
    chainId: SupportedChainId.AVAX,
    symbol: "AVAX",
    name: "AVAX Token",
    decimals: 18,
    address: "",
    logoURI: `${config.PUBLIC_URL}images/icon/tokens/avax.svg`,
    isNative: true,
  },
  [SupportedChainId.OPTIMISMGOERLI]: {
    chainId: SupportedChainId.OPTIMISMGOERLI,
    symbol: "ETH",
    name: "ETH Token",
    decimals: 18,
    address: "",
    logoURI: `${config.PUBLIC_URL}images/icon/tokens/eth.svg`,
    isNative: true,
  },
  [SupportedChainId.OPTIMISM]: {
    chainId: SupportedChainId.OPTIMISM,
    symbol: "ETH",
    name: "ETH Token",
    decimals: 18,
    address: "",
    logoURI: `${config.PUBLIC_URL}images/icon/tokens/eth.svg`,
    isNative: true,
  },
};

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  [SupportedChainId.BSC]: new Token(
    SupportedChainId.BSC,
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    18,
    "WBNB",
    "Wrapped BNB"
  ),
  [SupportedChainId.MATIC]: new Token(
    SupportedChainId.MATIC,
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    18,
    "WMATIC",
    "Wrapped MATIC"
  ),
  [SupportedChainId.AVAX]: new Token(
    SupportedChainId.AVAX,
    "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    18,
    "WAVAX",
    "Wrapped AVAX"
  ),
  [SupportedChainId.OPTIMISMGOERLI]: new Token(
    SupportedChainId.OPTIMISMGOERLI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [SupportedChainId.OPTIMISM]: new Token(
    SupportedChainId.OPTIMISM,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether"
  ),
};

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId];
    throw new Error("Unsupported chain ID");
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedEther[chainId] ??
      (this._cachedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}
