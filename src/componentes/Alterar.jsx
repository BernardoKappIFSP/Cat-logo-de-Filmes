import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import BuscaId from './BuscaId';
import FormFilme from './FormFilme';


function Alterar() {
  const [etapa, setEtapa] = useState('busca');
  const [carregando, setCarregando] = useState(false);
  const [id, setId] = useState('');
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' });
  const navigate = useNavigate();

  const procurar = (idDigitado) => {
    setCarregando(true);
    api.get(`/${idDigitado}`)
      .then(res => {
        setId(idDigitado);
        setValues({ nome: res.data.nome, genero: res.data.genero, ano: res.data.ano });
        setEtapa('form');
      })
      .catch(() => setEtapa('naoachou'))
      .finally(() => setCarregando(false));
  };

  const handleAlterar = (event) => {
    event.preventDefault();
    api.put(`/${id}`, values)
      .then(() => navigate('/'))
      .catch(err => { console.log(err); alert('Erro ao alterar o filme.'); });
  };

  return (
    <div className="cartao">
      <h2>Alterar filme</h2>

      {etapa === 'busca' && (
        <BuscaId onProcurar={procurar} onCancelar={() => navigate('/')} carregando={carregando} />
      )}

      {etapa === 'form' && (
        <FormFilme values={values} setValues={setValues} onSubmit={handleAlterar}
                   rotuloEnviar="Alterar" onCancel={() => navigate('/')} />
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

export default Alterar;
