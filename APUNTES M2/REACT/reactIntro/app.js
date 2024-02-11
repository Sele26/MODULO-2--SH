import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx';
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';

const musicos = [ //listaPersonas
  {
    name: 'John',
    lastname: 'Lennon',
    band: 'The Beatles'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

function App() {
  return (
    <div className = "App">
        //lista personas ? debo de importarla
     
      <listaPersonas lista={listaPersonas} /> //escribimos listaPersona entre parentesis porque estamos hablando de una variable de js
    //en lista colocamos el archivo que yo envio
    </div>

  )
}

export default App;


ReactDOM.render(<App />, document.getElementById('app'));