'use client'
import { useState } from 'react'
import { Button, TextField } from '@/app/shared/components'
import { Grid } from '@mui/material'
import { useFormik } from 'formik'
import { ChangeEvent } from 'react'
import * as yup from 'yup'
import OtpDialogButton from '../OtpDialog'

export interface FormValues {
  phoneNumber?: string
  temCount?: string
  address?: string
}

interface OtpVerifyValues extends FormValues {
  otp: string
}

const verifyOtp = async (vals: OtpVerifyValues) => {
  return await Promise.resolve({
    data: vals,
  })
}

const regex = /^[0-9\b]+$/

const validationSchema = yup.object<FormValues>({
  phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
  temCount: yup.string().required('Vui lòng nhập số lượng tem'),
  address: yup.string().required('Vui lòng nhập địa chỉ'),
})

const UserForm = () => {
  const [open, setOpen] = useState(false)

  const {
    handleBlur,
    handleChange,
    validateForm,
    submitForm,
    touched,
    errors,
    values,
    setFieldValue,
  } = useFormik<FormValues>({
    initialValues: {
      address: '',
      phoneNumber: '',
      temCount: '',
    },
    validationSchema,
    onSubmit: (vals) => console.log('values', vals),
  })

  const onChangeTemCount = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e?.target.value === '' || regex.test(e?.target.value || '')) {
      setFieldValue('temCount', e?.target.value)
    }
  }

  const onChangePhoneNumber = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e?.target.value === '' || regex.test(e?.target.value || '')) {
      setFieldValue('phoneNumber', e?.target.value)
    }
  }

  const onSubmit = async () => {
    await validateForm()
      .then((res) => {
        submitForm()
        if (!res?.address && !res?.phoneNumber && !res?.temCount) {
          setOpen(true)
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  const onVerifyOtp = async (otp: string) => {
    await verifyOtp({ ...values, otp })
  }

  return (
    <Grid container flexDirection='column' spacing={2}>
      <Grid item>
        <TextField
          fullWidth
          value={values.phoneNumber}
          label='Số điện thoại'
          onBlur={handleBlur}
          onChange={onChangePhoneNumber}
          name='phoneNumber'
          error={!!errors.phoneNumber && touched.phoneNumber}
          helperText={
            !!errors.phoneNumber && touched.phoneNumber
              ? errors.phoneNumber
              : ''
          }
        />
      </Grid>
      <Grid item>
        <TextField
          onChange={onChangeTemCount}
          fullWidth
          label='Số tem chưa đổi'
          value={values.temCount}
          onBlur={handleBlur}
          name='temCount'
          error={!!errors.temCount && touched.temCount}
          helperText={
            !!errors.temCount && touched.temCount ? errors.temCount : ''
          }
        />
      </Grid>
      <Grid item>
        <TextField
          onBlur={handleBlur}
          onChange={handleChange}
          name='address'
          error={!!errors.address && touched.address}
          helperText={!!errors.address && touched.address ? errors.address : ''}
          fullWidth
          label='Địa chỉ nhận quà'
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container gap={1} justifyContent='center'>
          <OtpDialogButton
            open={open}
            onSubmit={onSubmit}
            onClose={() => setOpen(false)}
            onVerifyOtp={onVerifyOtp}
          />
          <Button color='secondary' variant='contained'>
            Đổi lại quà tặng
          </Button>
          <Button color='success' variant='contained'>
            Trạng thái đơn hàng
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UserForm
