
function FormFilme({ values, setValues, onSubmit, rotuloEnviar, onCancel }) {
  const atualiza = (campo) => (e) => setValues({ ...values, [campo]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="formulario">
      <label htmlFor="nome">Nome:</label>
      <input id="nome" type="text" value={values.nome} onChange={atualiza('nome')}
             placeholder="Digite o nome do filme" required />

      <label htmlFor="genero">Gênero:</label>
      <input id="genero" type="text" value={values.genero} onChange={atualiza('genero')}
             placeholder="Digite o gênero" required />

      <label htmlFor="ano">Ano:</label>
      <input id="ano" type="text" value={values.ano} onChange={atualiza('ano')}
             placeholder="Digite o ano" required />

      <div className="acoes">
        <button type="submit" className="botao">{rotuloEnviar}</button>
        <button type="button" className="botao secundario" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default FormFilme;
