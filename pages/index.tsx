import { useState, useEffect } from 'react'
import HomeServicePanel from '../components/home/homeServicePanel'

type HomeProps = {
  title: string
}

const Home = ({ title }: HomeProps) => {
  const [labStatus, setLabStatus] = useState<'Online' | 'Offline'>('Offline')

  useEffect(() => {
    const getLabStatus = async () => {
      let outcome: 'Online' | 'Offline' = 'Offline'
      try {
        const resp = await fetch('/api/status-check')
        if (resp.status === 200) {
          outcome = 'Online'
        }
      } catch (error) {
        outcome = 'Offline'
      }

      setLabStatus(outcome)
    }

    getLabStatus()
  }, [])

  return <HomeServicePanel title={title} labStatus={labStatus} />
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Showcase panel',
    },
  }
}

export default Home
