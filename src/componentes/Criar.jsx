import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import FormFilme from './FormFilme';

function Criar() {
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('', values)
      .then(() => navigate('/'))
      .catch(err => { console.log(err); alert('Erro ao criar o filme.'); });
  };

  return (
    <div className="cartao">
      <h2>Criar filme</h2>
      <FormFilme values={values} setValues={setValues} onSubmit={handleSubmit}
                 rotuloEnviar="Criar" onCancel={() => navigate('/')} />
    </div>
  );
}

export default Criar;
