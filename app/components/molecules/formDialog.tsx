import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogForm from "../templates/DialogForm";

/**
 *
 */
type FormDialogProps = {
  title: string;
  detail: string;
  open: boolean;
  onSuccess: (values: any) => Promise<any>;
  onClose: () => void;
};

/**
 *
 * @param {string} title
 * @param {string} detail
 * @param {boolean} open
 * @param {() => void} onClose
 * @param {(values: any) => Promise<any>} onSuccess
 * @returns {JSX.Element}
 * @constructor
 */
export const FormDialog = ({
  title,
  detail,
  open,
  onClose,
  onSuccess,
}: FormDialogProps) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{detail}</DialogContentText>
          <DialogForm {...{ onSuccess, onClose }} />
        </DialogContent>
        <DialogActions>
          <Button fullWidth onClick={onClose} color="secondary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
