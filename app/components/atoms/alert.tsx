import MuiAlert from "@material-ui/lab/Alert";
import { AlertProps } from "@material-ui/lab/Alert/Alert";

/**
 *
 * @param {AlertProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
