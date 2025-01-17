import React from "react";
import Box from "../Box";
import Modal from "../Modal";
import Close from "../../icons/Close";
import { chain, config } from "../../config";

export interface ModalConnectProps {
  currentChainId?: number;
  isOpen?: boolean;
  onClose?: () => void;
  onConnect?: (t: string, chain: number) => void;
}

const networks = [
  {
    name: "Binance Chain",
    icon: `${config.PUBLIC_URL}images/icon/bsc-wallet.svg`,
    chainId: chain.bep,
  },
  {
    name: "Polygon",
    icon: `${config.PUBLIC_URL}images/icon/polygon-white.svg`,
    chainId: chain.polygon,
  },
  {
    name: "Avalanche",
    icon: `${config.PUBLIC_URL}images/icon/avax.svg`,
    chainId: chain.avax,
  },
  {
    name: "Optimism Goerli",
    icon: `${config.PUBLIC_URL}images/icon/optimism.svg`,
    chainId: chain.ogoerli,
  },
  {
    name: "Optimism",
    icon: `${config.PUBLIC_URL}images/icon/optimism.svg`,
    chainId: chain.optimism,
  },
];

const wallets = {
  [chain.avax]: [
    {
      name: "Metamask",
      icon: `${config.PUBLIC_URL}images/icon/metamask-fox.svg`,
      connector: "injected",
    },
  ],
  [chain.ogoerli]: [
    {
      name: "Metamask",
      icon: `${config.PUBLIC_URL}images/icon/metamask-fox.svg`,
      connector: "injected",
    },
  ],
  [chain.optimism]: [
    {
      name: "Metamask",
      icon: `${config.PUBLIC_URL}images/icon/metamask-fox.svg`,
      connector: "injected",
    },
  ],
  [chain.polygon]: [
    {
      name: "Metamask",
      icon: `${config.PUBLIC_URL}images/icon/metamask-fox.svg`,
      connector: "injected",
    },
  ],
  [chain.bep]: [
    {
      name: "Metamask",
      icon: `${config.PUBLIC_URL}images/icon/metamask-fox.svg`,
      connector: "injected",
    },
    {
      name: "Binance Chain Wallet",
      icon: `${config.PUBLIC_URL}images/icon/bsc-wallet.svg`,
      connector: "bsc",
    },
    {
      name: "Wallet Connect",
      icon: `${config.PUBLIC_URL}images/icon/wallet-connect.png`,
      connector: "walletconnect",
    },
  ],
};

function ModalConnect(props: ModalConnectProps) {
  const { isOpen, onClose, onConnect, currentChainId = chain.bep } = props;

  const [selectedChainId, setSelectChainId] = React.useState(currentChainId);

  function handleConnect(connector: string, chain: number) {
    return () => {
      if (onConnect) {
        onConnect(connector, chain);
      }
    };
  }

  function handleSelectChain(chain: number) {
    return () => {
      if (onConnect) {
        setSelectChainId(chain);
      }
    };
  }

  return (
    <Modal
      isOpen={isOpen}
      modalContentProps={{
        maxWidth: "700px",
      }}
    >
      <Box
        borderTopLeftRadius="24px"
        borderTopRightRadius="24px"
        px="30px"
        position="relative"
        as="header"
        bg="#a6a6a695"
        minHeight="70px"
        display="flex"
        alignItems="center"
      >
        <Box
          fontSize="24px"
          lineHeight="28px"
          color="primary"
          as="h2"
          fontWeight={700}
        >
          Connect your wallet
        </Box>
        <Box
          onClick={onClose}
          ml="auto"
          as="button"
          color="#22222280"
          fontSize="20px"
        >
          <Close />
        </Box>
      </Box>
      <Box
        bg="#a6a6a695"
        borderBottomRightRadius="24px"
        borderBottomLeftRadius="24px"
      >
        <Box as="section">
          <Box
            mt="10px"
            color="primary"
            as="h3"
            fontWeight="bold"
            fontSize="20px"
            textAlign="center"
          >
            Select network
          </Box>
          <Box
            mt="16px"
            display={{ xl: "flex", base: "flex" }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {networks.map((w) => {
              return (
                <Box
                  width={{
                    base: "50%",
                    xl: "25%",
                  }}
                  key={w.name}
                  color="#9CAFF1"
                >
                  <Box
                    border={w.chainId === selectedChainId ? "1px solid" : ""}
                    py="20px"
                    px="30px"
                    width="100%"
                    outline="none"
                    textAlign="center"
                    as="button"
                    fontSize="16px"
                    fontWeight={700}
                    onClick={handleSelectChain(w.chainId)}
                  >
                    <Box
                      mx="auto"
                      as="img"
                      alt={`${w.name} icon`}
                      src={w.icon}
                      w="60px"
                      h="60px"
                    />
                    <Box mt="8px" as="span" display="block">
                      {w.name}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box as="section" mt="24px">
          <Box
            mt="10px"
            color="primary"
            as="h3"
            fontWeight="bold"
            fontSize="20px"
            textAlign="center"
          >
            Select wallet
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {wallets[selectedChainId]?.map((w) => {
              return (
                <Box
                  width={{
                    base: "50%",
                    xl: "25%",
                  }}
                  py="20px"
                  px="30px"
                  as="button"
                  key={w.name}
                  color="#9CAFF1"
                >
                  <Box
                    width="100%"
                    outline="none"
                    textAlign="center"
                    fontSize="16px"
                    fontWeight={700}
                    onClick={handleConnect(w.connector, selectedChainId)}
                  >
                    <Box
                      mx="auto"
                      as="img"
                      alt={`${w.name} icon`}
                      src={w.icon}
                      w="50px"
                      h="50px"
                    />
                    <Box mt="8px" as="span" display="block">
                      {w.name}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalConnect;
