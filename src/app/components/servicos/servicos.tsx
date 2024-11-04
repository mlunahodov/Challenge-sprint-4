import "./servicos.css";

interface Servicos {
    titulo: string;
    descricao: string;
    icon: React.ReactNode;
}

export default function Servicos (props: Servicos) {

    return (

        <>

        <div id="caixa_servicos">

            <div id="card_servicos">

                {props.icon}

                <div id="card_textos">
                    <h3>{props.titulo}</h3>
                    <p>{props.descricao}</p>
                </div>

            </div>

        </div>

        </>

    )
}