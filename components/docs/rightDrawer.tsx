import { Link, List, ListItem, Toolbar } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"


const RightDrawer = ({subjects}:{subjects:string[]}) => {
    const drawerWidth = 130
    return (
        <>
                <Drawer variant='permanent' anchor="right" sx={{width: drawerWidth,
                    flexShrink:0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }}}>
                    <Toolbar />
                    <List >
                        <ListItem>Found here:</ListItem>
                        {subjects.map((sub) => (
                            <ListItem key={sub}>
                            <Link ml={1} underline="hover" color='inherit' href={"#"+sub}><span>- {sub}</span></Link>
                            </ListItem >
                        ))}
                    </List>
                </Drawer>
        </>
    )
                 
}
export default RightDrawer