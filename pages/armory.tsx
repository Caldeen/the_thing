import LoginComponent from "../components/loginComponent"
import Container from "@mui/material/Container"
import { useState } from "react"
import Button from "@mui/material/Button"
import { Card, CardContent, colors, Typography } from "@mui/material"
import { Box } from "@mui/system"


const Armory = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [text, setText] = useState([null])
    const handleRollClick = async() => {
        const res = await fetch('/api/items')
       setText(await res.json())
        
    }
    return (
        <Container>
            <LoginComponent/>
            <Button onClick={handleRollClick}>Press me to roll</Button>
            <Box sx={{display:'inline-flex',alignItems:'stretch',flexWrap:'wrap'}}>
                
                {text[0]!==null?text.map(obj=>
                <Card key={obj.leg_name} sx={{m:1,maxWidth:280,border:'2px solid'} }>
                    <CardContent sx={{display:'table-cell'}}>
                        <Typography variant='h6'gutterBottom color="text.primary">{obj.leg_name}</Typography>
                        <Typography variant='body1'gutterBottom color="text.secondary">{obj.content.desc}</Typography>

                        
                    </CardContent>
                </Card>):''}
            </Box>
        </Container>
    )
}

export default Armory