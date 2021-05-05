import * as React from "react";
import { BlitzPage } from "blitz";
import CopyrightComponent from "../components/molecules/copyright";
import Layout from "../layouts/Layout";
import { Dashboard as SbcntrDashboard } from "../components/organisms/dashboard";
import { FavoriteForm } from "../components/templates/FavoriteForm";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FavoritePage: BlitzPage = () => {
  return (
    <>
      <SbcntrDashboard title={"Sbcntr-Frontend Favorite"}>
        <FavoriteForm />
      </SbcntrDashboard>
      <CopyrightComponent />
    </>
  );
};

FavoritePage.authenticate = true;
FavoritePage.getLayout = (page) => <Layout title="お気に入り">{page}</Layout>;

export default FavoritePage;
