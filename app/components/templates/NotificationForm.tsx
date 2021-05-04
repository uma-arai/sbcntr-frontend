import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";
import { useMutation } from "blitz";
import updateNotification from "../../notification/mutations/updateNotification";

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
  onSuccess?: (params: any) => void;
  onClose: () => void;
};

/**
 *
 * @param {((params: any) => void) | undefined} onSuccess
 * @param {() => void} onClose
 * @returns {JSX.Element}
 * @constructor
 */
export const NotificationForm = ({
  onSuccess,
  onClose,
}: NotificationFormProps) => {
  const classes = useStyles();
  const [readNotifications] = useMutation(updateNotification);
  return (
    <div className={classes.root}>
      <List className={classes.container}>
        <Button
          variant="contained"
          color="secondary"
          onClick={async () => {
            try {
              await readNotifications();
            } catch (error) {}
          }}
        >
          すべて既読
        </Button>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DraftsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
      </List>
    </div>
  );
};

export default NotificationForm;
