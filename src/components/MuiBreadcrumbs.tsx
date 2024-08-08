import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <h2>VIDEO 24 ********** BREADSCRUMBS  ********************************</h2>
       <h5>******* es un menú secundario que visualiza la ruta hasta la pagina actual *********************</h5>
       <h5>******* puedo decir que muestre sólo 3 elementos y el resto en un 'ellipse' (dos antes, dos despues...) *******</h5>
       {/* 
       <Breadcrumbs >
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catalog</Link>
        <Link underline='hover' href='#'>Accessories</Link>
        <Link underline='hover' href='#'>New Collection</Link>
        <Typography color='text.primary'>Shoes</Typography>  --> es la página actual y no necesita link
      </Breadcrumbs> */}

      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        maxItems={3}
        itemsAfterCollapse={2}
        aria-label='breadcrumb'>
        <Link underline='hover' href='#'>
          Home
        </Link>
        <Link underline='hover' href='#'>
          Catalog
        </Link>
        <Link underline='hover' href='#'>
          Accessories
        </Link>
        <Link underline='hover' href='#'>
          New Collection
        </Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}
