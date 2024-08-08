import { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]) //["US","AU","IN"]
//  const [country, setCountry] = useState<string>("") //"US"

  console.log(countries)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value //devuelve un string "US,AU,IN"
    console.log('value---',value)

    setCountries(typeof value === 'string' ? value.split(',') : value) //selección múltiple
  //  setCountry(value as string) //si es seleccion no múltiple

  }
  return (
    <Box width='250px'>
      <h2>VIDEO 8  ********** SELECT ********************************</h2>
      <h5>VIDEO 8  ********** TextField de tipo select ***</h5>
       {/* ESTRUCTURA GLOBAL
         <TextField                              -> select con múltiples selecciones
           label='Select country'
           select
           SelectProps={{
              multiple: true
           }}
           <MenuItem value='IN'>India</MenuItem>  -> una option
           <MenuItem value='IN'>India</MenuItem>  -> una option
         </TextField> */}

      <TextField
        label='Select country'
        select
        SelectProps={{
          multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        value={countries}
        onChange={handleChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
