// import "./card.css"
import style from "./card.module.css"

const Card = () => {
    return (
{/* <div className="container"> */}
<div className={style.container}>
<h1 className={style.titulo}>Esto es una card</h1>
<p>Titulo</p>
</div>

    );
};

export default Card;