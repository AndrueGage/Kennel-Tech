import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthProvider } from '../src/utils/AuthContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <main className="px-3">
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </main>
      </ApolloProvider>
    </>
  )
}

export default App