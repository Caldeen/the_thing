import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Account from "./account"
import { Divider } from "@mui/material"


const Layout= ({ children }:any) => {
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
            <Box>
            <AppBar component='nav' position='static'>
            <Toolbar sx={{display:'flex'}}>
                <Button href='/'  color = 'inherit' >Home</Button>
                <Account user={loggedUser} handleLogoutClick={handleLogoutClick}></Account>
                <div style={{flex:2}}></div>
                <Button color="inherit">DocsMaybeIdk</Button>
                <Divider orientation="vertical" flexItem sx={{margin:2}}></Divider>
                <Button href='/armory' color='inherit'>Diablo 4 Aspects</Button>
            </Toolbar>
            </AppBar>
        </Box>
        <main>{children}</main>
        </>
    )
    }


export default Layout