import Link from "next/link";
import Image from "next/image";
import "./membros.css";

interface MembroProps {
    nome: string;
    descricao: string;
    turma: string;
    rm: string;
    foto: string;
    githubUrl: string;
}

const Membro: React.FC<MembroProps> = ({ nome, descricao, turma, rm, foto, githubUrl }) => {

    return (

        <Link href={githubUrl} className="link_integrante" target="_blank" rel="noopener noreferrer">

            <section className="integrante">

                <Image src={foto} alt={`Foto do ${nome}`} width={100} height={100} />

                <div className="dados_integrante">
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <p>{turma}, {rm}</p>
                </div>
                
            </section>
            
        </Link>
    );
};

export default Membro;
