import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from './Routes/Index';
import NewRegister from './Routes/NewRegister';
import './index.scss'
import PlantDetail from './Routes/PlantDetail';
import Home from './Routes/Home';
import Update from './Routes/Update';
import Plants from './Componets/Dashboard/Plants';
import Diseases from './Componets/Dashboard/Diseases';
import Plagues from './Componets/Dashboard/Plagues';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} >
            <Route element={<Home />} >
              <Route index element={<Plants />} />
              <Route path='diseases' element={<Diseases />} />
              <Route path='plagues' element={<Plagues />} />
            </Route>

            <Route path='Plant/:id' element={<PlantDetail />} />
            <Route path='NewRegister' element={<NewRegister />} />
            <Route path='update' element={<Update />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
