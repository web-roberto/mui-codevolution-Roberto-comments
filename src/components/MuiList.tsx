import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  ListItemAvatar,
  Avatar
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

export const MuiList = () => {
  return (
    <>
        <h2>******** VIDEO 30  LIST **************************</h2>
        <h5>****** un item de una lista puede ser un BUTTON oN</h5>
      {/* // <List>
      //   <ListItem disablePadding>
      //     <ListItemButton>
      //       <ListItemIcon>  <InboxIcon /> </ListItemIcon>
      //       <ListItemText primary='List item 1' />
      //     </ListItemButton>
      //   </ListItem>
      //   <Divider />
      //   <ListItem>
      //      <ListItemAvatar>
      //        <Avatar><InboxIcon /></Avatar>
      //      </ListItemAvatar>
      //   </ListItem> */}



    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='List item 1' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InboxIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>
        <ListItem>
          <ListItemText primary='List item 3' />
        </ListItem>
      </List>
    </Box>
    </>
  )
}
