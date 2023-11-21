import * as React from "react"
import Header from "../Header/Header"
import "./layout.css"
import {createTheme, ThemeProvider} from "@mui/material"
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0A0E0E'
      }
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: `var(--font-mono)`
          },
          h1: {
            color: '#ffffff',
          },
          body1: {
            color: '#ffffff',
          },
          body2: {
            color: '#ffffff',
          },
        }
      }
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={"app-container"}>
        <div className="app-content">
          <Header />
          <div
            style={{
              margin: `0 auto`,
            }}
          >
            <main style={{
              margin: '0 auto 25px',
              height: '100%',
              minHeight: '70vh',
            }}
            >
              {children}
            </main>
          </div>
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
