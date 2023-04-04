import { Box, Container, Drawer, Menu, MenuItem, MenuList, Toolbar, Typography } from "@mui/material"

const Docs = () => {

    return (
        <Box id='test' sx={{ display: 'flex',justifyItems:'start' }}>
            <Box flex={1}>
                <Drawer variant='permanent' >
                    <Toolbar/>
                    <MenuList>
                        <MenuItem>Overview</MenuItem>
                        <MenuItem>Authentication</MenuItem>
                        <MenuItem>Endpoints</MenuItem>
                        <MenuItem>Errors</MenuItem>
                    </MenuList>
                </Drawer>
            </Box>
            <Container sx={{flex:4}}>
                <Typography variant='h3'>API Docs</Typography>
            </Container>
        </Box>
    )
}

export default Docs