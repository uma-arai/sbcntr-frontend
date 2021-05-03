import React from "react";
import { BlitzPage, useRouter } from "blitz";
import Layout from "app/layouts/Layout";
import { LoginForm } from "app/auth/components/LoginForm";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import CopyrightComponent from "../../components/molecules/copyright";

const LoginPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <LoginForm onSuccess={() => router.push("/top")} />
      <CopyrightComponent />
    </Container>
  );
};

LoginPage.getLayout = (page) => <Layout title="ログイン">{page}</Layout>;
LoginPage.redirectAuthenticatedTo = "/top";

export default LoginPage;
