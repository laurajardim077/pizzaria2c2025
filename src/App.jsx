import { useState } from "react"
function App() {
  const [nome, setNome] = useState('Ronaldo')
  return (
    <div>
      <h3>PIZZARIA 2C</h3>
      <input
        className="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        name="nome"
        type="text" />
      <button
        onClick={() => { alert(nome) }}
        classname='botao'>
        CLIQUE AQUI
      </button>
    </div>
  )

}

export default App 