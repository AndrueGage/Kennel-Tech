import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
      <ChakraProvider>
        <Nav />
        <main>
          <Outlet />
        </main>
      </ChakraProvider>
    </>
  )
}

export default App
