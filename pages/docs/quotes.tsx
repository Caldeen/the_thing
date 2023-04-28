import { Box, Typography } from "@mui/material"
import LeftDrawer from "../../components/docs/leftDrawer"
import RightDrawer from "../../components/docs/rightDrawer"

const Quotes = () => {

    return (
        <Box display={'flex'} >
            <LeftDrawer></LeftDrawer>
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Typography id='Quotes' variant='h4'>Quotes</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    Quotes API can be used to get a random quote, or a quote by a specific author.
                </Typography>
                <br></br>
                <Typography id='Random quote' variant='h5'>Get a random quote</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To get a random quote, send a GET request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/quotes/random</i>
                    <br></br>
                    The server will respond with a 200 OK status code, and a JSON object containing the following fields:
                </Typography>
                <br></br>
                <Box component={'div'} sx={{ backgroundColor: 'action.disabledBackground' }}>
                    <code>
                        <i>{`{`}</i>
                        <br></br>
                        <i>&emsp;&quot;id&quot;: 123</i>
                        <br></br>
                        <i>&emsp;&quot;quote&quot;: &quot;your quote&quot;</i>
                        <br></br>
                        <i>&emsp;&quot;author&quot;: &quot;your author&quot;</i>
                        <br></br>
                        <i>&emsp;&quot;tag&quot;: &quot;quotes tag&quot;</i>
                        <br></br>
                        <i>{`}`}</i>
                        <br></br>
                    </code>
                </Box>
                <br></br>
                <Typography id='Quote by author' variant='h5'>Get a quote by author</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To get a quote by author, send a GET request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/quotes/author/{`{author}`}</i>
                    <br></br>
                    The server will respond with a 200 OK status code, and a JSON object containing an array of 
                    quotes matched by the given author. Quote strucute is the same as in the previous example.
                </Typography>
            
                <br></br>
                <Typography id='Quote by id' variant='h5'>Get a quote by its identifier</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To get a quote by its identifier, send a GET request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/quotes/{`{id}`}</i>
                    <br></br>
                    The server will respond with a 200 OK status code, and a JSON object containing the quote
                    matched by the given id. Quote strucute is the same as in the previous example.
                </Typography>
               
               <br></br>
                <Typography id='List of tags' variant='h5'>Get a list of all possible tags</Typography>
                <Typography variant='body1' sx={{ overflowWrap: 'anywhere' }} >
                    To get a list of possible tags, send a GET request to the following endpoint:
                    <br></br>
                    <i>https://springbootbackend.fly.dev/quotes/tags</i>
                    <br></br>
                    The server will respond with a 200 OK status code, and a JSON object containing an array of
                    tags.
                </Typography>
            </Box>

            
            <RightDrawer subjects={['Quotes','Random quote','Quote by author','Quote by id','List of tags']}></RightDrawer>

        </Box>
    )

}

export default Quotes