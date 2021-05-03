import React from "react";
import { BlitzPage, useRouter } from "blitz";
import Layout from "app/layouts/Layout";
import { SignupForm } from "app/auth/components/SignupForm";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import CopyrightComponent from "../../components/molecules/copyright";

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignupForm onSuccess={() => router.push("/top")} />
      <CopyrightComponent />
    </Container>
  );
};

SignupPage.getLayout = (page) => <Layout title="サインアップ">{page}</Layout>;
SignupPage.redirectAuthenticatedTo = "/top";

export default SignupPage;
