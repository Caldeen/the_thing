import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Account from "./account"


const Layout= ({ children }:any) => {
    const [loggedUser, setLoggedUser] = useState('')
    // probably wrong
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
            <Box>
            <AppBar component='nav' position='static'>
            <Toolbar sx={{display:'flex'}}>
                <Button href='/'  color = 'inherit' >Home</Button>
                <Account user={loggedUser}></Account>
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