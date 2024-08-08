import { Snackbar, Button, Alert, AlertProps } from '@mui/material'
import { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />
  }
)

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return //no hago nada
    }
    setOpen(false)
  }
  return (
    <>
      <h2> VIDEO 35- SNACKBAR (notificación con TOAST)*******</h2>
      <h5> ********** se autoesconden en un tiempo sin intervención del usuario ************** </h5>
      <h5> ************* usa un forwardRef de React. ************** </h5>

      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message='Form submitted successfully!'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}
