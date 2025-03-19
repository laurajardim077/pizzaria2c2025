import { useState } from "react"
function App() {
  const [nome, setNome] = useState('Ronaldo')

  const Formulario = () => {

    <div>
      <input
        className="nome"
        onChange={(e) => { setNome(e.target.value) }}
        name="nome"
        type="text" />
      <button
        onClick={() => { alert(nome) }}
        classname='botao'>
        CLIQUE AQUI
      </button>
    </div>
  }
  return (
    <div>
      <h3>PIZZARIA 2C</h3>
      <input
        className="nome"
        onChange={(e) => { setNome(e.target.value) }}
        name="nome"
        type="text" />
      <button
        onClick={() => { alert(nome) }}
        classname='botao'>
        CLIQUE AQUI
      </button>
    </div>
  );

};

return (
  <div>
    <h3> PIZZARIA 2C</h3>
    <Formulario/>
    <Formulario/>
    <Formulario/>
  </div>
);

export default App 