import React from "react";

import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import {
  // Button,
  ExclamationCircleSvg,
  ProgressBar,
  Typography,
} from "@chainsafe/common-components";
import CustomModal from "../Components/Custom/CustomModal";
import { useChainbridge } from "../Contexts/ChainbridgeContext";
// import { EvmBridgeConfig } from "../chainbridgeConfig";

const useStyles = makeStyles(
  ({ animation, constants, palette, typography }: ITheme) =>
    createStyles({
      root: {
        width: "100%",
      },
      inner: {
        width: "100% !important",
        maxWidth: "unset !important",
        display: "flex",
        flexDirection: "row",
        padding: 0,
        bottom: 0,
        top: "unset",
        transform: "unset",
        left: 0,
        border: "none",
        borderRadius: 0,
        transitionDuration: `${animation.transform}ms`,
      },
      header: {
        padding: "30px 30px 20px 30px",
        color: "#7F7F7F",
        fontSize: "25px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottom: "1px solid #E5E5E5",
      },
      subTitle: {
        color: "#BCBCBC",
        fontSize: "20px",
      },
      heading: {
        marginBottom: constants.generalUnit,
        whiteSpace: "nowrap",
      },
      stepIndicator: {
        ...typography.h4,
        height: 40,
        width: 40,
        marginRight: constants.generalUnit * 2,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${palette.additional["transactionModal"][2]}`,
        color: palette.additional["transactionModal"][3],
        "& svg": {
          height: 20,
          width: 20,
          display: "block",
        },
      },
      content: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
      buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 30px 25px",
        // marginTop: constants.generalUnit * 5,
        // "& > *": {
        //   textDecoration: "none",
        //   marginRight: constants.generalUnit,
        // },
      },
      button: {
        // borderColor: `${palette.additional["gray"][8]} !important`,
        // color: `${palette.additional["gray"][8]} !important`,
        // textDecoration: "none",
        cursor: "pointer",
        width: "100%",
        height: "37px",
        background: "#FFFFFF",
        border: "1px solid #E98F39",
        borderRadius: "5px",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "37px",
        letterSpacing: "0.05em",
        color: "#E98F39",
        textAlign: "center",
        "&:hover": {
          opacity: 0.7,
          // borderColor: `${palette.additional["gray"][8]} !important`,
          // backgroundColor: `${palette.additional["gray"][8]} !important`,
          // color: `${palette.common.white.main} !important`,
          // textDecoration: "none",
        },
      },
      initCopy: {
        margin: "20px 30px",
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "0.025em",
        color: "#7F7F7F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& > *:first-child": {
          // marginTop: constants.generalUnit * 3.5,
          // marginBottom: constants.generalUnit * 8,
          marginBottom: "20px",
          fontSize: "18px",
          lineHeight: "21px",
          letterSpacing: "0.025em",
          color: "#B0B0B0",
        },
      },
      sendingCopy: {
        margin: "20px 30px",
        fontSize: "18px",
        lineHeight: "21px",
        letterSpacing: "0.025em",
        color: "#B0B0B0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& > *": {
          "&:last-child": {
            marginTop: "12px",
          },
          "&:first-child": {
            marginTop: "0",
          },
        },
      },
      vote: {
        display: "flex",
        flexDirection: "row",
        marginTop: constants.generalUnit,
        "& > *": {
          "&:first-child": {
            width: 0,
            flex: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // maxWidth: 240,
          },
          "&:last-child": {
            marginLeft: constants.generalUnit * 3.5,
            fontStyle: "italic",
          },
        },
      },
      warning: {
        // marginTop: constants.generalUnit * 3.5,
        // display: "block",
        // fontWeight: 600,
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "0.025em",
        color: "#7F7F7F",
      },
      receipt: {
        fontSize: "18px",
        lineHeight: "21px",
        letterSpacing: "0.025em",
        color: "#B0B0B0",
        margin: "20px 30px 25px",
        // marginTop: constants.generalUnit * 3.5,
        // marginBottom: constants.generalUnit * 8,
      },
      weighted: {
        fontWeight: 400,
      },
      strong: {
        fontWeight: 500,
      },
      highlight: {
        color: "#FFB877",
      },
      progress: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        "& > *": {
          borderRadius: "0 !important",
          background: `${palette.additional["transactionModal"][1]} !important`,
          "&  >  *": {
            borderRadius: "0 !important",
            background: `${palette.additional["transactionModal"][1]} !important`,
          },
        },
      },
    })
);

interface ITransferActiveModalProps {
  open: boolean;
  close: () => void;
}

const TransferActiveModal: React.FC<ITransferActiveModalProps> = ({
  open,
  close,
}: ITransferActiveModalProps) => {
  const classes = useStyles();
  const {
    transactionStatus,
    depositVotes,
    relayerThreshold,
    inTransitMessages,
    homeConfig,
    destinationChainConfig,
    depositAmount,
    // transferTxHash,
    selectedToken,
    tokens,
  } = useChainbridge();
  const tokenSymbol = selectedToken && tokens[selectedToken]?.symbol;
  return (
    <CustomModal
      className={classes.root}
      injectedClass={{
        inner: classes.inner,
      }}
      active={open}
    >
      <ProgressBar
        className={classes.progress}
        size="small"
        variant="primary"
        progress={transactionStatus !== "Transfer Completed" ? -1 : 100}
      />
      <section className={classes.content}>
        <div className={classes.header}>
          <div className={classes.stepIndicator}>
            {transactionStatus === "Initializing Transfer" ? (
              "1"
            ) : transactionStatus === "In Transit" ? (
              "2"
            ) : transactionStatus === "Transfer Completed" ? (
              "3"
            ) : (
              <ExclamationCircleSvg />
            )}
          </div>
          <Typography className={classes.heading} variant="h3" component="h3">
            {transactionStatus === "Initializing Transfer" ? (
              "Initializing Transfer"
            ) : transactionStatus === "In Transit" ? (
              <span>
                In Transit{" "}
                <span className={classes.subTitle}>
                  (
                  {depositVotes < (relayerThreshold || 0)
                    ? `${depositVotes}/${relayerThreshold} signatures needed`
                    : "Executing proposal"}
                  )
                </span>
              </span>
            ) : transactionStatus === "Transfer Completed" ? (
              "Transfer completed"
            ) : (
              "Transfer aborted"
            )}
          </Typography>
        </div>
        {transactionStatus === "Initializing Transfer" ? (
          <div className={classes.initCopy}>
            <Typography>Deposit pending...</Typography>
            <Typography className={classes.weighted}>
              This should take a few minutes.
              <br />
              Please do not refresh or leave the page.
            </Typography>
          </div>
        ) : transactionStatus === "In Transit" ? (
          <div className={classes.sendingCopy}>
            {inTransitMessages.map((m: any, i: number) => {
              if (typeof m === "string") {
                return (
                  <Typography className={classes.vote} component="p" key={i}>
                    {m}
                  </Typography>
                );
              } else {
                return (
                  <Typography className={classes.vote} component="p" key={i}>
                    <span>Vote casted by {m.address}</span>
                    <span>{m.signed}</span>
                  </Typography>
                );
              }
            })}
            <Typography className={classes.warning}>
              This should take a few minutes. <br />
              Please do not refresh or leave the page.
            </Typography>
          </div>
        ) : transactionStatus === "Transfer Completed" ? (
          <>
            <Typography className={classes.receipt} component="p">
              Successfully transferred{" "}
              <span className={classes.highlight}>
                {depositAmount} {tokenSymbol}
              </span>{" "}
              from <span className={classes.strong}>{homeConfig?.name}</span> to{" "}
              <span className={classes.strong}>
                {destinationChainConfig?.name}
              </span>
              .
            </Typography>
            <section className={classes.buttons}>
              {/* <Button
                onClick={() =>
                  destinationChainConfig &&
                  (destinationChainConfig as EvmBridgeConfig).blockExplorer &&
                  transferTxHash &&
                  window.open(
                    `${
                      (destinationChainConfig as EvmBridgeConfig).blockExplorer
                    }/${transferTxHash}`,
                    "_blank"
                  )
                }
                size="small"
                className={classes.button}
                variant="outline"
                // disabled={
                //   !destinationChain ||
                //   !destinationChain.blockExplorer ||
                //   !transferTxHash
                // }
              >
                View transaction
              </Button> */}
              <div className={classes.button} onClick={close}>
                Start new transfer
              </div>
            </section>
          </>
        ) : (
          <>
            <Typography className={classes.receipt} component="p">
              Something went wrong and we could not complete your transfer.
            </Typography>
            {/*{homeConfig &&*/}
            {/*  (homeConfig as EvmBridgeConfig).blockExplorer &&*/}
            {/*  transferTxHash && (*/}
            {/*    <Button*/}
            {/*      onClick={() =>*/}
            {/*        window.open(*/}
            {/*          `${*/}
            {/*            (homeConfig as EvmBridgeConfig).blockExplorer*/}
            {/*          }/${transferTxHash}`,*/}
            {/*          "_blank"*/}
            {/*        )*/}
            {/*      }*/}
            {/*      size="small"*/}
            {/*      className={classes.button}*/}
            {/*      variant="outline"*/}
            {/*    >*/}
            {/*      View transaction*/}
            {/*    </Button>*/}
            {/*  )}*/}
            <section className={classes.buttons}>
              <div className={classes.button} onClick={close}>
                Start new transfer
              </div>
              {/*<a*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  href={process.env.REACT_APP_SUPPORT_URL}*/}
              {/*  target="_blank"*/}
              {/*>*/}
              {/*  <Button variant="outline">*/}
              {/*    Ask a question on {process.env.REACT_APP_SUPPORT_SERVICE}*/}
              {/*  </Button>*/}
              {/*</a>*/}
            </section>
          </>
        )}
      </section>
    </CustomModal>
  );
};

export default TransferActiveModal;
