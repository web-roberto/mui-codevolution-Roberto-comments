import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Box sx={{ width: '250px' }}>
      <h2> ********** VIDEO 38- SKELETON ***********</h2>
      <h5> imágenes random de unsplash CON EL TAMAÑO QUE YO ME INVENTE</h5>
      <h5>'https://source.unsplash.com/random/256x144'</h5>
      <h5> Al Skeleton le pongo el mismo tamaño que la imagen que muestro</h5>

      {loading ? (
        <Skeleton
          variant='rectangular'
          width={256}
          height={144}
          animation='wave'
        />
      ) : (
        <img
          src='https://source.unsplash.com/random/256x144'
          alt='skeleton'
          width={256}
          height={144}
        />
      )}

      <Stack
        direction='row'
        spacing={1}
        sx={{ width: '100%', marginTop: '12px' }}>
        {loading ? (
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            animation='wave'
          />
        ) : (
          <Avatar>V</Avatar>
        )}

        <Stack sx={{ width: '80%' }}>
          {loading ? (
            <>
              <Typography variant='body1'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='body1'>React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  )
}
