import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './design-systems/GlobalStyle.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './design-systems/Colors.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={theme} >
        <GlobalStyled /> 
        <App />
     </ThemeProvider>
  </React.StrictMode>,
)
