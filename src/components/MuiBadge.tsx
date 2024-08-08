import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row' marginTop={4}>
      <h2>VIDEO 29- BADGE(insignia) arriba a la derecha</h2>
      <h5>variant='dot' - un punto y no un múmero, invisible=true</h5>
      <h5>** puedo poner un icono en lugar de un nº arriba</h5>
      <h5>... cuando el badgeContent={0} no lo muestro. Si lo quiero mostrar: showZero </h5>

      {/* <Badge badgeContent={5} color='primary'>
          <MailIcon />   ---> el icono del Badge
        </Badge> */}
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='secondary' max={999}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={<MailIcon />} color='secondary' max={999}>
        <MailIcon />
      </Badge>
      <Badge color='secondary' variant='dot'>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
