import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Inicio() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.get('')
      .then(res => setFilmes(res.data))
      .catch(err => { console.log(err); setErro(true); })
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <p className="mensagem">Carregando...</p>;
  if (erro) return <p className="mensagem erro">Erro ao carregar os filmes. Verifique a URL da API.</p>;
  if (filmes.length === 0) return <p className="mensagem">Nenhum filme cadastrado.</p>;

  return (
    <ul className="lista-filmes">
      {filmes.map(f => (
        <li key={f.id}>
          <Link to={`/ler/${f.id}`} className="item-filme">
            <span><strong>Id:</strong> {f.id}</span>
            <span><strong>Nome:</strong> {f.nome}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Inicio;
