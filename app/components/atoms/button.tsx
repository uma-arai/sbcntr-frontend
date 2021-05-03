import React, { MouseEvent } from "react"
import styled from "styled-components"
import CircularProgress from "@material-ui/core/CircularProgress"
import { IconType } from "react-icons"
import { useState } from "react"
import IconParts from "./icon"

type ColorStyle = "primary" | "secondary" | "error"

type ButtonProps = {
  children: string
  iconType?: IconType | string
  type?: "button" | "submit" | "reset"
  color?: ColorStyle
  size?: "s" | "m" | "l"
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const ButtonWrapper = styled.div`
  position: relative;
  min-width: 120px;
`

const ProgressWrapper = styled.div<{ size }>`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`

const ButtonParts = styled.button<ButtonProps>`
  display: block;
  color: #f4f4f4;
  font-size: 1rem;
  background-color: #007392;
  padding: 1rem 2rem;
  text-align: center;
  border: none;
  border-radius: 4px;

  ${(props) => {
    switch (props.color) {
      case "primary":
        return `
          background-color: #007392;
        `
      case "secondary":
        return `
          background-color:  #A07382;
        `
      case "error":
        return `
          background-color:  #d71526;
        `
      default:
        return `
        `
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "s":
        return `
        height: 2.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        `
      case "m":
        return `
        height: 3rem;
        `
      default:
        return ""
    }
  }}
    ${(props) => {
    if (props.disabled) {
      return `
        opacity: 0.6;
        cursor: not-allowed;
        `
    }
  }}
`

const ButtonIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`

const ButtonImgWrapper = styled.img`
  height: 50%;
  position: absolute;
  top: 51%;
  left: 0.5rem;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
`

export const Button = ({
  children,
  iconType,
  type = "button",
  color = "primary",
  size = "s",
  onClick = (e) => {},
  disabled = false,
}: ButtonProps) => {
  const [loading, setLoading] = useState(false)
  let progress = "1rem"
  switch (size) {
    case "s":
      progress = "1rem"
      break
    case "m":
      progress = "2rem"
      break
  }
  return (
    <ButtonWrapper>
      {iconType && typeof iconType !== "string" ? (
        <ButtonIconWrapper>
          <IconParts iconType={iconType} />
        </ButtonIconWrapper>
      ) : typeof iconType === "string" ? (
        <ButtonImgWrapper alt={"status"} src={iconType} />
      ) : null}
      <ButtonParts
        disabled={disabled || loading}
        type={type}
        color={color}
        size={size}
        onClick={async (event) => {
          setLoading(true)
          try {
            await onClick(event)
          } finally {
            setLoading(false)
          }
        }}
      >
        {children}
      </ButtonParts>
      {loading ? (
        <ProgressWrapper size={size}>
          <CircularProgress
            color={color === "primary" || color === "secondary" ? color : "primary"}
            size={progress}
          />
        </ProgressWrapper>
      ) : null}
    </ButtonWrapper>
  )
}

export default Button
