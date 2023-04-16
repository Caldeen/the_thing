import { Box, IconButton, ListItemButton, SwipeableDrawer } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Toolbar from "@mui/material/Toolbar"
import ForwardIcon from '@mui/icons-material/Forward'
import { useState } from "react"

const LeftDrawer = () => {
    const [open, setOpen] = useState(false)
    const drawerWidth = 120
    const leftDrawerContent = () => {
        return (
            <>
                <MenuList >
                    <ListItemButton href="/docs" >Overview</ListItemButton>
                    <ListItemButton href="/docs/account">Account </ListItemButton>
                    <ListItemButton href="/docs/quotes">Quotes</ListItemButton>
                    <ListItemButton>Errors</ListItemButton>
                </MenuList>
            </>
        )
    }
    return (
        <>
            <Drawer open={!open} onClose={()=>setOpen(false)} onClick={()=>setOpen(true)}
            variant='permanent' anchor="left" sx={{width: 20,scrollbarWidth:'none',
                flexShrink:0,
                [`& .MuiDrawer-paper`]: { width: 20, boxSizing: 'content-box',justifyContent:'center' }}}>
                <Toolbar />
                <IconButton color="inherit"  onClick={()=>setOpen(!open)} sx={{justifySelf:'center'}}>
                    <ForwardIcon  fontSize="small" sx={{m:0,p:0}}/>
                </IconButton> 
            </Drawer>
            <Drawer open={open} onClose={()=>setOpen(false)} onClick={()=>setOpen(false)}
            variant='temporary' anchor="left" sx={{width: drawerWidth,
                flexShrink:0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }}}>
                <Toolbar />
                {leftDrawerContent()}
            </Drawer>

            <Drawer variant='permanent' sx={{
                width: drawerWidth, color: (t) => t.palette.text.disabled,
                flexShrink: 0, display: ['none', 'none', 'block', 'block', 'block', 'block'],
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
            }} >
                <Toolbar />
                {leftDrawerContent()}
            </Drawer>
            
        </>
    )
}

export default LeftDrawer