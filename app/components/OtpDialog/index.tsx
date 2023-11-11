'use client'
import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@/app/shared/components'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
interface IOtpDialogProps {
  onSubmit: () => Promise<void>
  onClose: () => void
  open?: boolean
  disabled?: boolean
  onVerifyOtp: (val: string) => void
}

const OtpDialog = ({
  onSubmit,
  disabled = false,
  open = false,
  onClose,
  onVerifyOtp,
}: IOtpDialogProps) => {
  const [otp, setOtp] = useState({
    val: '',
    error: false,
  })

  const onOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp({
      error: !e.target.value,
      val: e.target.value,
    })
  }

  const handleVerify = () => {
    if (!otp.val) {
      setOtp((prev) => ({
        ...prev,
        error: true,
      }))
    } else {
      onVerifyOtp(otp.val)
    }
  }

  const handleClose = () => {
    setOtp({ val: '', error: false })
    onClose()
  }

  const handleCloseDialog = (
    _: {},
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (reason === 'escapeKeyDown') {
      handleClose()
    }
  }

  return (
    <>
      <Button
        disabled={disabled}
        onClick={onSubmit}
        color='info'
        variant='contained'
      >
        Đổi quà
      </Button>
      <Dialog maxWidth='lg' open={open} onClose={handleCloseDialog}>
        <DialogTitle>Nhập mã OTP</DialogTitle>
        <DialogContent>
          <TextField
            onChange={onOtpChange}
            fullWidth={false}
            width={300}
            label='OTP'
            error={otp.error}
            helperText={otp.error ? 'Vui lòng nhập OTP' : ''}
          />
        </DialogContent>
        <DialogActions
          sx={(theme) => ({
            padding: theme.spacing(1, 3, 3),
          })}
        >
          <Button onClick={handleClose}>Hủy bỏ</Button>
          <Button onClick={handleVerify}>Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OtpDialog
