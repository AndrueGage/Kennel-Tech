import { Outlet } from 'react-router-dom';
import ClientNav from './components/Nav';

function App() {

  return (
    <>
        <ClientNav />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default App
