import { Box, Button, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material"
import { log } from "console"
import {useState } from "react"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

interface Quote {
    id: number,
    quote: string,
    author: string,
    tag: string
    isFavourite: boolean
}
const Quotes = ({ quote,search }) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [quotesByAuthor, setQuotesByAuthor] = useState<Quote[]>([])
    const [author, setAuthor] = useState('')
    const [quotesToShow, setQuotesToShow] = useState<Quote[]>([])
    const [favoriteQuotesId, setFavoriteQuotesId] = useState<Set<Number>>(new Set)

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }
    const addToFavourites = (quote:Quote) => {
        const token = localStorage.getItem('token')
        setFavoriteQuotesId(favoriteQuotesId.add(quote.id))
        
    }
    const handleRowsPerPageChange = (event) => {
        
        const newRowsPerPage = parseInt(event.target.value,10)
        setRowsPerPage(newRowsPerPage)
        setPage(0)
        setQuotesToShow(quotesByAuthor.slice(0,newRowsPerPage))
    
    }
    const handleSearch = async (event) => {
        const token = localStorage.getItem('token')
        console.log(author);
        
        const quotesByAuthorData = await fetch(`https://springbootbackend.fly.dev/quotes/author/${author}`,{
            headers:{'Authorization':token}
        })
        const quotesByAuthor = await quotesByAuthorData.json()
        quotesByAuthor.forEach((quote:Quote) => {
            if(favoriteQuotesId.has(quote.id))
               quote.isFavourite = true
        })
        setQuotesByAuthor(quotesByAuthor)
        setQuotesToShow(quotesByAuthor.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
    }   
    const handleChangePage = (event: unknown, newPage: number) => {
        setQuotesToShow(quotesByAuthor.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage))
        setPage(newPage);
    }
    return (
        <Container >

            <Typography> {quote.quote} {quote.quote ? ' - ' : null} <i>{quote.author}</i></Typography>
            <br></br>
            <Typography>Find quotes by author</Typography>
            <Box component={'div'}>
                <input onChange={handleAuthorChange} type='text'></input>
                <Button onClick={handleSearch}>Get quotes</Button>
            </Box>

            <TableContainer sx={{ justifySelf: 'stretch' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Quote</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Tag</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quotesToShow.map((quote) => (
                            <TableRow key={quote.id}>
                                <TableCell>{quote.id}</TableCell>
                                <TableCell>{quote.quote}</TableCell>
                                <TableCell align="right">{quote.author}</TableCell>
                                <TableCell align="right">{quote.tag}</TableCell>
                                <TableCell align="center" >
                                    <Box sx={{display:'flex'}}>
                                        <IconButton sx={{flex:1}} onClick={()=>addToFavourites(quote)} >
                                            <FavoriteOutlinedIcon color={favoriteQuotesId.has(quote.id)?"error":"inherit"}/>
                                        </IconButton>
                                    </Box>

                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
                <TablePagination
                    component={'div'}
                    rowsPerPageOptions={[10, 20, 50]}
                    count={quotesByAuthor.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleRowsPerPageChange}
                >

                </TablePagination>
            </TableContainer>
        </Container>
    )
}

Quotes.getInitialProps = async (ctx) => {
    const randomQuoteData = await fetch('https://springbootbackend.fly.dev/quotes/random')
    const search = await fetch('https://springbootbackend.fly.dev/quotes/author/asd')
    const randomQuote = await randomQuoteData.json() as Quote
    const searchQuotes = await search.json() as Quote[]
    return { quote: randomQuote,search:searchQuotes }
}
export default Quotes