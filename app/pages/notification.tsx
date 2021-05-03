import { BlitzPage } from "blitz";
import React from "react";
import Layout from "../layouts/Layout";
import EditForm from "../components/templates/EditForm";

type NotificationPageProps = {
  userId: string;
};

const NotificationPage: BlitzPage<NotificationPageProps> = ({ userId }) => {
  return <EditForm onSuccess={() => console.log(userId)} />;
};

NotificationPage.getLayout = (page) => <Layout title="通知一覧">{page}</Layout>;

export default NotificationPage;
