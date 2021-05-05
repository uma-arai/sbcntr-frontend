import { useRouter } from "blitz";
import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  const router = useRouter();

  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={async (event) => {
          router.push({
            pathname: "/login",
          });
        }}
      >
        ログイン
      </Button>
      <Button
        className={classes.button}
        color="default"
        variant="text"
        onClick={async (event) => {
          router.push({
            pathname: "/signup",
          });
        }}
      >
        サインアップ
      </Button>
    </>
  );
};
