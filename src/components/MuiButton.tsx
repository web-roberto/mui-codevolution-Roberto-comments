import { useState } from 'react'
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]) //no exclusive 
//  const [formats, setFormats] = useState<string ||null>(null) //exclusive 
  console.log(formats)

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>, //we don't need the _event
    //updatedFormats: string //if exclusive :'italic' or 'underlined' or 'bold'
    updatedFormats: string[] //without exclusive ['italic', 'underlined', 'bold']
  ) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      <h2>VIDEO 4  **************** BUTTONS **************************</h2>
      <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked')}>
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton color='success' size='small' aria-label='send'>
          <SendIcon />
        </IconButton>
      </Stack>
      <h2>VIDEO 5  ********** BUTTON GROUP ********************************</h2>
      <h5>VIDEO 5  ********** la función individual a nivel de Button*******</h5>
      <Stack direction='row'>
        <ButtonGroup
          variant='contained' // contained / outlined
          orientation='vertical' //horizontal
          size='small' //small / medium /large
          color='secondary' //definido en el theme de App.js
          aria-label='alignment button group'>
          <Button onClick={() => alert('Left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <h2>VIDEO 6  ********** TOGGLE BUTTON ********************************</h2>
      <p>VIDEO 6  ********** la función colectiva a nivel de ToogleButtonGroup*******</p>
      <p>VIDEO 6  ********** no permite variant *******</p>
      <Stack direction='row'>
        <ToggleButtonGroup
          orientation='vertical' //horizontal
          size='small' //small / medium /large
          color='primary' //definido en el theme de App.js
          exclusive
          value={formats}
          onChange={handleFormatChange}  //la función a nivel de ToogleButtonGroup
          aria-label='text formatting'>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
