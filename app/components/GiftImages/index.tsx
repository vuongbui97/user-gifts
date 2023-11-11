'use client'
import { Grid } from '@mui/material'
import GiftContainer from './GiftContainer'

export type GiftData = {
  id: string
  name: string
  url: string
}

const fakeGiftData = () => {
  let data: GiftData[] = []
  for (let index = 0; index < 6; index++) {
    data.push({
      id: `${index + 1}`,
      name: `gift${index + 1}`,
      url: `/assets/images/gift${index + 1}.jpg`,
    })
  }

  return data
}

const GiftImages = () => {
  return (
    <Grid container flexWrap='wrap' alignItems='center' gap={1}>
      {fakeGiftData().map((g) => (
        <GiftContainer data={g} onClick={(d) => console.log(d)} />
      ))}
    </Grid>
  )
}

export default GiftImages
