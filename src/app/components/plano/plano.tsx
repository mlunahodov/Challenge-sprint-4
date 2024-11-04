import "./plano.css";

interface Cards {
    moeda: string;
    preco: string;
    duracao: string;
    title: string;
    description: string;
    onSelect: () => void;
}

export default function CardPlano(props: Cards) {

    return (

        <>

        <div id="card" onClick={props.onSelect}>

            <div id="titulo_card">
                <p>{props.moeda }</p>
                <h3>{props.preco}</h3>
                <p>{props.duracao}</p>
            </div>
            
            <h4>{props.title}</h4>
            <p>{props.description}</p>

        </div>

        </>

    )
}