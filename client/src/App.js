import PetPage from './components/pet/PetPage';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OwnerPage from './components/owner/OwnerPage';
import HomePage from './components/home/HomePage';
import BarCode from './components/testing/Barcode';

function App() {
  return (
    
  <BrowserRouter>
  <div data-bs-theme="light">
  <NavBar />
  <Routes>
    <Route path="/barcode" element={<BarCode/>} />
    <Route path="/" element={<HomePage/>} />
    <Route path="/owners" element={<OwnerPage/>} />
    <Route path="/pets" element={<PetPage/>} />
  </Routes>
  </div>
  </BrowserRouter>
    
  );
}

export default App;
