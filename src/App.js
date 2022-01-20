import React from 'react'
import Router from './routes/Router'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constants/theme'
import GlobalState from './contexts/GlobalState'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Footer />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalState>
  );
}
export default App;
