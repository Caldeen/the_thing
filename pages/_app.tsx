
import Layout from '../components/layout'

import type { AppProps } from 'next/app'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components : {
    MuiCssBaseline:{
      styleOverrides: {
        body:{
          height:'100%',
          display:'flex',
          flexDirection:'column',
          alignItems:'stretch',
        },
        html:{
          height:'100%',
        },
        '#__next':{
          height:'100%',
          display:'flex',
          flexDirection:'column',
          alignItems:'stretch',
          
        }

      }
    }
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
