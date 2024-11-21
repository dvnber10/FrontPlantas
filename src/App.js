
import { ThemeProvider } from './Utility/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from './Routes/Index';
import NewRegister from './Routes/NewRegister';
import './index.scss'
import PlantDetail from './Routes/PlantDetail';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Plant/:id' element = {<PlantDetail/>}/>
            <Route path='/NewRegister' element = {<NewRegister/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
