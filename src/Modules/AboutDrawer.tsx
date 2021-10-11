import React from "react";

import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import CustomDrawer from "../Components/Custom/CustomDrawer";
import { Button, Typography } from "@chainsafe/common-components";

const useStyles = makeStyles(({ constants }: ITheme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& *": {
        marginRight: constants.generalUnit,
        textDecoration: "none",
      },
    },
  })
);

interface IAboutDrawerProps {
  open: boolean;
  close: () => void;
}

const AboutDrawer: React.FC<IAboutDrawerProps> = ({
  open,
  close,
}: IAboutDrawerProps) => {
  const classes = useStyles();

  return (
    <CustomDrawer onClose={close} open={open} className={classes.root}>
      <Typography variant="h1" component="h4">
        What is Automata ContextFree Token Bridge?
      </Typography>
      <Typography component="p" variant="h5">
        Automata ContextFree Token Bridge is a modular multi-directional blockchain bridge
        to allow token transfer between Ropsten - an Ethereum based network, and
        ContextFree - a Substrate based network built by Automata team.
      </Typography>
      <section className={classes.buttons}>
        <Button onClick={() => close()} variant="outline">
          OK
        </Button>
        <a
          rel="noopener noreferrer"
          href={process.env.REACT_APP_SUPPORT_URL}
          target="_blank"
        >
          <Button variant="outline">
            Ask a question on {process.env.REACT_APP_SUPPORT_SERVICE}
          </Button>
        </a>
      </section>
    </CustomDrawer>
  );
};

export default AboutDrawer;
