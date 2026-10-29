import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api';

function Ler() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    api.get(`/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err))
      .finally(() => setCarregando(false));
  }, [id]);

  if (carregando) return <p className="mensagem">Carregando...</p>;

  if (!filme) {
    return (
      <div className="cartao">
        <p className="mensagem erro">Filme não encontrado.</p>
        <Link to="/" className="botao">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="cartao">
      <h2>Detalhes do filme</h2>
      <p><strong>Id:</strong> {filme.id}</p>
      <p><strong>Nome:</strong> {filme.nome}</p>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <Link to="/" className="botao secundario">CANCELAR</Link>
    </div>
  );
}

export default Ler;
