import LoginComponent from "../components/loginComponent"
import Container from "@mui/material/Container"
import { useState } from "react"
import Button from "@mui/material/Button"
import { Alert, Card, CardContent, Chip, colors, Divider, InputLabel, MenuItem, Select, Slider, Snackbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Aspect from "../components/aspect"
import SuccessSnackbar from "../components/successSnackbar"


const Armory = () => {
    const [messageOpen, setMessageOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [gameclass, setGameClass] = useState('Barbarian')
    const [items, setItems] = useState([null])
    const [sliderValue, setSliderValue] = useState<number|number[]>(1)
    
    const handleRollClick = async () => {
        const res = await fetch('/api/items/'+gameclass+`?itemsToRoll=${sliderValue}`)
        setItems(await res.json())
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGameClass(event.target.value);
    };
    const handleDeletion = (item: any) => {
        const newItems = items.filter((i: any) => i.leg_name !== item.leg_name)
        setItems(newItems)
        setMessageOpen(true)
    }
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessageOpen(false)
    }
    return (
        <Container>
            <Box sx={{display:['block','flex','flex','flex','flex','flex'] ,alignItems:'flex-start'}}>
                <div >
                    <InputLabel>Class</InputLabel>
                    <Select
                        value={gameclass}
                        onChange={handleChange}
                        label="Class"
                        autoWidth={true}
                    >
                        <MenuItem value={'Sorceress'}>Sorceress</MenuItem>
                        <MenuItem value={'Barbarian'}>Barbarian</MenuItem>
                        <MenuItem value={'Rogue'}>Rogue</MenuItem>
                        <MenuItem value={'Druid'}>Druid</MenuItem>
                        <MenuItem value={'Necromancer'}>Necromancer</MenuItem>
                        <MenuItem value={'Generic'}>Generic</MenuItem>
                    </Select>
                </div>
                <Box ml={2} sx={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',maxWidth:'50%'}}>
                    <InputLabel >   Roll {Number(sliderValue)} items   </InputLabel>
                    <Slider sx={{minWidth:150}} valueLabelDisplay="auto" min={1} max={50} onChange={(event,newval)=>setSliderValue(newval)}></Slider>
                </Box>
            </Box>
            <Button sx={{ mt: 0.5,mb:0.5 }} variant="outlined" onClick={handleRollClick}>Press me to roll</Button>
            <Divider orientation="horizontal" variant="middle" ><Chip sx={{fontSize:15}} color='warning' label='Legendary Aspects'></Chip></Divider>
            <br ></br>
            <Box sx={{ display: 'inline-flex', alignItems: 'stretch', flexWrap: 'wrap',justifyContent:'center' }}>
                {items[0] !== null ? items.map(item =>
                    <Aspect key={item.leg_name} item={item} deletionHandler={handleDeletion}></Aspect>) : ''}
            </Box>
            <SuccessSnackbar open={messageOpen} onClose={handleClose}></SuccessSnackbar>
        </Container>
    )
}

export default Armory