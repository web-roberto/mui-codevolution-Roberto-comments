import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3)
  console.log(value)
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue)
  }
  return (
    <Stack spacing={2}>
      <h2>VIDEO 12  ********** RATING *******************************</h2>
          {/* // ESTRUCTURA GLOBAL
                <Rating   
                   precision={0.5} -> precisión
                   icon={<FavoriteIcon.../>}
                   emptyIcon={<FavoriteBorderIcon.... />}
                   readOnly
                 />  */}
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.10}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        //readOnly
      />
    </Stack>
  )
}
