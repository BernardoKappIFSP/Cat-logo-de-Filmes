import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import BuscaId from './BuscaId';


function Apagar() {
  const [etapa, setEtapa] = useState('busca');
  const [carregando, setCarregando] = useState(false);
  const [filme, setFilme] = useState(null);
  const navigate = useNavigate();

  const procurar = (idDigitado) => {
    setCarregando(true);
    api.get(`/${idDigitado}`)
      .then(res => { setFilme(res.data); setEtapa('confirma'); })
      .catch(() => setEtapa('naoachou'))
      .finally(() => setCarregando(false));
  };

  const handleApagar = () => {
    api.delete(`/${filme.id}`)
      .then(() => navigate('/'))
      .catch(err => { console.log(err); alert('Erro ao apagar o filme.'); });
  };

  return (
    <div className="cartao">
      <h2>Apagar filme</h2>

      {etapa === 'busca' && (
        <BuscaId onProcurar={procurar} onCancelar={() => navigate('/')} carregando={carregando} />
      )}

      {etapa === 'confirma' && (
        <>
          <p className="mensagem">Tem certeza que deseja apagar este filme?</p>
          <p><strong>Id:</strong> {filme.id}</p>
          <p><strong>Nome:</strong> {filme.nome}</p>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <div className="acoes">
            <button className="botao perigo" onClick={handleApagar}>Apagar</button>
            <button className="botao secundario" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </>
      )}

      {etapa === 'naoachou' && (
        <>
          <p className="mensagem erro">Filme não encontrado.</p>
          <button className="botao" onClick={() => navigate('/')}>Voltar para Início</button>
        </>
      )}
    </div>
  );
}

export default Apagar;
