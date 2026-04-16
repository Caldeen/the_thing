
import { Container, Link, Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const Home = ({title}) => {
  const txt =`You're welcome to take a tour to my homelab if it's online! Look below:`
  return (
      <Container>
        <h1>{title}</h1>
      <Typography>{txt}</Typography>
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
