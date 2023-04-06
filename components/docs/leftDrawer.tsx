import { ListItemButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Toolbar from "@mui/material/Toolbar"

const LeftDrawer = () => {
    const drawerWidth = 120
    return (
        <>

                    <Drawer variant='permanent' sx={{width: drawerWidth,color:(t)=>t.palette.text.disabled,
                    flexShrink:0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }}} >
                        <Toolbar />
                            <MenuList >
                                <ListItemButton href="/docs" >Overview</ListItemButton>
                                <ListItemButton href="/docs/account">Account </ListItemButton>
                                <ListItemButton>Endpoints</ListItemButton>
                                <ListItemButton>Errors</ListItemButton>
                        </MenuList>
                    </Drawer>
        </>
    )
}

export default LeftDrawer