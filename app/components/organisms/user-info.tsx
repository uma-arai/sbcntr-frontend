import { useRouter } from "blitz";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const UserInfo = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        ログイン
      </Button>
      <Button
        className={classes.button}
        color="default"
        variant="text"
        onClick={handleClickOpen}
      >
        サインアップ
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`現在データベース未作成のため実行できません。引き続きハンズオンを進めてください。`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            了解
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
