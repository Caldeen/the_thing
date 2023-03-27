import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { AppProps } from "next/app"


const Layout= ({ children }:any) => {
    return (
        <>
            <Box >
            <AppBar component='nav' position='static'>
            <Toolbar>
                <Button href='/'  color = 'inherit' >Home</Button>
                <Button href='/login' color='inherit'>Login</Button>
                <div style={{flexGrow:3}}></div>
                <Button href='/armory' color='inherit'>Armory</Button>
            </Toolbar>
            </AppBar>
        </Box>
        <main>{children}</main>
        </>
    )
    }

export default Layout