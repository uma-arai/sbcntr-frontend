import { BlitzPage } from "blitz";
import Layout from "app/layouts/Layout";
import React from "react";
import Container from "@material-ui/core/Container";
import CopyrightComponent from "../components/molecules/copyright";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHelloMessage } from "../hooks/useHelloMessage";
import { UserInfo } from "../components/organisms/user-info";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: theme.spacing(1),
    "& img": {
      width: 500,
    },
  },
  main: {
    padding: theme.spacing(1),
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
      fontSize: 32,
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Home: BlitzPage = () => {
  const classes = useStyles();
  const hello = useHelloMessage();

  return (
    <Container className={classes.root} maxWidth="xs">
      <CssBaseline />
      <div className={classes.main}>
        <div className={classes.logo}>
          <img src="/arai-uma.png" alt="sbcntr-frontend" />
        </div>
        <p>
          <strong>{hello}</strong>
        </p>
        <div className={classes.buttonContainer}>
          <UserInfo />
        </div>
      </div>
      <CopyrightComponent />
    </Container>
  );
};

Home.redirectAuthenticatedTo = "/top";
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>;

export default Home;
