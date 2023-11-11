import React from 'react'
import {
  Box,
  FormHelperText,
  FormLabel,
  TextField as MuiTextField,
  TextFieldProps,
  TextFieldVariants,
} from '@mui/material'

interface ITextFieldProps
  extends Omit<TextFieldProps, 'variant' | 'helperText'> {
  variant?: TextFieldVariants
  width?: number | string
  helperText?: string
}

const TextField = ({
  label,
  variant = 'outlined',
  fullWidth = true,
  helperText,
  width = 300,
  required = false,
  error = false,
  ...rest
}: ITextFieldProps) => {
  return (
    <Box alignItems='flex-start' display='flex' flexDirection='column'>
      {label && (
        <FormLabel
          sx={(theme) => ({
            fontSize: 12,
            fontWeight: 500,
            color: error ? theme.palette.error.main : theme.palette.grey[600],
          })}
        >
          {label}
          {required ? '*' : ''}
        </FormLabel>
      )}
      <MuiTextField
        sx={{
          width: fullWidth ? '100%' : width,
          '& input': {
            padding: 1,
            fontSize: 16,
            fontWeight: 400,
          },
          ' & > div': {
            borderRadius: 1,
          },
          ...rest.sx,
        }}
        variant={variant}
        fullWidth={fullWidth}
        error={error}
        {...rest}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </Box>
  )
}

export default TextField
