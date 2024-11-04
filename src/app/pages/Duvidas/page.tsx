"use client";
import Pergunta from "@/app/components/perguntas/perguntas";
import { useState } from "react";

export default function Duvidas () {


    const perguntasERespostas = [
        {
            pergunta: "Quem somos?",
            resposta: "Somos uma empresa dedicada a simplificar o processo de reparação automotiva no país. Oferecemos diagnósticos antecipados e orçamentos precisos para agilizar o atendimento, eliminando etapas demoradas e imprecisas, como avaliações mal diagnosticadas e valores que podem vir a aumentar ao decorrer da reparação."
        },
        {
            pergunta: "Como eu posso ter acesso aos serviços?",
            resposta: "Simples! Basta fazer o seu cadastro em nosso site e escolher o plano que mais se encaixa para você. Nossa Assistente Virtual te ajudará em todos os processos!"
        },
        {
            pergunta: "Os diagnósticos são feitos de forma online ou presencial?",
            resposta: "Os diagnósticos são feitos de forma online, utilizando tecnologia avançada para fornecer uma análise precisa antes mesmo de levar o veículo a uma oficina. Isso agiliza o processo e evita surpresas durante o reparo."
        },
        {
            pergunta: "Como funciona o pagamento?",
            resposta: "O pagamento é realizado diretamente em nossa plataforma. Oferecemos várias opções de plano, e você escolhe a que melhor se adapta à sua situação. Tudo de forma segura e prática."
        },
        {
            pergunta: "Posso cancelar o meu plano a qualquer momento?",
            resposta: "Sim, você pode cancelar o seu plano a qualquer momento, sem burocracias. Basta acessar o seu perfil em nosso site e seguir as instruções de cancelamento."
        }
    ];

    const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

    return (

        <>

        <div id="duvidas">

        <img id="fundoduvidas" src="/img/fundoliso.png" alt="Imagem azul de fundo"/>

            <div id="caixa_duvidas">

            <h1>Perguntas Frequentes</h1>
            
                <article id="perguntas">
                    {perguntasERespostas.map((item, index) => (
                        <Pergunta key={index} pergunta={item.pergunta} resposta={item.resposta} index={index} perguntaAberta={perguntaAberta} setPerguntaAberta={setPerguntaAberta}/>
                    ))}
                </article>

            </div>

        </div>

        </>

    )
}