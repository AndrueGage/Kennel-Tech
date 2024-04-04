import { Outlet } from 'react-router-dom';
import ClientNav from './components/ClientNav';

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
