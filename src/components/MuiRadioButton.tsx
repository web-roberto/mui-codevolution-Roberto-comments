import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from '@mui/material'

export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <h2>VIDEO 9  ********** RADIO BUTTON ********************************</h2>
       {/* ESTRUCTURA GLOBAL
       <FormControl>
           <FormLabel id=''>Mi etiqueta</FormLabel> -> etiqueta del Radio Grupo
           <RadioGroup>           --> agrupación de un grupo de radios 
              <FormControlLabel   --> una etiqueta y Radio buton
                 control={<Radio ...../>
              <FormControlLabel   --> una etiqueta y Radio buton
                 control={<Radio ...../>
           </RadioGroup>
        </FormControl> */}

      <FormControl>
        <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
        <RadioGroup
          row
          aria-labelledby='job-experience-group-label'
          name='job-experience-group'
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            labelPlacement='start'
            value='0-2'
            control={<Radio size='small' color='secondary' />}
            label='0-2 years'
          />
          <FormControlLabel
            labelPlacement='start'
            value='3-5'
            control={<Radio size='small' color='secondary' />}
            label='3-5 years'
          />
          <FormControlLabel
            labelPlacement='start'
            value='6-10'
            control={<Radio size='small' color='secondary' />}
            label='6-10 years'
          />
        </RadioGroup>
        <FormHelperText>Selección inválida</FormHelperText>
      </FormControl>
    </Box>
  )
}
