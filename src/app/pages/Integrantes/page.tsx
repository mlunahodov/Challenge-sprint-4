import Membro from "@/app/components/membros/membros";

export default function Integrantes () {


const membros = [
    {
        nome: "Guilherme Guimarães",
        descricao: "Profissional Back-End, cursando Análise e Desenvolvimento de Sistemas",
        turma: "Turma 1TDSA",
        rm: "RM 557074",
        foto: "/img/guilherme.png",
        githubUrl: "https://github.com/GuimaGuimas"
    },
    {
        nome: "Matheus Oliveira de Luna",
        descricao: "Profissional Back-End, cursando Análise e Desenvolvimento de Sistemas",
        turma: "Turma 1TDSA",
        rm: "RM 555547",
        foto: "/img/matheus.png",
        githubUrl: "https://github.com/mlunahodov"
    },
    {
        nome: "Nicollas Guedes Pontes",
        descricao: "Profissional Front-End, cursando Análise e Desenvolvimento de Sistemas",
        turma: "Turma 1TDSB",
        rm: "RM 556850",
        foto: "/img/nicollas.png",
        githubUrl: "https://github.com/NicollasGP"
    }
];

    return (

        <>

        <div id="integrantes">

        <img id="fundointegrantes" src="/img/fundoliso.png" alt="Imagem azul de fundo"/>

            <div id="caixa_integrantes">

            <article id="article_integrantes">

                <h1>Integrantes do projeto</h1>

                {membros.map((membro, index) => (
                    <Membro key={index} nome={membro.nome} descricao={membro.descricao} turma={membro.turma} rm={membro.rm} foto={membro.foto} githubUrl={membro.githubUrl}/>
                ))}

            </article>

            </div>

        </div>

        </>

    )
}