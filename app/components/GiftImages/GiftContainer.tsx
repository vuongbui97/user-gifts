'use client'
import React from 'react'
import { Box, IconButton } from '@mui/material'
import Image from 'next/image'
import { Text } from '@/app/shared/components'
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined'
import { GiftData } from '.'

interface IGiftContainerProps {
  data: GiftData
  onClick: (d: GiftData) => void
}

const GiftContainer = ({ data, onClick }: IGiftContainerProps) => {
  return (
    <Box display='flex' alignItems='center' flexDirection='column' gap={1}>
      <Image src={data.url} alt={data.name} width={150} height={100} />
      <Text>{data.name}</Text>
      <IconButton aria-label='' onClick={() => onClick(data)}>
        <AddBoxOutlined />
      </IconButton>
    </Box>
  )
}

export default GiftContainer
