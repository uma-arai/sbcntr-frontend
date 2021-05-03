import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { BlitzPage } from "blitz";
import ItemCard from "../components/organisms/itemcard";
import { useAllData } from "../hooks/useAllData";
import CopyrightComponent from "../components/molecules/copyright";
import Layout from "../layouts/Layout";
import { Dashboard as SbcntrDashboard } from "../components/organisms/dashboard";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const FavoriteComponent = () => {
  const classes = useStyles();
  const items = useAllData({ favorite: true });

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container direction={"row"}>
          {items?.result?.data.map((value) => {
            return (
              <ItemCard
                key={value.id}
                id={value.id}
                name={value.name}
                title={value.title}
                favorite={value.favorite}
                img={value.img}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

const FavoritePage: BlitzPage = () => {
  return (
    <>
      <SbcntrDashboard title={"Sbcntr-Frontend Favorite"}>
        <FavoriteComponent />
      </SbcntrDashboard>
      <CopyrightComponent />
    </>
  );
};

FavoritePage.authenticate = true;
FavoritePage.getLayout = (page) => <Layout title="お気に入り">{page}</Layout>;

export default FavoritePage;
