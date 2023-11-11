import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

const Text = ({
  children,
  variant = 'body1',
  color = 'black',
  ...rest
}: TypographyProps) => {
  return (
    <Typography variant={variant} color={color} {...rest}>
      {children}
    </Typography>
  );
};

export default Text;
