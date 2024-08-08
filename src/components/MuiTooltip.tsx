import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

// VIDEO 32-TOOLTIP: consejo de herramiento (un verbo que indica la acción del Icono)
export const MuiTooltip = () => {
  return (
    <Tooltip
      title='Delete'
      placement='right'
      arrow
      enterDelay={500}
      leaveDelay={200}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}
