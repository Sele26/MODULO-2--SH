import { useState } from "react"; 

const SearchBar = (props) => {
    //cada vez que yo escribo en el input cambia el estado
    //se guarda lo que escribi en el id y se dispara la funcion handlechange
    const[id, setId] = useState("");

    //esta funcion modifica el estado (id) con la funcion que setId
    const handleChange = (event) => {
        //aca se realiza el evento del input
        setId(event.target.value);
};

 return (
        <> 
        //yo escribo , y se guarda lo que escribi y se dispara la funcion handlechange
        <input type="text"  onChange={handleChange}/>
        <button onClick={() => props.onSearch(id);}>Buscar</button>
        </>
    );
};

export default SearchBar;