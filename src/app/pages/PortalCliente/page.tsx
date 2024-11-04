"use client";
import Servicos from "@/app/components/servicos/servicos";
import Link from "next/link";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineChat, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

declare global {
    interface Window {
      watsonChatInstance: any;
    }
  }

export default function PortalCliente() {

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
          window.watsonAssistantChatOptions = {
            integrationID: "c7077b45-bf91-4258-b490-32f1d0fd6a20",
            region: "us-south",
            serviceInstanceID: "bf4812e0-290d-4e49-a4b8-6261bd2db9bd",
            onLoad: async (instance) => {
              window.watsonChatInstance = instance;
              await instance.render();
            }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
            (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
          });
        `;
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);
    
      const openChatBot = () => {
        if (window.watsonChatInstance) {
          window.watsonChatInstance.openWindow();
        }
      };

    return (

        <>

        <div id="portalcliente">

            <img id="fundoportal" src="/img/fundoportal.png" alt="Imagem azul de fundo"/> 

            <div id="titulo_portal">
                <h1>BEM-VINDO AO PORTAL DO CLIENTE!</h1>
                <p>Aproveite os nossos serviços, a gente resolve pra você! </p>
            </div>

            <div className="fechar" id="seta"><MdOutlineKeyboardArrowDown size={40}/></div>

            <div id="servicos_titulo"> <h1>SELECIONE UMA OPÇÃO ABAIXO!</h1> </div>

            <div id="servicos_caixa">

                <div>
                <div className="servicos_opcoes" onClick={openChatBot}>
                    <Servicos icon={<FaRegClipboard size={50}/>} titulo="Realizar um Diagnóstico" descricao="Fornecemos diagnósticos precisos sobre o dano do seu automóvel. Faça um diagnóstico agora mesmo!"/>
                </div>

                <div className="servicos_opcoes" onClick={openChatBot}>
                    <Servicos icon={<TbMoneybag size={50}/>} titulo="Solicitar um Orçamento" descricao="Tenha acesso a orçamentos antecipados referente ao custo de reparação. Evite ser pego de surpresa!"/>
                </div>
                </div>

                <div>
                <div className="servicos_opcoes" onClick={openChatBot}>
                    <Servicos icon={<MdOutlineChat size={50}/>} titulo="Assistente Virtual" descricao="Nosso Assistente Virtual estará com você durante todo o processo para tirar as suas dúvidas!"/>
                </div>

                <div className="servicos_opcoes">
                    <Link href="/pages/Perfil"><Servicos icon={<CgProfile size={50}/>} titulo="Seu Perfil" descricao="Acesse o  seu perfil e veja todos os seus dados salvos!"/></Link>
                </div>
                </div>

            </div>

        </div>

        </>

    )
}