import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
  billCode: string,
  createdAt: Date,
  temCounts: number,
  shopName: string
) {
  return { billCode, temCounts, createdAt, shopName }
}

const rows = [
  createData('TX123', new Date(), 10, 'Shop A'),
  createData('TX111', new Date(), 20, 'Shop B'),
  createData('TX100', new Date(), 30, 'Shop A'),
  createData('TX122', new Date(), 40, 'Shop C'),
  createData('TX101', new Date(), 50, 'Shop A'),
]

export default function TransactionTemHistories() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Ngày giao dịch</TableCell>
            <TableCell align='left'>Mã bill</TableCell>
            <TableCell align='right'>Số lượng tem</TableCell>
            <TableCell align='left'>Cửa hàng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={`${row.billCode}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                {row.createdAt.toLocaleString()}
              </TableCell>
              <TableCell align='left'>{row.billCode}</TableCell>
              <TableCell align='right'>{row.temCounts}</TableCell>
              <TableCell align='left'>{row.shopName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
