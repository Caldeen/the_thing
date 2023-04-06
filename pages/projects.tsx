import { Container, Link, List, ListItem, Typography } from "@mui/material"

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <h3>My github is at <Link href ='https://github.com/Caldeen'>https://github.com/Caldeen</Link>. 
             The list below contains a selection of projects </h3>
            <ol >
                <li>
                    <Typography >This site as a whole built using <b>NextJS</b> framework and <b>MaterialUI</b> library hosted on <i>fly.io</i> at
                     <Link href='https://nextfrontend.fly.dev/'> https://nextfrontend.fly.dev/ </Link>
                      source code at <Link href='https://github.com/Caldeen/the_thing'>https://github.com/Caldeen/the_thing.</Link></Typography>
                </li>
                <li>
                    <Typography >A simple REST API built using <b>Java Spring Boot</b> hosted on <i>fly.io</i> at
                        <Link href='https://springbootbackend.fly.dev/'> https://springbootbackend.fly.dev/ </Link>
                        source code at <Link href='https://github.com/Caldeen/spring_boot_api'>https://github.com/Caldeen/spring_boot_api 
                        </Link>. Simple docs at <Link href='https://nextfrontend.fly.dev/docs'>https://nextfrontend.fly.dev/docs</Link>. 
                    </Typography>
                </li>
                <li>
                    <Typography><b>Spring boot</b> API used for managing meetings
                     <Link href='https://github.com/Caldeen/springServer'> https://github.com/Caldeen/springServer</Link>.
                     &#40;2021&#41;</Typography>
                </li>
            </ol>
        <h3>And a bunch of others at my github.</h3>
        </Container>
    )
}
export default Projects