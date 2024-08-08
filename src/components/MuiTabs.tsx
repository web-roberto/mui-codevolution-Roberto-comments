import { Box, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const MuiTabs = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <>
    <h2>Video 42 TABS ************** </h2>
    <h5>*** EL TabPanel se visualiza al seleccionar el Tab con ese numero *****</h5>
    <h5>*** este de MUI son muy bonitos *****</h5>
    {/* <Box>
      <TabContext >
        <Box>
          <TabList>
             <Tab icon={<FavoriteIcon />} label='Tab One'  value='1'/>
             <Tab label='Tab Two' value='2' disabled />
             <Tab label='Tab Three' value='3' />
          </TabList>
        </Box>
        EL TABPANEL SE MUESTRA AL SELECCIONA EL TAB CON ESE NÚMERO
        <TabPanel value='1'> Aquí puedo meter un Box o un Paper o todo lo que me de la gana </TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box> */}

    <Box sx={{ width: '300px' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='Tabs example'
            textColor='secondary'
            indicatorColor='secondary'
            centered
            variant='scrollable'
            scrollButtons='auto'>
            <Tab
              icon={<FavoriteIcon />}
              iconPosition='start'
              label='Tab One'
              value='1'
            />
            <Tab label='Tab Two' value='2' disabled />
            <Tab label='Tab Three' value='3' />
            <Tab label='Tab Four' value='4' />
            <Tab label='Tab Five' value='5' />
            <Tab label='Tab Six' value='6' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Typography variant='h5'>ES UNA LINEA</Typography>
          Item One
          Aquí puedo meter un Box o un Paper o todo lo que me de la gana
      
        </TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
        <TabPanel value='4'>Item Four</TabPanel>
        <TabPanel value='5'>Item Five</TabPanel>
        <TabPanel value='6'>Item Six</TabPanel>
      </TabContext>
    </Box>
    </>
  )
}
