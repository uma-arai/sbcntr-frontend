import { BlitzPage } from "blitz";
import Layout from "app/layouts/Layout";
import React from "react";
import Container from "@material-ui/core/Container";
import CopyrightComponent from "../components/molecules/copyright";
import CssBaseline from "@material-ui/core/CssBaseline";

const Healthcheck: BlitzPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <CopyrightComponent />
    </Container>
  );
};

Healthcheck.redirectAuthenticatedTo = "/top";
Healthcheck.getLayout = (page) => <Layout title="Healthcheck">{page}</Layout>;

export default Healthcheck;
