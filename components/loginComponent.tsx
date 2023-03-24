import { FormEvent } from "react"
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

const LoginComponent = () => {
    const onLoginSubmit=(event:FormEvent)=>{
        event.preventDefault()
        console.log('login');
        
    }
    return (
        <Container>
            <form onSubmit={onLoginSubmit}>
                <div>
                    <Typography sx={{margin:0.2}} variant="h5">Login to see</Typography>
                    <TextField sx={{margin:0.2}} required label='username' type='text'/>
                    <TextField sx={{margin:0.2}} required label='password' type='password'/>
                </div>
                <div>
                    <Button sx={{margin:0.2}} type='submit' variant='contained'>Login</Button>
                </div>
            </form>
        </Container>
            

        
        
    )
}


export default LoginComponent