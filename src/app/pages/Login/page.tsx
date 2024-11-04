"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLoginClick = () => {

        if (!userData.email || !userData.password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const storedUserData = JSON.parse(localStorage.getItem("usuario") || "{}");
        console.log("Dados armazenados:", storedUserData);

        if (storedUserData.email === userData.email && storedUserData.password === userData.password) {
            router.push("/pages/PortalCliente");
        } else {
            alert("Email ou senha incorretos.");
        }
    };
    
    return (
        <>
            <div id="login">

                <img id="fundologin" src="/img/fundoliso.png" alt="Imagem azul de fundo"/>

                <div id="caixa_login">

                    <div id="titulo_login"> <h1>Login</h1> </div>

                    <div id="campos">

                        <label className="titulo_campos">
                            <p>Digite o seu email</p>
                            <input type="email" name="email" id="email_login" placeholder="Ex: anabeatriz@gmail.com" value={userData.email} onChange={handleInputChange} required/>
                        </label>

                        <label className="titulo_campos">
                            <p>Digite a sua senha</p>
                            <input type="password" id="password" name="password" placeholder="Ex: Senha123" value={userData.password} onChange={handleInputChange} required/>
                        </label>

                        <Link href="/pages/Recuperacao" className="links_login"><p>Esqueci minha senha</p></Link>
                        <Link href="/pages/CadastroUsuario" className="links_login"><p>Ainda não tenho uma conta</p></Link>

                        <div id="form_login">
                            <button type="button" name="button" onClick={handleLoginClick}>Entrar</button>
                        </div>

                    </div>

                </div>
                
            </div>
        </>
    );
}
