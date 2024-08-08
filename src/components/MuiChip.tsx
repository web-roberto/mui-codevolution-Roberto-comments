import { Stack, Chip, Avatar } from '@mui/material'
import { useState } from 'react'

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
  const handleDelete = (chipToDelete: string) => {
    setChips(chips => chips.filter(chip => chip !== chipToDelete))
  }
  return (
    <Stack direction='row' spacing={1}>
      <h2>Video 31 CHIP </h2>
      <h5>*** opciones onClick y onDelete*****</h5>
    {/* <Chip
        label='Delete'
        color='error'
        avatar={<Avatar>V</Avatar>}  -> puedo usar un Avatar
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete')}
      /> 
         Pinta todos los chips que no han sido borrados:
        {chips.map(chip => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
      
      */}



      <Chip label='Chip' color='primary' size='small' />
      <Chip
        label='Chip Outlined'
        variant='outlined'
        color='secondary'
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
      <Chip
        label='Delete'
        color='error'
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete')}
      />
      {chips.map(chip => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  )
}
