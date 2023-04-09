import React from 'react'
import theme from './config/theme'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'

import Todo from './views/Todo'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Todo />
    </ThemeProvider>
  )
}

export default App
