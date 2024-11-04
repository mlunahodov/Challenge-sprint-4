"use client";
import CardPlano from "@/app/components/plano/plano";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Planos() {
    const router = useRouter(); 
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handlePlanSelect = (title: string) => {
        setSelectedPlan(title); 

        const planData = { plano: title };
        localStorage.setItem('planoSelecionado', JSON.stringify(planData));
        console.log('Dados armazenados:', planData);
        router.push("/pages/PortalCliente");
    };

    return (
        <>
            <div id="planos">

                <img id="fundoplanos" src="/img/fundoliso.png" alt="Imagem azul de fundo"/> 

                <div id="caixa_planos">

                    <h1>Antes de continuar, escolha um plano!</h1>
                    <div id="card_planos">

                        <CardPlano moeda="R$" preco="29,90" duracao="/mês" title="Plano Básico" description="2 Diagnósticos mensais + Acesso ilimitado ao Assistente Virtual + Duração de 1 mês." onSelect={() => handlePlanSelect("Plano Básico")}/>

                        <CardPlano moeda="R$" preco="59,90" duracao="/mês" title="Plano Padrão" description="Acesso padrão: 5 Diagnósticos e 2 Orçamentos mensais + Acesso ilimitado ao Assistente Virtual + Duração de 6 meses." onSelect={() => handlePlanSelect("Plano Padrão")}/>
                        
                        <CardPlano moeda="R$" preco="99,90" duracao="/mês" title="Plano Premium" description="Acesso completo: Diagnósticos e Orçamentos ilimitados + Acesso ilimitado ao Assistente Virtual + Direito às oficinas credenciadas Porto + Duração de 12 meses." onSelect={() => handlePlanSelect("Plano Premium")}/>

                    </div>

                </div>
                
            </div>
        </>
    );
}
