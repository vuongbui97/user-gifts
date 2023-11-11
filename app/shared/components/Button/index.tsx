import React from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'
import { CircularProgress } from '@mui/material'

interface IButtonProps extends ButtonProps {
  width?: string | number
  loading?: boolean
}

const Button = ({
  variant = 'contained',
  children,
  fullWidth = false,
  color = 'primary',
  disabled = false,
  width = 'auto',
  loading = false,
  ...rest
}: IButtonProps) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      sx={{
        width,
        fontSize: 12,
        ...rest.sx,
      }}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          size={24}
          sx={{
            color: 'black',
          }}
        />
      ) : (
        children
      )}
    </MuiButton>
  )
}

export default Button
