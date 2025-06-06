import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { theme } from './styles/theme.js';
import GlobalStyle from '@/styles/globalStyle.js'
import { ThemeProvider } from 'styled-components';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
