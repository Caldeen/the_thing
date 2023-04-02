import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { AppProps } from "next/app"
import { useEffect, useLayoutEffect, useState } from "react"


const Layout= ({ children }:any) => {
    const [loggedUser, setLoggedUser] = useState('')
    // probably wrong
    useLayoutEffect(() => {
        setLoggedUser(localStorage.getItem('name') as string)
    }, [])
    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        setLoggedUser('')
    }

    return (
        <>
            <Box>
            <AppBar component='nav' position='static'>
            <Toolbar sx={{display:'flex'}}>
                <Button href='/'  color = 'inherit' >Home</Button>
                {loggedUser? <>
                    <Typography>hi {loggedUser}</Typography>
                    <Button onClick={handleLogoutClick} color="inherit">Logout</Button>
                </>
                :<Button href='/login' color='inherit'>Login</Button>}
                <div style={{flex:1}}></div>
                <Button href='/armory' color='inherit'>Diablo 4 Aspects</Button>
            </Toolbar>
            </AppBar>
        </Box>
        <main>{children}</main>
        </>
    )
    }

export default Layout