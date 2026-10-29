import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Ler from './componentes/Ler';
import Criar from './componentes/Criar';
import Alterar from './componentes/Alterar';
import Apagar from './componentes/Apagar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Cabecalho />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ler/:id" element={<Ler />} />
            <Route path="/criar" element={<Criar />} />
            <Route path="/alterar" element={<Alterar />} />
            <Route path="/apagar" element={<Apagar />} />
            <Route path="*" element={<p className="mensagem">Página não encontrada.</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
