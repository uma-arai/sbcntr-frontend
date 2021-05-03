import React from "react"
import Typography from "@material-ui/core/Typography"
import BoardTitle from "app/components/atoms/boardTitle"

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Deposits = () => {
  const sale = 12345678
  const date = new Date()
  return (
    <>
      <BoardTitle>売上表示</BoardTitle>
      <Typography component="p" variant="h4">
        {`${sale.toLocaleString()} 円`}
      </Typography>
      <Typography color="textSecondary" style={{ flex: 1 }}>
        {`${date.getMonth() + 1}月${date.getDate()}日 現在`}
      </Typography>
    </>
  )
}

export default Deposits
