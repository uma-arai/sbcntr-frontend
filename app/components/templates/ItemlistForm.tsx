import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { BlitzRouter, useMutation } from "blitz";
import { useAllData } from "../../hooks/useAllData";
import { useState } from "react";
import createItem from "../../item/mutations/createItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { FormDialog } from "../molecules/formDialog";
import { ItemCard } from "../organisms/itemcard";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  floating: {
    position: "fixed",
    right: theme.spacing(4),
    bottom: theme.spacing(4),
  },
}));

/**
 *
 */
type ItemListFormProps = {
  router: BlitzRouter;
};

/**
 *
 * @param {BlitzRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
export const ItemListForm = ({ router }: ItemListFormProps) => {
  const classes = useStyles();
  const items = useAllData(null);

  // For ItemAdd Dialog
  const [formOpen, setFormOpen] = useState(false);
  const [createItemMutation] = useMutation(createItem);
  const handleClickOpen = () => {
    setFormOpen(true);
  };

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container className={classes.container}>
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
      <Fab
        className={classes.floating}
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <FormDialog
        title={"データを追加"}
        detail={
          "新しいアイテムを追加できます。タイトルとメモを記入してください。"
        }
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          router.reload();
        }}
        onSuccess={(values) => createItemMutation(values)}
      />
    </>
  );
};
