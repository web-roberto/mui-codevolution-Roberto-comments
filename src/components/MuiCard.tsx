import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia
} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
       <h2>VIDEO 18  ********** CARD ********************************</h2>
      <h5>******* IMAGEN ALEATORIA - image='https://source.unsplash.com/random' *******</h5>
       {/* ESTRUCTURA GLOBAL
         <Box>                            
          <Card>
            <CardMedia />
             <CardContent> 
                <Typography> titulo </Typography>
                <Typography> descripcion </Typography>
             </CardContent>
             <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
             </CardActions>
          </Card> 
         </Box> */}
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
