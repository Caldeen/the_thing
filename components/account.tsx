import Button from "@mui/material/Button"
import Fade from "@mui/material/Fade"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import { log } from "console"
import { useRef, useState } from "react"


const Account = ({ user: string }) => {
    const [openPopper, setOpenPopper] = useState(false)
    const [anchorRef, setAnchorRef] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorRef(event.currentTarget)
        setOpenPopper(!openPopper)
    }
    return (
        <div>
            <Button color="inherit" onClick={handleClick}>Account </Button>
            <Popper
                open={openPopper}
                anchorEl={anchorRef}
                transition

            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                        <Paper >
                            <MenuList autoFocusItem={openPopper}>
                                <MenuItem>item1</MenuItem>
                                <MenuItem>item2</MenuItem>
                                <MenuItem>item3</MenuItem>
                            </MenuList>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </div>
    )
}

export default Account

