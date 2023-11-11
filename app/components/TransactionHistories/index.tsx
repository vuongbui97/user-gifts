import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
  id: number,
  createdAt: Date,
  temCountUsed: number,
  giftCountUsed: number,
  shopName: string
) {
  return { id, createdAt, temCountUsed, giftCountUsed, shopName }
}

const rows = [
  createData(1, new Date(), 10, 50, 'Shop A'),
  createData(2, new Date(), 20, 40, 'Shop B'),
  createData(3, new Date(), 30, 30, 'Shop A'),
  createData(4, new Date(), 40, 20, 'Shop C'),
  createData(5, new Date(), 50, 10, 'Shop A'),
]

export default function TransactionHistories() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Ngày giao dịch</TableCell>
            <TableCell align='right'>Sô lượng đã đổi</TableCell>
            <TableCell align='right'>Quà đã đổi</TableCell>
            <TableCell align='left'>Cửa hàng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={`${row.id}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left' component='th' scope='row'>
                {row.createdAt.toLocaleString()}
              </TableCell>
              <TableCell align='right'>{row.temCountUsed}</TableCell>
              <TableCell align='right'>{row.giftCountUsed}</TableCell>
              <TableCell align='left'>{row.shopName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
