import * as React from "react";
import { BlitzPage, useRouter } from "blitz";
import { Dashboard as SbcntrDashboard } from "../components/organisms/dashboard";
import CopyrightComponent from "../components/molecules/copyright";
import Layout from "../layouts/Layout";
import { ItemListForm } from "../components/templates/ItemlistForm";

const TopPage: BlitzPage = () => {
  const router = useRouter();
  return (
    <>
      <SbcntrDashboard title={"Sbcntr-Frontend Item list"}>
        <ItemListForm router={router} />
      </SbcntrDashboard>
      <CopyrightComponent />
    </>
  );
};

TopPage.authenticate = true;
TopPage.getLayout = (page) => <Layout title="トップ">{page}</Layout>;

export default TopPage;
