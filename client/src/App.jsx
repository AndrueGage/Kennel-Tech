import { Outlet } from 'react-router-dom';
import ClientNav from './components/ClientNav';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
     <ApolloProvider client={client}>
        
        <main className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
          <Outlet />
        </main>
        </ApolloProvider>
    </>
  )
}

export default App
