import React from "react";
import { Form, FORM_ERROR } from "app/components/Form";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "mui-rff";
import { ERROR_MESSAGES } from "utils/message";
import { ItemInput } from "../../item/validataion";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

/**
 *
 */
type DialogFormProps = {
  onSuccess?: (params: any) => void;
  onClose: () => void;
};

const getImgPath = () => {
  const sec = new Date().getSeconds();
  switch (sec % 5) {
    case 0:
      return "/flower-park.jpeg";
    case 1:
      return "/apple.jpeg";
    case 2:
      return "/dice.jpeg";
    case 3:
      return "/arai-uma.jpeg";
  }

  return "/apple.jpeg";
};

/**
 *
 * @param {((params: any) => void) | undefined} onSuccess
 * @param {() => void} onClose
 * @returns {JSX.Element}
 * @constructor
 */
export const DialogForm = ({ onSuccess, onClose }: DialogFormProps) => {
  const classes = useStyles();
  const img = getImgPath();
  return (
    <div className={classes.container}>
      <Form
        submitText="追加"
        schema={ItemInput}
        initialValues={{ title: "", name: "", img }}
        onSubmit={async (values) => {
          try {
            await onSuccess?.(values);
            onClose();
          } catch (error) {
            return {
              [FORM_ERROR]: ERROR_MESSAGES.ITEM.FAILED_TO_ADD,
            };
          }
        }}
      >
        <TextField
          margin={"normal"}
          name="title"
          label="タイトル"
          required
          id={"title"}
        />
        <TextField
          margin={"normal"}
          name="name"
          label="メモ"
          required
          id={"name"}
        />
      </Form>
    </div>
  );
};

export default DialogForm;
