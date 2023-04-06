import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Account from "./account"
import { BottomNavigation, CssBaseline, Divider } from "@mui/material"
import Footer from "./footer"
import { Palette } from "@mui/icons-material"


const Layout = ({ children }: any) => {
    const [loggedUser, setLoggedUser] = useState('')
    useEffect(() => {
        setLoggedUser(localStorage.getItem('name') as string)
    }, [])
    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        setLoggedUser('')
    }

    return (
        <>
            <Box display='flex'>
                <AppBar component='nav' position='fixed' sx={{zIndex:(t)=>t.zIndex.drawer+1}}>
                    <Toolbar sx={{ display: 'flex' }}>
                        <Button href='/' color='inherit' >Home</Button>
                        <Account user={loggedUser} handleLogoutClick={handleLogoutClick}></Account>
                        <div style={{ flex: 2 }}></div>
                        <Box component={'div'} sx={{display:['none','flex','flex','flex','flex','flex']}}>
                            <Button href="/projects" color="inherit">Projects</Button>
                            <Divider orientation="vertical" flexItem sx={{ margin: 2 }}></Divider>
                            <Button href="/docs" color="inherit">API Docs</Button>
                            <Divider orientation="vertical" flexItem sx={{ margin: 2 }}></Divider>
                            <Button href='/armory' color='inherit'>Diablo 4 Aspects</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            <Toolbar sx={{mb:2}}/>
            </Box>
            <main >{children}</main>
            <Box flex={2} />
            <Footer ></Footer>
        </>
    )
}


export default Layout