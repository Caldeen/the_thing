import { Box, ClickAwayListener, ListItem, ListItemButton, Stack, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Fade from "@mui/material/Fade"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import { useRef, useState } from "react"

const Account = ({ user, handleLogoutClick }) => {
    const [openPopper, setOpenPopper] = useState(false)
    const [anchorRef, setAnchorRef] = useState<null | HTMLElement>(null)

    const popper = (...props: JSX.Element[]) => {
        return (
            <Popper
                    open={openPopper}
                    anchorEl={anchorRef}
                    placement="auto"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps}>
                            <Paper  >
                            <ClickAwayListener onClickAway={() => setOpenPopper(false)}>
                                <MenuList autoFocusItem={openPopper}>
                                    {props}
                                </MenuList>
                    </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
        )
    }
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorRef(event.currentTarget)
        setOpenPopper(!openPopper)
        console.log(user);
    }

    return (
        <div>
            <Button color="inherit" onClick={handleClick}>Account </Button>
            {user ?
                <Box sx={{ display: 'inline-flex' }}>
                    {popper(<ListItemButton key={4}> Profile  <b> ({user})</b></ListItemButton>,
                        <MenuItem key={5}>Settings</MenuItem>,
                        <ListItemButton key={6} href="/" onClick={() => {
                            handleLogoutClick()
                            setOpenPopper(false)
                        }}>Logout</ListItemButton>
                    )}
                    <TaskAltSharpIcon fontSize="small" sx={{ color: 'green' }} />
                </Box>
                :
                <Stack spacing={2} direction="row">
                    {popper(<ListItemButton key={1} href="/login">Login</ListItemButton>,
                        <ListItemButton key={2} href="/register">Register</ListItemButton>)}
                </Stack>
            }
        </div>
    )
}


export default Account

