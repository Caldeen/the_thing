import { Box, Container, Drawer, Grid, Link, List, ListItem, MenuItem, MenuList, Paper, Toolbar, Typography } from "@mui/material"

const Docs = () => {
    return (
                <Grid container justifyContent={'space-around'}>
                <Grid item xs minWidth={'150px'}>
                    <Drawer variant='permanent' color="primary" >
                        <Toolbar />
                        <Paper sx={{ height: "100%" }}>
                            <MenuList >
                                <MenuItem>Overview</MenuItem>
                                <MenuItem>Authentication</MenuItem>
                                <MenuItem>Endpoints</MenuItem>
                                <MenuItem>Errors</MenuItem>
                        </MenuList>
                        </Paper>
                    </Drawer>
                </Grid>
                    
                    <Grid item xs={6} sm={8} md={9} lg={9} xl={9}  >
                        <Typography variant='h4'>API Docs</Typography>
                        <Typography id="login" >Login</Typography>
                    </Grid>
                    <Grid item xs >
                        <Drawer variant='permanent' anchor="right" >
                            <Toolbar />
                                <List >
                                    <ListItem>Found here:</ListItem>
                                    <ListItem>
                                        <Link underline="hover" color='inherit' href="#login"><span>- Login</span></Link>
                                    </ListItem>
                                    <ListItem sx={{padding:'2px'}}>
                                        <Link padding={0} underline="hover" color='inherit' href="#register"><span>- Register</span></Link>
                                    </ListItem>
                                </List>
                        </Drawer>
                    </Grid>

        </Grid>
    )
}

export default Docs