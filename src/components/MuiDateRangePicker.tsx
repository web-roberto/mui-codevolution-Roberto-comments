import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/lab'
import { useState } from 'react'

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null])
  console.log('value', value)
  return (
    <Box width='500px'>
        <h2>Video 41 DATE RANGE PICKER de MUI no de react-datepicker </h2>
      <h5>*** en react-datepicker hay muchas  mas variantes *****</h5>
      <h5>*** este de MUI son muy bonitos *****</h5>
      <DateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  )
}
