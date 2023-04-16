import { Box, Container, Drawer, Grid, Link, List, ListItem, MenuItem, MenuList, Paper, Toolbar, Typography } from "@mui/material"
import LeftDrawer from "../../components/docs/leftDrawer"
import RightDrawer from "../../components/docs/rightDrawer"

const Docs = () => {
    return (
        <Box display={'flex'} >
            <LeftDrawer ></LeftDrawer>
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Typography id='Overview' variant='h4'>Overview</Typography>
                <Typography variant='body1' sx={{ overflowWrap:'anywhere' }} >These docs pages serve as a skeleton of
                    what actual docs pages could look like.
                    It is also a very simple documentation of a real API existing at
                    <i> https://springbootbackend.fly.dev</i>.</Typography>
            </Box>
            <RightDrawer subjects={['Overview']}></RightDrawer>
        </Box>

    )
}

export default Docs