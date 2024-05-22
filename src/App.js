import { useState, useEffect } from "react";

function App(){
  const [input, setInput] = useState('')
  const [cadastro, setCadastro] = useState([]);


  useEffect(()=>{
    localStorage.setItem('@cadastro', JSON.stringify(cadastro))
  }, [cadastro]);

  function handleRegister(e) {
    e.preventDefault();

    setCadastro([...cadastro, input]);
    setInput('');

  }

    return(
        <div>
            <h1>Cadastre seu endereço:</h1>

            <form onSubmit={handleRegister}>
                <label>Endereço:</label> <br/>
                <input 
                placeholder="Digite seu endereço"
                value={input}
                onChange={ (e) => setInput(e.target.value)  }
                /><br /> <br />

                <button type="submit">Cadastrar</button>


            </form>
         
          <br /> <br />
          
          <ul>
            {
              cadastro.map( cadastro => (
                <li key={cadastro}>{cadastro}</li>
              ))
            }
          </ul>

        </div>
    )
}

export default App;