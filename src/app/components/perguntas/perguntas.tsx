import "./perguntas.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Pergunta {
    pergunta: string;
    resposta: string;
    index: number;
    perguntaAberta: number | null;
    setPerguntaAberta: (index: number | null) => void;
}


export default function Pergunta ({ pergunta, resposta, index, perguntaAberta, setPerguntaAberta }: Pergunta) {

    const handleClick = () => {
        setPerguntaAberta(perguntaAberta === index ? null : index);
    };

    return (

        <section className="pergunta" onClick={handleClick}>

            <div id="titulo_duvidas">

                <h3>{pergunta}</h3>
                
                <div id="iconepergunta">
                    <MdOutlineKeyboardArrowDown size={20} color="black"/>
                </div>

            </div>

            {perguntaAberta === index && <p>{resposta}</p>}

        </section>

    );
};
