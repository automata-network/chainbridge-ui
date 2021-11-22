import React from "react";

import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import CustomDrawer from "../Components/Custom/CustomDrawer";
import { Typography } from "@chainsafe/common-components";
import { shortenAddress } from "../Utils/Helpers";

const useStyles = makeStyles(({ constants, palette, zIndex }: ITheme) =>
  createStyles({
    root: {
      color: "#808080",
      zIndex: zIndex?.blocker,
      position: "absolute",
      padding: 0,
      backgroundColor: "#FFFFFF !important",
      "& ul": {
        paddingBottom: "10px",
        borderBottom: "1px solid #E5E5E5",
      },
      "& li": {
        color: "#CACACA",
        fontSize: "18px",
        lineHeight: "23px",
        letterSpacing: "0.025em",
        position: "relative",
        padding: `${constants.generalUnit}px 0 ${constants.generalUnit}px ${
          constants.generalUnit * 8
        }px`,
        "&:before": {
          content: "''",
          display: "block",
          backgroundColor: "#CACACA",
          height: constants.generalUnit,
          width: constants.generalUnit,
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: constants.generalUnit * 4,
          transform: "translate(-50%, -50%)",
        },
      },
    },
    title: {
      fontSize: "20px",
      fontWeight: 500,
      width: "100%",
      height: "73px",
      lineHeight: "73px",
      paddingLeft: "31px",
      borderBottom: "1px solid #E5E5E5",
    },
    wrapper: {
      padding: "25px 31px 0 31px",
    },
    subtitle: {
      color: "#A6A6A6",
      fontSize: "18px",
      lineHeight: "21px",
      margin: `${constants.generalUnit * 2}px 0`,
    },
    agreement: {
      color: "#A6A6A6",
      fontSize: "18px",
      lineHeight: "21px",
      letterSpacing: "0.025em",
      margin: `${constants.generalUnit * 3}px 0`,
    },
    backdrop: {
      position: "absolute",
      zIndex: zIndex?.layer4,
    },
    strong: {
      fontWeight: 500,
    },
    highlight: {
      color: "#FFB877",
    },
    btnRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    backButton: {
      cursor: "pointer",
      width: "116px",
      height: "45px",
      background: "#F4F4F4",
      border: "1px solid #E98F39",
      borderRadius: "5px",
      color: "#E98F39",
      fontSize: "16px",
      lineHeight: "45px",
      fontWeight: 500,
      textAlign: "center",
      "&:hover": {
        opacity: 0.7,
      },
    },
    startButton: {
      cursor: "pointer",
      width: "311px",
      height: "45px",
      background: "#E98F39",
      border: "1px solid #E98F39",
      borderRadius: "5px",
      color: "#FFFFFF",
      fontSize: "16px",
      lineHeight: "45px",
      fontWeight: 500,
      textAlign: "center",
      "&:hover": {
        opacity: 0.7,
      },
    },
  })
);

interface IPreflightModalTransferProps {
  open: boolean;
  close: () => void;
  sender: string;
  receiver: string;
  value: number;
  tokenSymbol: string;
  sourceNetwork: string;
  targetNetwork: string;
  start: () => void;
}

const PreflightModalTransfer: React.FC<IPreflightModalTransferProps> = ({
  open,
  close,
  receiver,
  sender,
  sourceNetwork,
  targetNetwork,
  tokenSymbol,
  value,
  start,
}: IPreflightModalTransferProps) => {
  const classes = useStyles();

  return (
    <CustomDrawer
      className={classes.root}
      classNames={{
        backdrop: classes.backdrop,
      }}
      size={513}
      open={open}
    >
      <div className={classes.title}>
        Pre-flight Check (Confirm Transfer + Details)
      </div>
      <div className={classes.wrapper}>
        <Typography className={classes.subtitle} variant="h5" component="p">
          Please be advised this is an experimental application:
        </Typography>
        <ul>
          <li>
            You will not be able to cancel the transaction once you submit it.
          </li>
          <li>
            Your transaction could get stuck for an indefinite amount of time.
          </li>
          <li>
            Funds cannot be returned if they are sent to the wrong address.
          </li>
          <li>The transaction fee may be higher than expected.</li>
        </ul>
        <div className={classes.agreement}>
          I agree and want to send{" "}
          <span className={classes.highlight}>
            {value} {tokenSymbol}
          </span>{" "}
          from&nbsp;
          <span className={classes.highlight}>
            {shortenAddress(sender)}
          </span> on <span className={classes.strong}>{sourceNetwork}</span>{" "}
          to&nbsp;
          <span className={classes.highlight}>
            {shortenAddress(receiver)}
          </span>{" "}
          on <span className={classes.strong}>{targetNetwork}</span>.
        </div>
        <div className={classes.btnRow}>
          <div onClick={close} className={classes.backButton}>
            Back
          </div>
          <div onClick={start} className={classes.startButton}>
            Start Transfer
          </div>
        </div>
      </div>
    </CustomDrawer>
  );
};

export default PreflightModalTransfer;
