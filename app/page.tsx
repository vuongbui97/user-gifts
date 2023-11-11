import {
  TransactionHistories,
  GiftImages,
  UserForm,
  TransactionTemHistories,
} from './components'
import styles from './page.module.css'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <UserForm />
      </Box>
      <Box>
        <GiftImages />
      </Box>
      <Box>
        <TransactionHistories />
      </Box>
      <Box>
        <TransactionTemHistories />
      </Box>
    </main>
  )
}
