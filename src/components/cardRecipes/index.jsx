import './cardReceitas.css';

export default function CardReceitas({
    image,
    nome,
    ingredientes,
    instrucoes,
    tags
}) {

    return(
        <div className="card-receitas">
            <img src={image} alt="" />
            <h2>{nome}</h2>
            <p>{ingredientes}</p>
            <p>{instrucoes}</p>
            <span>{tags}</span>
        </div>
    )
}