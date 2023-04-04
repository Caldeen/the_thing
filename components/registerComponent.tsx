import { Button, Container, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"

const RegisterComponent = () => {
    const [loginVal, setLoginVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')
    const onLoginSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const resp = await fetch('https://springbootbackend.fly.dev/register',
            {method:'POST',body:JSON.stringify({login:loginVal,password:passwordVal}),headers:{'Content-Type':'application/json'}})
        const data = await resp.json()
        localStorage.setItem('token',resp.headers.get('authorization') as string)
        localStorage.setItem('name',data.login)
        resp.status === 409 ? window.location.href = '/' : alert('Username already exists')
    }

    return(
        <Container>
            <form onSubmit={onLoginSubmit}>
                <div>
                    <Typography sx={{ margin: 0.2 }} variant="h5">Register</Typography>
                    <TextField onChange={(e)=>setLoginVal(e.target.value)} sx={{ margin: 0.2 }} required label='username' type='text' />
                    <TextField onChange={(e)=>setPasswordVal(e.target.value)} sx={{ margin: 0.2 }} required label='password' type='password' />
                </div>
                <div>
                    <Button sx={{ margin: 0.2 }} type='submit' variant='contained'>Register</Button>
                </div>
            </form>
        </Container>
    )
}

export default RegisterComponent