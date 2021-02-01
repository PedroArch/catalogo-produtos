import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Contatos from './pages/Contatos';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Produtos />} />
        <Route exact path="/contatos" element={<Contatos />} />
        <Route exact path="/produto/:id" element={<Produto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
