import { makeStyles } from "@material-ui/core/styles";
import { useAllData } from "../../hooks/useAllData";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ItemCard } from "../organisms/itemcard";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const FavoriteForm = () => {
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
