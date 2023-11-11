'use client'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface ILinkProps extends Omit<MuiLinkProps, 'href'>, NextLinkProps {}

const Link = ({ children, ...rest }: ILinkProps) => {
  return (
    <MuiLink underline='none' component={NextLink} {...rest}>
      {children}
    </MuiLink>
  )
}

export default Link
