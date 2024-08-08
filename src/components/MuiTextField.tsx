import { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

export const MuiTextField = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Stack spacing={4}>
      <h2>VIDEO 7  ********** TEXTFIELD ********************************</h2>
      <Stack spacing={2} direction='row'>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField
          label='Form Input'
          required //usa un *
          helperText={ //texto debajo del input  error o información al usuario
            !value ? 'Required' : 'Do not share your password with anyone'
          }
          type='password'
          error={!value}
          value={value}
          onChange={handleChange}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}
