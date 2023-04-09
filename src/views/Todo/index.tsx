import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useTheme } from '@emotion/react'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.background.grey,
  color: theme.status.primary.danger,
  width: '100vw',
  height: '100vh'
}))

const Todo = () => {
  const theme = useTheme()
  console.log('🚀 ~ file: index.tsx:14 ~ Todo ~ theme:', theme)

  return (
    <StyledBox sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '40vw',
          minWidth: 500,
          height: '70vh',
          minHeight: 500,
          padding: 1,
          borderRadius: '5px',
          boxShadow: theme.shadows[5]
        }}
      >
        <Typography align='center' variant='h4'>
          Todo List Typescript
        </Typography>
      </Box>
    </StyledBox>
  )
}

export default Todo
