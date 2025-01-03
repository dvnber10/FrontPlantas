import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Index from './Routes/Index';
import NewRegister from './Routes/NewRegister';
import './index.scss'
import PlantDetail from './Routes/PlantDetail';
import Home from './Routes/Home';
import Update from './Routes/Update';
import Plants from './Componets/Dashboard/Plants';
import Diseases from './Componets/Dashboard/Diseases';
import Plagues from './Componets/Dashboard/Plagues';
import DiseaseDetails from './Componets/Details/DiseaseDetails';
import NotFound from './Routes/NotFound';
import DetailsPlague from './Componets/Details/DetailsPlague';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <Routes>
          <Route path='/' element={<Index />} >
            <Route element={<Home />} >
              <Route index element={<Plants />} />
              <Route path='diseases' element={<Diseases />} />
              <Route path='plagues' element={<Plagues />} />
            </Route>
            <Route path='details'>
              <Route path='Plant/:id' element={<PlantDetail />} />
              <Route path='Disease/:id' element={<DiseaseDetails />} />
              <Route path='Plague/:id' element={<DetailsPlague />} />
            </Route>
            <Route path='NewRegister' element={<NewRegister />} />
            <Route path='update' element={<Update />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
