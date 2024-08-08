import { Stack, Avatar, AvatarGroup } from '@mui/material'
export const MuiAvatar = () => {

  return (
    <Stack spacing={4}>
  <h2> VIDEO 28- AVATAR- son redondos por defecto</h2>
  <h5> ***** USUARIOS ALETORIOS ** https://randomuser.me/api/portraits/women/79.jpg ******* </h5>
  <h5>variant='rounded'/'square'/</h5>
  <h5> Dos tipos de avatar: de texto y una imagen:</h5>
      {/* 
      <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      <Avatar
        src='https://randomuser.me/api/portraits/women/79.jpg'
        alt='Jane Doe'
      />  */}
        <h5> Puedo agrupar los Avatares:</h5>
      {/* <AvatarGroup max={5}> */}

      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      </Stack>
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={5}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
          <Avatar
            src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='John Doe'
          />
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar
          variant='rounded'
          sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  )
}
