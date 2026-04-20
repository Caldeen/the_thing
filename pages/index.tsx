import { Container, Link, Typography,List,ListItem,ListItemText,Box} from '@mui/material'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const Home = ({title}) => {
  const [lab_status, setLabStatus] = useState('Offline')
  useEffect(() => {
    const getLabStatus = async () => {
      var outcome = 'Offline'
      try {
        const resp = await fetch('/api/status-check')
        if(resp.status==200)
          outcome='Online'
        else{
          outcome='Offline'
        }
      }catch(error){
        outcome='Offline'
      }
    setLabStatus(outcome)
    }
    getLabStatus()
  }, [])
  const txt =`You're welcome to take a tour to my homelab if it's online! Look below:`
  return (
      <Container>
        <h1>{title}</h1>
      <Typography>{txt}</Typography>
      <Typography >Status: { lab_status === 'Online' ? '🟢' : '🔴' } </Typography>
      <br></br>

      <Typography>If prompted use the following credentials:
        <List>
          <ListItem>
            <ListItemText  primary="Username" secondary="guestuser" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Password" secondary="guestpassword" />
          </ListItem>
        </List>
        </Typography>
      <br></br>
      <Box sx={{ position: 'relative', width: 500, height: 100 }} >
      <Image
        src="/zabbix_logo.png"
        alt="Zabbix logo"
        fill // Makes image fill the parent Box
        style={{ objectFit: 'cover' }} // Ensures aspect ratio is maintained
        priority // Use this for images above the fold
      />
      
    </Box>
      <Link href='https://nextfrontend.fly.dev/zabbix/index.php'>Zabbix</Link>
      </Container>
  )
}
export async function getStaticProps(context) {
  return {
    props: {title:'Showcase panel'
    },
  }
}
export default Home
