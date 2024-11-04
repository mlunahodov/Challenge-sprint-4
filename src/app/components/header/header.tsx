"use client";
import { useState } from "react";
import "./header.css";
import Link from "next/link";
import { TfiMenuAlt } from "react-icons/tfi";


export default function Header () {

    const [menuActive, setMenuActive] = useState(false);
    
    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        const cabecalho = document.getElementById('cabecalho');
        cabecalho?.classList.toggle('active');
    };

    return (

        <>

        <header>
            
            <button id="botao_menu" onClick={handleMenuClick}>
                <TfiMenuAlt color="black" size={8}/>
            </button>
            
            <a className="opcao" href="https://www.portoseguro.com.br/"> <img src="/img/logo.png" alt="Logo da Porto" id="logo_porto"/> </a>

            <nav id="cabecalho">

                <div id="opcoes">

                    <Link href="/" className="opcao"><p className="p_opcao">Página Inicial</p></Link>
                    
                    <a className="opcao" href="https://youtu.be/wmUSL9P8GoY?si=VuphBerRxc662d9s"> <p className="p_opcao">Pitch</p> </a>

                    <Link href="pages/Integrantes" className="opcao"> <p className="p_opcao">Integrantes</p></Link>

                    <Link href="/pages/Duvidas" className="opcao"> <p className="p_opcao">Dúvidas</p> </Link>

                    <a id="opcao_porto" href="https://www.portoseguro.com.br/"><img src="/img/logo.png" alt="Logo da Porto"/></a>

                </div>

                <Link href="/pages/Perfil" className="acessar_perfil"> <p id="acessar_perfil">Acessar Perfil</p> </Link>
                
            </nav>
        
        </header>

        </>
    )

}