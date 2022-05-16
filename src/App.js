import React from 'react'
import { Router } from './Router/Routes'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      {/* futureEatsA */}
      <Router />
    </ChakraProvider>
  )
}

export default App
