import React from "react";

class EstadoClase extends React.Component{
constructor (props){
    super(props);
    //state = state ,es un estado que es un objeto que tiene informacion
    this.state = {
        count: 0,
        //puedo tener mas estados aqui
        };
    };

   

render(){
    const aumentar = ()=>{
        //aumentar el contador
        //el this.setState es una funcion que cambia el estado,osea busca al this.State
        this.setState({count: this.state.count + 1}, () =>  {
            console.log(this.state.count);  //entonces de esta manera puedo imprimir el valor
        });
};
    const disminuir = ()=>{
        //si queremos que no disminuya mas que cero 
        this.state.count > 0 && this.setState({count: this.state.count - 1} , () =>  {
            console.log(this.state.count);
        });
    };

    return(
<h1>cotador con estados (Clase)</h1>
<h3>{this.state.count}</h3>
<button onClick={disminuir}>-</button>
<button onClick={aumentar}>+</button>
);
//esta funcion va a hacer algo cuando se cree el componente 
componentDidMout(){
    console.log("componentDidMount");
};
//esta funcion va a haer algo cuando se cambie el estado del componente 
componentDidUpdate(){
    console.log("componentDidUpdate");
};
//esta funcion va a hacer algo cuando se destruya el componente
componentWillUnmount(){
    console.log("componentWillUnmount");
};
};

export default EstadoClase;