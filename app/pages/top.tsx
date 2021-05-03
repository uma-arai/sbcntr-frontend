import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { BlitzPage, BlitzRouter, useMutation, useRouter } from "blitz";
import ItemCard from "../components/organisms/itemcard";
import { useAllData } from "../hooks/useAllData";
import createItem from "../item/mutations/createItem";
import { Dashboard as SbcntrDashboard } from "../components/organisms/dashboard";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { FormDialog } from "../components/molecules/formDialog";
import CopyrightComponent from "../components/molecules/copyright";
import Layout from "../layouts/Layout";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  floating: {
    position: "fixed",
    right: 25,
    bottom: 25,
  },
}));

const TopComponent: React.FC<{ router: BlitzRouter }> = ({ router }) => {
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
        {/* アイテムリスト表示 */}
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

const TopPage: BlitzPage = () => {
  const router = useRouter();
  return (
    <>
      <SbcntrDashboard title={"Sbcntr-Frontend Market"}>
        <TopComponent router={router} />
      </SbcntrDashboard>
      <CopyrightComponent />
    </>
  );
};

TopPage.authenticate = true;
TopPage.getLayout = (page) => <Layout title="トップ">{page}</Layout>;

export default TopPage;
