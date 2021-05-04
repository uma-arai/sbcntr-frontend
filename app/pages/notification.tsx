import { BlitzPage, useRouter } from "blitz";
import React from "react";
import Layout from "../layouts/Layout";
import { Dashboard as SbcntrDashboard } from "../components/organisms/dashboard";
import CopyrightComponent from "../components/molecules/copyright";
import NotificationForm from "../components/templates/NotificationForm";

const NotificationPage: BlitzPage = () => {
  const router = useRouter();
  return (
    <>
      <SbcntrDashboard title={"Sbcntr-Frontend Notification"}>
        <NotificationForm router={router} />
      </SbcntrDashboard>
      <CopyrightComponent />
    </>
  );
};

NotificationPage.authenticate = true;
NotificationPage.getLayout = (page) => <Layout title="通知一覧">{page}</Layout>;

export default NotificationPage;
