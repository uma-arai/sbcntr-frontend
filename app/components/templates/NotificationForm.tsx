import React, { SyntheticEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Snackbar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";
import { BlitzRouter, useMutation } from "blitz";
import updateNotification from "../../notification/mutations/updateNotification";
import { useNotifications } from "../../hooks/useNotifications";
import { Alert as SbcntrAlert } from "../atoms/alert";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

/**
 *
 */
type NotificationFormProps = {
  router: BlitzRouter;
};

export const NotificationForm = ({ router }: NotificationFormProps) => {
  const classes = useStyles();
  let notifications = useNotifications();
  const [readNotifications] = useMutation(updateNotification);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ body: "", status: false });
  const handleBarOpen = () => {
    setOpen(true);
  };
  const handleBarClose = () => {
    setOpen(false);
    router.reload();
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3 * 1000}
        onClose={handleBarClose}
      >
        <SbcntrAlert
          onClose={handleBarClose}
          severity={message.status ? "success" : "error"}
        >
          {message.body}
        </SbcntrAlert>
      </Snackbar>
      <List className={classes.container}>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            onClick={async () => {
              try {
                const result = await readNotifications();
                if (result.error) {
                  setMessage({
                    body: "通知の既読処理に失敗しました",
                    status: false,
                  });
                } else {
                  setMessage({
                    body: "すべての通知を既読にしました",
                    status: true,
                  });
                }
              } catch (error) {
                setMessage({
                  body: "通知の既読処理に失敗しました",
                  status: false,
                });
              } finally {
                handleBarOpen();
              }
            }}
          >
            すべて既読
          </Button>
        </ListItem>
        {notifications?.map((notif, index) => {
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{notif.unread ? <MailIcon /> : <DraftsIcon />}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${notif.title}`}
                secondary={notif.description}
              />
              <ListItemAvatar>
                <p>{notif.createdAt}</p>
              </ListItemAvatar>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default NotificationForm;
