//react imports
import { useState } from 'react'

//router
import { Link, Outlet, } from 'react-router-dom'

//components
import { ToDoList } from '../ToDoList'

//mui components
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'

//material icons
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'

const drawerWidth = 240

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <ToDoList />
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'}>
            <Typography variant='h6' noWrap component='div'>
              Sara AI
            </Typography>
          </Link>
          <IconButton
            color='inherit'
            aria-label='login'
            edge='start'
            onClick={null}
            sx={{ marginLeft: 'auto' }}
          >
            <Link to='/login'>
              <AccountCircleIcon />
            </Link>
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='version'
            edge='start'
            onClick={null}
            sx={{ marginLeft: 'auto' }}
          >
            <Link to='/version'>
              <TextSnippetIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
export { ResponsiveDrawer }
