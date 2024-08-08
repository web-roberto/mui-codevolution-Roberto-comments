import { createTheme, ThemeProvider, colors, Paper } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, LoadingButton } from '@mui/lab';
import './App.css'
import { MuiTable } from './components/MuiTable'
import { MuiCustomTheme } from './components/MuiCustomTheme'

import { MuiTypography } from './components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiTextField } from './components/MuiTextField'
import { MuiSelect } from './components/MuiSelect'
import { MuiRadioButton } from './components/MuiRadioButton'
import { MuiCheckbox } from './components/MuiCheckbox'
import { MuiSwitch } from './components/MuiSwitch'
import { MuiRating } from './components/MuiRating'
import { MuiAutocomplete } from './components/MuiAutocomplete'
import { MuiLayout } from './components/MuiLayout'
import { MuiCard } from './components/MuiCard'
import { MuiAccordion } from './components/MuiAccordion'
import { MuiImageList } from './components/MuiImageList'
import { MuiNavbar } from './components/MuiNavbar'
import { MuiLink } from './components/MuiLink'
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs'
import { MuiDrawer } from './components/MuiDrawer'
import { MuiTabs } from './components/MuiTabs'
import { MuiSpeedDial } from './components/MuiSpeedDial'
import { MuiBottomNavigation } from './components/MuiBottomNavigation'
import { MuiAvatar } from './components/MuiAvatar'
import { MuiBadge } from './components/MuiBadge'
import { MuiList } from './components/MuiList'
import { MuiChip } from './components/MuiChip'
import { MuiTooltip } from './components/MuiTooltip'
import { MuiAlert } from './components/MuiAlert'
import { MuiSnackbar } from './components/MuiSnackbar'
import { MuiDialog } from './components/MuiDialog'
import { MuiSkeleton } from './components/MuiSkeleton'
import { MuiProgress } from './components/MuiProgress'
import { MuiLoadingButton } from './components/MuiLoadingButton'
import { MuiDateTimePicker } from './components/MuiDateTimePicker'
import { MuiDateRangePicker } from './components/MuiDateRangePicker'
import { MuiTimeline } from './components/MuiTimeline'
import { MuiMasonry } from './components/MuiMasonry'
import ClippedDrawer from './components/MuiPermanentDrawer'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          {/* <MuiTypography /> */}
          {/* video ************ 4,5,6: */}
          {/* <MuiButton /> */}
          {/* video ************ 7: */}
          {/* <MuiTextField /> */}
          {/* video ************ 8: */}
          {/* <MuiSelect /> */}
          {/* video ************ 9: */}
          {/* <MuiRadioButton /> */}
          {/* video ************ 10: */}
          {/* <MuiCheckbox /> */}
          {/* video ************ 11: */}
          {/* <MuiSwitch /> */}
          {/* video ************ 12: */}
          {/* <MuiRating /> */}
          {/* video ************ 13: */}
          {/* <MuiAutocomplete /> */}
           {/* video ************ 14, 15 ,16 y 17: */}
           {/* <MuiLayout />  */}
          {/* video 19 ************ : */}
          {/* <MuiCard /> */}
          {/* video 20 ************ : */}
          {/* <MuiAccordion /> */}
          {/* video 21 ************ : */}          
          {/* <MuiImageList /> */}
          {/* video 22 ************ : */}          
          {/* <MuiNavbar /> */}
          {/* video 23 ************ : */}          
          {/* <MuiLink /> */}
          {/* video 24 ************ : */}          
          {/* <MuiBreadcrumbs /> */}
          {/* video 25 ************ : */}
          {/* <MuiDrawer /> */}
          {/* video ***** no hay **** https://mui.com/material-ui/react-drawer/#permanent-drawer *** : */}
          {/* <ClippedDrawer /> */}
            {/* video 26 ************ : */}          
            {/* <MuiSpeedDial /> */}
          {/* video 27 ************ : */}          
          {/* <MuiBottomNavigation /> */}
          {/* video 28 ************ : */}          
          {/* <MuiAvatar /> */}
          {/* video29 ************ : */}            
          {/* <MuiBadge /> */}
          {/* video 30 ************ : */}          
          {/* <MuiList /> */}
          {/* video 31************ : */}          
          {/* <MuiChip /> */}
          {/* video 32 ************ : */}          
          {/* <MuiTooltip /> */}
          {/* video 33************ : */}          
          {/* <MuiTable /> */}
          {/* video 34************ : */}          
          {/* <MuiAlert /> */}
          {/* video 35 ************ : */}          
          {/* <MuiSnackbar /> */}
          {/* video 36 ************ : */}          
          {/* <MuiDialog /> */}
           {/* video 37 ************ : */}
          {/* <MuiProgress /> */}
          {/* video 38 ************ : */}          
          {/* <MuiSkeleton /> */}
          {/* video 39************ : */}          
          {/* <MuiLoadingButton /> */}
          {/* video 40 ************ : */}          
          {/* <MuiDateTimePicker /> */}
          {/* video 42************ : */}          
          {/* <MuiDateRangePicker /> */}
          {/* video 42 ************ : */}          
          <MuiTabs />
      
          {/* video ************ : */}          
          {/* <MuiMasonry /> */}
          {/* video ************ : */}          
          {/* <MuiTimeline /> */}

          
          {/* video ***** no hay **** https://mui.com/material-ui/react-floating-action-button/ *** : */}
           {/* FLOATING ACTION BUTTON */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-slider/ *** : */}
          {/* SLIDER  */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-transfer-list/ *** : */}
          {/* TRANSFER LIST */}

          {/* video ***** no hay ****https://mui.com/material-ui/material-icons/ *** : */}
          {/* MATERIAL ICONS - LISTA DE ICONOS */}

          {/* video ***** no hay **** https://mui.com/material-ui/icons/ *** : */}
          {/* ICONS - COMO USAR LOS ICONOS */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-backdrop/ *** : */}
          {/* BACKDROP */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-paper/ *** : */}
          {/* PAPER */}

          {/* video ***** no hay ****  https://mui.com/material-ui/react-pagination/ *** : */}
          {/* PAGINATION */}

          {/* video ***** no hay ****  https://mui.com/material-ui/react-stepper/ *** : */}
          {/* STEPPER */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-container/ *** : */}
          {/* CONTAINER */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-grid2/ *** : */}
          {/* GRID V2 */}

          {/* video ***** no hay ****  https://mui.com/material-ui/migration/v5-component-changes/#hidden *** : */}
          {/* HIDDEN - DEPRECATED */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-click-away-listener/ *** : */}
          {/* CLICK-AWAY LISTENER */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-css-baseline/ *** : */}
          {/* CSS CssBaseline */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-modal/ *** : */}
          {/* MODAL */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-no-ssr/ *** : */}
          {/* No SSR */}

          {/* video ***** no hay ****https://mui.com/material-ui/react-popover/  *** : */}
          {/* POPOVER */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-popper/ *** : */}
          {/* POPPER */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-portal/ *** : */}
          {/* PORTAL */}

          {/* video ***** no hay ****  https://mui.com/material-ui/react-textarea-autosize/*** : */}
          {/* TEXTAREA AUTOSIZE */}

          {/* video ***** no hay **** https://mui.com/material-ui/transitions/ *** : */}
          {/* TRANSITIONS */}

          {/* video ***** no hay **** https://mui.com/material-ui/react-use-media-query/ *** : */}
          {/* USEMEDIAQUERY */}

          {/* video ***** no hay **** https://mui.com/x/react-data-grid/ *** : */}
          {/* DATA GRID */}

          {/* video ***** no hay ****  https://mui.com/x/react-date-pickers/getting-started/ *** : */}
          {/* PUENTE A OTROS DATEPICKERS */}

          {/* video ***** no hay **** https://mui.com/material-ui/about-the-lab/ *** : */}
          {/* ABOUT THE LAB   */}


          <MuiCustomTheme />



        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
