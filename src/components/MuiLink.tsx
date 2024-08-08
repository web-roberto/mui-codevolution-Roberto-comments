import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction='row'>
       <h2>VIDEO 23 ********** LINK ********************************</h2>
       <h5>******* underline:'none'/'hover'************** *******</h5>
       <h5>******* meto un Link dentro de un Typography ************** *******</h5>
      <Typography variant='h6'>
        <Link href='#'>Link</Link>
      </Typography>
      <Link href='#' color='secondary' underline='hover'>
        Secondary
      </Link>
      <Link href='#' variant='body2' underline='none'>
        Body 2 link
      </Link>
    </Stack>
  )
}
