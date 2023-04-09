import { createTheme } from '@mui/material'

import status from './status'
import palette from './palette'
import background from './background'
import text from './text'

const theme = createTheme({
  palette,
  status,
  background,
  text
})

export default theme
