import { useState } from 'react';

function BuscaId({ onProcurar, onCancelar, carregando }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onProcurar(id.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label htmlFor="id">Id do filme:</label>
      <input id="id" type="number" min="1" value={id}
             onChange={e => setId(e.target.value)}
             placeholder="Digite o id" required />
      <div className="acoes">
        <button type="submit" className="botao" disabled={carregando}>
          {carregando ? 'Procurando...' : 'Procurar'}
        </button>
        <button type="button" className="botao secundario" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
}

export default BuscaId;
