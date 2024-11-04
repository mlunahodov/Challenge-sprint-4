import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (

    <>

    <img className="fechar" id="imagem_fundo" src="img/fundo.png" alt="Imagem de Fundo"/>

    <div id="slogan">

    <div id="titulo">
      <h1>TODO CUIDADO É</h1>
      <h1 id="titulo_destaque">PORTO!</h1>
    </div>

    <p>Resolvemos tudo para você quando o assunto é a reparação do seu automóvel, não perca mais tempo!</p>

    <div id="botoes">
      <Link href="/pages/Login"> <p>Login</p> </Link>
      <Link href="/pages/CadastroUsuario"> <p>Cadastro</p> </Link>
    </div>

    </div>

    <div className="fechar" id="seta"><MdOutlineKeyboardArrowDown size={40}/></div>

    <div className="fechar" id="titulo_servicos"><h1>CONHEÇA OS NOSSOS SERVIÇOS!</h1></div>

    <div id="div_servicos">

    <article id="servicos">

        <section className="coluna" id="coluna1">
            <div className="p_coluna"> <h5>Diagnósticos precisos e detalhados</h5> </div>
            <div className="p_coluna"> <h5>Serviços online, aproveite sem sair de casa</h5> </div>
            <div className="p_coluna"> <h5>Orçamentos antecipados e verdadeiros</h5> </div>
        </section>

        <section className="coluna" id="coluna2"> 
            <div className="p_coluna"> <h5>Planos acessiveis e que cabem no seu bolço</h5> </div>
            <div className="p_coluna"><h5>Nosso assistente estará com você a todo momento</h5> </div>
            <div className="p_coluna"> <h5>Faça o seu cadastro e tenha acesso a tudo isso</h5> </div>
        </section>
            
    </article>

    </div>

    </>

  );
}
