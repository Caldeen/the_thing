import Box from "@mui/material/Box"
import LeftDrawer from "../../components/docs/leftDrawer"
import { Typography } from "@mui/material"
import RightDrawer from "../../components/docs/rightDrawer"

const Account = () => {

    return (
        <Box display={'flex'} >
            <LeftDrawer ></LeftDrawer>
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Typography variant='h3'>Account</Typography>
                <Typography id='User management' variant='h4'>User management</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    The API can be currently used to register a user or log in a user. Succesful
                    registration or login will return a JWT token in the header that can be used to access portions of API that are yet
                    to be implemented. The token is valid for 10 minutes.
                </Typography>
                <br></br>
                <Typography variant='h5'>Register a user</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To register a user, send a POST request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/register</i>
                    <br></br>
                    The request body should contain the following JSON object:
                </Typography>
                <Box component={'div'} sx={{ backgroundColor: 'action.disabledBackground' }}>
                    <code>
                        <i>{`{`}</i>
                        <br></br>
                        <i>&emsp;&quot;login&quot;: &quot;your username&quot;</i>
                        <br></br>
                        <i>&emsp;&quot;password&quot;: &quot;your password&quot;</i>
                        <br></br>
                        <i>{`}`}</i>
                        <br></br>
                    </code>
                </Box>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    The server will respond with a 200 OK status code, and a JSON object containing the following fields:
                </Typography>
                <br></br>
                <Box component={'div'} sx={{ backgroundColor: 'action.disabledBackground' }}>
                    <code>
                        <i>{`{`}</i>
                        <br></br>
                        <i>&emsp;&quot;id&quot;: 123</i>
                        <br></br>
                        <i>&emsp;&quot;username&quot;: &quot;your username&quot;</i>
                        <br></br>
                        <i>{`}`}</i>
                        <br></br>
                    </code>
                </Box>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    The token will be in the response header.
                    The token will be used to access the API. It is valid for 10 minutes.

                </Typography>
                <br></br>
                <Typography variant='h5'>Log in a user</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To log in a user, send a POST request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/login</i>
                    <br></br>
                    The request body should contain the following JSON object:
                </Typography>
                <br></br>
                <Box component={'div'} sx={{ backgroundColor: 'action.disabledBackground' }}>
                    <code>
                        <i>{`{`}</i>
                        <br></br>
                        <i>&emsp;&quot;login&quot;: &quot;your username&quot;</i>
                        <br></br>
                        <i>&emsp;&quot;password&quot;: &quot;your password&quot;</i>
                        <br></br>
                        <i>{`}`}</i>
                        <br></br>
                    </code>
                </Box>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    The response will be the same as for the registration endpoint.
                </Typography>
            </Box>
            <RightDrawer subjects={['User management']}></RightDrawer>
        </Box>
    )
}
export default Account