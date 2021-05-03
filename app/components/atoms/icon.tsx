import React from "react"
import { IconContext, IconType } from "react-icons"

type Props = {
  size?: string
  color?: string
  iconType: IconType
}

const IconParts = ({ size = "1rem", color = "primary", iconType }: Props) => {
  const PropsIcon = iconType
  return (
    <IconContext.Provider value={{ size, color }}>
      <PropsIcon />
    </IconContext.Provider>
  )
}

export default IconParts
