import Link from "next/link";

export default function Recuperacao() {

    return (

        <>

        <div id="recuperacao">
            
            <img id="FundoRecuperacao" src="/img/fundoliso.png" alt="Imagem azul de fundo" />

            <div id="caixa_recuperacao">

                <div id="titulo_recuperacao">
                    <h1>Recuperar Senha</h1>
                </div>

                <div id="campos_recuperacao">

                    <p id="email_recuperacao">Enviaremos um link de recuperação em seu email para recuperar a sua senha</p> <input type="email" name="email" id="email" placeholder="Ex: 123456" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/> 

                    <div id="botao_recuperar">
                        <Link href="/pages/Login"> <p>Recuperar senha</p> </Link>
                    </div>

                </div>

            </div>

        </div>

        </>

    )
}