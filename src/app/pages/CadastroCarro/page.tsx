"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadastroCarro() {
    const router = useRouter();

    const [carroData, setCarroData] = useState({
        modelo: "",
        marca: "",
        placa: "",
        ano: "",
        ultima_vistoria: "",
        atual: "",
        data: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarroData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("carroData", JSON.stringify(carroData));
        console.log("Dados do carro:", carroData);
        router.push("/pages/Planos");
    };

    useEffect(() => {
        const storedCarroData = localStorage.getItem("carroData");
        if (storedCarroData) {
            setCarroData(JSON.parse(storedCarroData));
        }
    }, []);

    const handleBackClick = () => {
        router.push("/pages/CadastroUsuario");
    };

    return (
        <div id="cadastro_carro">

            <img id="fundocarro" src="/img/fundoliso.png" alt="Imagem azul de fundo" />

            <div id="caixa_carro">

                <div id="titulo_carro">
                    <h1>Cadastro</h1>
                    <p>Agora nos conte mais sobre o seu automóvel!</p>
                </div>

                <form name="form_carro" id="form_carro" onSubmit={handleSubmit}>

                    <label className="campos_carro" htmlFor="modelo">
                        <p>Modelo</p>
                        <input type="text" name="modelo" id="modelo" placeholder="HB20" value={carroData.modelo} onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="marca">
                        <p>Marca</p>
                        <input type="text" name="marca" id="marca" placeholder="Hyundai" value={carroData.marca} onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="placa">
                        <p>Placa</p>
                        <input type="text" name="placa" id="placa" maxLength={6} placeholder="0A1B2C" value={carroData.placa}onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="ano">
                        <p>Ano</p>
                        <input type="number" name="ano" id="ano" placeholder="2020" min={1900} max={new Date().getFullYear()} value={carroData.ano} onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="ultima_vistoria">
                        <p>Quilometragem da última vistoria</p>
                        <input type="number" name="ultima_vistoria" id="ultima_vistoria" placeholder="15.000 km" min={0} value={carroData.ultima_vistoria} onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="atual">
                        <p>Quilometragem atual</p>
                        <input type="number" name="atual" id="atual" placeholder="22.000 km" min={0} value={carroData.atual}onChange={handleInputChange} required/>
                    </label>

                    <label className="campos_carro" htmlFor="data">
                        <p>Data da última vistoria</p>
                        <input type="date" name="data" id="data" placeholder="22/10/2024" value={carroData.data} onChange={handleInputChange} required/>
                    </label>

                    <p id="observacao_carro">** Você pode encontrar informações sobre a quilometragem no painel do seu veículo.</p>

                    <button type="button" onClick={handleBackClick}>Voltar para a página anterior</button>
                    <button name="submit" type="submit">Criar Conta</button>

                </form>

            </div>
            
        </div>
    );
}
