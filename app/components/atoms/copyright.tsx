import Typography from "@material-ui/core/Typography"
import React from "react"

type CopyrightProps = {title: string}

const Copyright:React.FC<CopyrightProps> = ({title}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {title}
    </Typography>
  )
}

export default Copyright;
