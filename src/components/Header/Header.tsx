import React from "react";
import Box from "../Box/Box";
import useWallet from "../../hooks/useWallet";
import { Link } from "react-router-dom";
import { AppContainer } from "../AppContainer";
import ButtonCore from "../ButtonCore";
import useToggle from "../../hooks/useToogle";
import useApp from "../../hooks/useApp";
import ModalAccount from "../ModalAccount";

function Header() {
  const wallet = useWallet();
  const toggleAccount = useToggle();
  const app = useApp();

  function handleOpenConnect() {
    app.toggleOpenConnect();
  }

  return (
    <Box as="header" borderBottom="2px solid #222222" color="#f1f1f2" py="16px">
      <AppContainer display="flex" alignItems="center">
        <Box fontSize="24px" color="primary" fontWeight="bold">
          <Link to="/">
            <i>
              <Box as="span">|dethSwap|</Box>
            </i>
          </Link>
          <Link to="/pools">
            <Box as="span" fontSize="18px" color="primary">
              &nbsp;&nbsp;&nbsp;Pools
            </Box>
          </Link>
          <Link to="/stake">
            <Box as="span" fontSize="18px" color="primary">
              &nbsp;&nbsp;&nbsp;Stake
            </Box>
          </Link>
          <Link to="/info">
            <Box as="span" fontSize="18px" color="primary">
              &nbsp;&nbsp;&nbsp;Info
            </Box>
          </Link>
          <Link to="/info">
            <Box as="span" fontSize="18px" color="primary">
              &nbsp;&nbsp;&nbsp;Discord
            </Box>
          </Link>
        </Box>
        {!wallet.account && (
          <Box ml="auto">
            <ButtonCore onClick={handleOpenConnect}>Connect</ButtonCore>
          </Box>
        )}
        {wallet.account && (
          <ButtonCore ml="auto" onClick={toggleAccount.toggleCallback(true)}>
            Balance:
            <Box ml="4px" as="span">
              <Box as="strong" color="primary">
                {wallet.balance} {wallet.etherSymbol}
              </Box>
            </Box>
          </ButtonCore>
        )}
      </AppContainer>
      {toggleAccount.active && (
        <ModalAccount
          isOpen={toggleAccount.active}
          onClose={toggleAccount.setInActive}
        />
      )}
    </Box>
  );
}

export default Header;
