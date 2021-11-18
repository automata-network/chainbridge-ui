import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as AutomataIcon } from "../assets/img/automata.svg";
import { shortenAddress } from "../Utils/Helpers";
import { useChainbridge } from "../Contexts/ChainbridgeContext";

import styles from "./AppWrapper.module.scss";

const AppWrapper: React.FC = ({ children }) => {
  const { isReady, address } = useChainbridge();

  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={5000}
      placement="top-center"
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo className={styles.logo} />
          <div className={styles.state}>
            {!isReady ? (
              <span>No wallet connected yet</span>
            ) : (
              <>
                <span className={styles.indicator} />
                <span>{address && shortenAddress(address)}</span>
              </>
            )}
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles.left_top} />
          <div className={styles.right_bottom} />
          {children}
        </div>
        <div className={styles.footer}>
          <AutomataIcon className={styles.powered} />
        </div>
      </div>
    </ToastProvider>
  );
};

export default AppWrapper;
