import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/common/Layout';
import { StandingsPage } from './pages/Standings';
import { Routes, Route } from 'react-router-dom';
import { MatchesPage } from './pages/MatchesPage';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
 defaultOptions: {
   queries: {
     refetchOnWindowFocus: false,
     retry: 1
   }
 }
});

function App() {
 return (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Layout>
       <Routes>
        <Route path="/" element={<StandingsPage />} />
        <Route path="/standings/:league" element={<StandingsPage />} />
        <Route path="/matches" element={<MatchesPage />} />
     </Routes>
      </Layout>
    </QueryClientProvider>
  </BrowserRouter>
 );
}

export default App;