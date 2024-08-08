import { Box, Stack, Grid, Paper,Divider } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={2}>
      <h2>VIDEO 17  ********** PAPER -Layout para un CARD , substituye al React.Fragment en mi componente ************</h2>
      <h5>****** pogo en App.css body un backgroun color gris #eeeeee para que realte el PAPER *** ************</h5>
      <h5>********* cambio la elevation (1 por defecto)*************</h5>
      <h5>********* PAPER se usa para secciones del la UI o jerarquía visual *************</h5>
      <b />
      <h2>--------------------------------------------------------------------------------------</h2>
      <b />
    <h2>VIDEO 14  ********** BOX - substitutye a div *******************************</h2>
    <h5>********* es el LAYOUT que más se usas por las sx *************</h5>
    <h5>********* sx se usan en Box ppalmente = ...csss... y styled component hacen el 100% y al theme ('primary.main') *************</h5>
    <h5>*********las sx= ...csss... tambien acepta abreviaturas 'bgcolor','p' es padding *************</h5>
   <h5>********* Box component='span'/section/article/... - no es div, sino span *************</h5>
  <h5> sx: todas las propiedades - https://mui.com/system/getting-started/the-sx-prop/</h5>
      <b />
      <h2>--------------------------------------------------------------------------------------</h2>
      <b />
    <h2>VIDEO 15  ********** STACK -Layout de elementos en 1 dimension:vertical u horizontal(defecto) *******************************</h2>
    <h5>********* se usa en lugar de React.Fragment, es com un FLEX *************</h5>
    <h5>********* el spacing se multiplica por 8 pixels - es el espacio entre items *************</h5>
    <h5>********* divider={<Divider orientation='vertical' flexItem/>} *************</h5>

    
      <Stack border='1px solid' spacing={2} direction='row' 
      divider={<Divider orientation='vertical' flexItem/>}
      >
      
        <Box
          component='span'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light'
            }
          }}>
          Codevolution
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}></Box>
      </Stack>

      <h2>--------------------------------------------------------------------------------------</h2>
    <h2>VIDEO 16  ********** GRID -Layout de elementos en 2 dimension. GRID CONTAINER:padre y GRID ITEM:hijos *******************************</h2>
    <h5>********* GRID usa flexbox de 12 columnas xs:mobile,sm:tablet,md:desktop, lg y xl para monitores grandes  *************</h5>
    <h5>*** nº a 'Grid item' en un breakpoint indica cuantas columnas usa en ese item en ese tamaño (o brekpoint) </h5>
    <h5>*** xs={6} en tamaño xs y superiores ocupa 6 columnas de las 12</h5>
    <h5>*** xs={12} y sm={6} en tamaño sm(tablet) y superiores ocupa 6 columnas de las 12, y en xs(movil) ocupa las 12</h5>
    <h5>*** xs sin valor, reparte las 12 entre los 'Grid item' con xs</h5>
    <h5>*** xs sin valor, poro un 'Grid item' es xs={6}- ese item ocupa 6 y el resto se reparte entre los xs </h5>
    <h5>*** xs='auto' - sólo el tamaño que ocupa el texto de dentro</h5>
    <h5>*** en 'Grid container' spacing={2} -16 pixeles de gap de filas y columnas </h5>
    <h5>*** en 'Grid container' rowSpacing={2} y columnSpacing={1}</h5>

      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
