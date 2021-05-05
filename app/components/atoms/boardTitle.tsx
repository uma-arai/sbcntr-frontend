import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";

type TitleProps = {
  children: ReactNode;
};

/**
 *
 * @param {React.PropsWithChildren<TitleProps>} props
 * @returns {JSX.Element}
 * @constructor
 */
const BoardTitle: React.FC<TitleProps> = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};

export default BoardTitle;
