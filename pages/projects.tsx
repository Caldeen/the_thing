import { Container, Link, List, ListItem, Typography } from "@mui/material"

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <h3>My github is <Link href ='https://github.com/Caldeen'>https://github.com/Caldeen</Link>. 
             The list below contains a selection of my projects </h3>
            <ol style={{paddingLeft:15}}>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}>
                        This site as a whole built using <b>NextJS</b> framework and <b>MaterialUI</b> library hosted on <i>fly.io</i> using <b>Docker</b> at
                     <Link  href='https://nextfrontend.fly.dev/'> https://nextfrontend.fly.dev/ </Link>
                      source code at <Link href='https://github.com/Caldeen/the_thing'>https://github.com/Caldeen/the_thing.</Link></Typography>
                </li>
                <br></br>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}>A simple REST API built using <b>Java Spring Boot</b> hosted on <i>fly.io </i>
                    containing user info and quotes utilizing 
                    <b> SQLite </b>as a database and fly volumes for persistent storage at
                        <Link href='https://springbootbackend.fly.dev/'> https://springbootbackend.fly.dev/ </Link> using <b>Docker</b> source code at <Link href='https://github.com/Caldeen/spring_boot_api'>https://github.com/Caldeen/spring_boot_api 
                        </Link>. Simple docs at <Link href='https://nextfrontend.fly.dev/docs'>https://nextfrontend.fly.dev/docs</Link>. 
                    </Typography>
                </li>
                <br></br>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}>Xkom web scraper in <b>Python</b> running scheduled <b>cron job</b> charted using <b>ChartJs </b>
                    hosted here: <Link href='https://xkom3.fly.dev/chart'>https://xkom3.fly.dev/chart</Link>.</Typography>
                    <br></br>
                </li>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}><b>Spring boot</b> API used for managing meetings
                     <Link href='https://github.com/Caldeen/springServer'> https://github.com/Caldeen/springServer</Link>.
                     &#40;2021&#41;</Typography>
                </li>
                <br></br>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}><b>Spring boot </b> API used for managing orders <Link href='https://github.com/Caldeen/web_spring_backend'>https://github.com/Caldeen/web_spring_backend</Link>. &#40;2021&#41;</Typography>
                </li>
                <br></br>
                <li>
                    <Typography sx={{wordWrap:'break-word'}}>Very simple <b>JS</b> game here: <Link href='https://xkom3.fly.dev'>https://xkom3.fly.dev</Link>.</Typography>

                </li>
                <br></br>
            </ol>
        <h3>And a bunch of others at my github.</h3>

        </Container>
    )
}
export default Projects