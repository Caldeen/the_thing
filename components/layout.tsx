import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useEffect, useState, type MouseEvent } from 'react'
import Account from './account'
import Footer from './footer'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'

const Layout = ({ children }: any) => {
  const [loggedUser, setLoggedUser] = useState('')
  const [open, setOpen] = useState(false)
  const [otherAnchorEl, setOtherAnchorEl] = useState<null | HTMLElement>(null)

  useEffect(() => {
    setLoggedUser(localStorage.getItem('name') as string)
  }, [])

  const handleLogoutClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setLoggedUser('')
  }

  const handleOtherOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(false)
    setOtherAnchorEl(event.currentTarget)
  }

  const handleOtherClose = () => {
    setOtherAnchorEl(null)
  }

  return (
    <>
      <Box display="flex">
        <AppBar component="nav" position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
          <Toolbar sx={{ display: 'flex' }}>
            <Button href="/" color="inherit">
              Home
            </Button>
            <Account user={loggedUser} handleLogoutClick={handleLogoutClick}></Account>
            <div style={{ flex: 2 }}></div>
            <Box component="div" sx={{ display: ['none', 'none', 'flex', 'flex', 'flex', 'flex'] }}>
              <Button href="/projects" color="inherit">
                Projects
              </Button>
              <Divider orientation="vertical" flexItem sx={{ margin: 2, mt: 0, mb: 0 }} />
              <Button href="/docs" color="inherit">
                API Docs
              </Button>
              <Divider orientation="vertical" flexItem sx={{ margin: 2, mt: 0, mb: 0 }} />
              <Button color="inherit" onClick={handleOtherOpen}>
                Other
              </Button>
              <Divider orientation="vertical" flexItem sx={{ margin: 2, mt: 0, mb: 0 }} />
              <Button href="/quotes" color="inherit">
                Quotes
              </Button>
            </Box>
            <Box component="div" sx={{ display: ['flex', 'flex', 'none', 'none', 'none', 'none'] }}>
              <IconButton onClick={() => setOpen(!open)}>
                <FormatListBulletedOutlinedIcon fontSize="medium" />
              </IconButton>
              <List sx={{ display: open ? 'flex' : 'none', flexDirection: 'column', position: 'absolute', top: 50, right: 0, zIndex: 1000 }}>
                <Box component="div">
                  <ListItemButton href="/projects">Projects</ListItemButton>
                  <ListItemButton href="/docs">API Docs</ListItemButton>
                  <ListItemButton onClick={handleOtherOpen}>Other</ListItemButton>
                  <ListItemButton href="/quotes">Quotes</ListItemButton>
                </Box>
              </List>
            </Box>
            <Menu anchorEl={otherAnchorEl} open={Boolean(otherAnchorEl)} onClose={handleOtherClose}>
              <MenuItem component="a" href="/armory" onClick={handleOtherClose}>
                Diablo 4 Aspects
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Toolbar sx={{ mb: 2 }} />
      </Box>
      <main>{children}</main>
      <Box flex={2} />
      <Footer></Footer>
    </>
  )
}

export default Layout
