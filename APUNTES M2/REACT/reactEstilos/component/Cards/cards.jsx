// import "./cards.css"
// import style from "./cards.module.css";
// Aqui importamos directamente la libreria style component
import styled from "styled-components";

// creo el estilo con variables lo cual deben empezar con mayusculas
const Titulo = styled.h1` 
color:red;
font-size:5em
`;

const Contenedor = styled.div`
border:1px solid black;
background-color:blue;
`

const Cards = ()=> {
return (
       
    <Contenedor>
       <Titulo>Titulo de CARDS</Titulo>
        <p> Texto 1</p>
</Contenedor>
    );
} ;

export default Cards;