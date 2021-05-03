import Copyright from "../atoms/copyright";
import Box from "@material-ui/core/Box";
import React from "react";

const CopyrightComponent = () => {
  return (
    <Box mt={8}>
      <Copyright title={"Copyright © アライとウマカツ 2021"} />
    </Box>
  );
};

export default CopyrightComponent;
