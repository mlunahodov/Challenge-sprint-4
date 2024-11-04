"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Perfil() {
    const router = useRouter();

    const [userData, setUserData] = useState({
        nome: "",
        email: "",
        tel: "",
        cpf: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        estado: "",
        cidade: "",
        password: "",
    });

    const [carroData, setCarroData] = useState({
        modelo: "",
        marca: "",
        placa: "",
        ano: "",
        ultima_vistoria: "",
        atual: "",
        data: "",
    });

    const [plano, setPlano] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("usuario") || "{}");
        const storedCarroData = JSON.parse(localStorage.getItem("carroData") || "{}");
        const storedPlano = JSON.parse(localStorage.getItem("planoSelecionado") || "{}");

        setUserData(storedUserData);
        setCarroData(storedCarroData);
        setPlano(storedPlano.plano);
    }, []);

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleCarroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarroData({ ...carroData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("usuario", JSON.stringify(userData));
        localStorage.setItem("carroData", JSON.stringify(carroData));
        alert("Dados atualizados com sucesso!");
        setIsEditing(false); 
    };

    return (

        <>
            <div id="perfil">

            <img id="fundoperfil" src="/img/fundoliso.png" alt="Imagem azul de fundo" />

            <div id="caixa_perfil">

                <h1>Seu Perfil</h1>

                {isEditing ? (

                    <form name="form_perfil" id="form_perfil" onSubmit={handleSubmit}>

                        <div id="editar">

                            <h2>Dados Pessoais</h2>

                            <div id="dados_editar">

                            <div className="campos_editar">
                                <p>Digite o seu nome</p>
                                <input type="text" name="nome" id="nome" placeholder="Ana Beatriz Lima" required value={userData.nome} onChange={handleUserChange}/>
                            </div>

                            <div className="campos_editar">
                                <p>Digite o seu email</p>
                                <input type="email" name="email" id="email" placeholder="anabeatriz@gmail.com" required  value={userData.email} onChange={handleUserChange}/>
                            </div>

                            <div className="campos_editar">
                                <p>Digite o seu número</p>
                                <input type="tel" name="tel" id="tel" placeholder="00 12345-6789" maxLength={14} pattern="\d{2} \d{4,5}-\d{4}" required  value={userData.tel} onChange={handleUserChange}
                                onInput={(e) => {
                                const target = e.target as HTMLInputElement;
                                target.value = target.value.replace(/[^0-9\- ]/g, '');
                                }} />
                            </div>

                            <div className="campos_editar">
                                <p>Digite o seu cpf</p>
                                <input type="text" name="cpf" id="cpf" placeholder="111.222.333-44" maxLength={14} pattern="\d{3}.\d{3}.\d{3}-\d{2}" required  value={userData.cpf} onChange={handleUserChange}
                                onInput={(e) => {
                                const target = e.target as HTMLInputElement;
                                target.value = target.value.replace(/[^0-9\-.]/g, '');
                                }} />
                            </div>

                            <div className="campos_editar">
                                <p>Digite o seu CEP</p>
                                <input type="text" name="cep" id="cep" placeholder="01217-010" maxLength={9} pattern="\d{5}-\d{3}" required value={userData.cep} onChange={handleUserChange}
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    target.value = target.value.replace(/[^0-9\- ]/g, '');
                                }}/>
                            </div>
                            
                            <div className="campos_editar">
                                <p>Digite o logradouro</p>
                                <input type="text" name="logradouro" id="logradouro" placeholder="Rua Alameda Ribeiro da Silva" required  value={userData.logradouro} onChange={handleUserChange}/>
                            </div>

                            <div className="campos_editar">
                                <p>Digite o número</p>
                                <input type="number" name="numero" id="numero" placeholder="275" min={0} required value={userData.numero} onChange={handleUserChange}/>
                            </div>

                            <div className="campos_editar">
                                <p>Digite o bairro</p>
                                <input type="text" name="bairro" id="bairro" placeholder="Campos Elíseos" required value={userData.bairro} onChange={handleUserChange}/>
                            </div>
                            
                            <div className="campos_editar">
                            <p>Digite o estado</p>
                            <select name="estado" id="estado" required value={userData.estado} onChange={handleUserChange}>
                                <option value="">Selecione o seu estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                            </div>

                            <div className="campos_editar">
                                <p>Digite a cidade</p>
                                <input type="text" name="cidade" id="cidade" placeholder="São Paulo" required value={userData.cidade} onChange={handleUserChange}/>
                            </div>
                            </div>

                            <h2>Dados do Carro</h2>

                            <div id="dados_editar">

                            <div className="campos_editar">
                                <p>Modelo</p>
                                <input type="text" name="modelo" id="modelo" placeholder="HB20" value={carroData.modelo} onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Marca</p>
                                <input type="text" name="marca" id="marca" placeholder="Hyundai" value={carroData.marca} onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Placa</p>
                                <input type="text" name="placa" id="placa" maxLength={7} placeholder="0A1B2C" value={carroData.placa}onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Ano</p>
                                <input type="number" name="ano" id="ano" placeholder="2020" min={1900} max={new Date().getFullYear()} value={carroData.ano} onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Quilometragem última vistoria</p>
                                <input type="number" name="ultima_vistoria" id="ultima_vistoria" placeholder="15.000 km" min={0} value={carroData.ultima_vistoria} onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Quilometragem atual</p>
                                <input type="number" name="atual" id="atual" placeholder="22.000 km" min={0} value={carroData.atual}onChange={handleCarroChange} required/>
                            </div>

                            <div className="campos_editar">
                                <p>Data da última vistoria</p>
                                <input type="date" name="data" id="data" placeholder="22/10/2024" value={carroData.data} onChange={handleCarroChange} required/>
                            </div>
                            </div>

                            <div id="botoes_editar">
                                <button type="button" id="cancelar_editar" onClick={() => setIsEditing(false)}>Cancelar</button>
                                <button type="submit">Salvar Alterações</button>
                            </div>

                        </div>

                    </form>

                ) : (
                    <div id="dados_perfil">

                    <h2>Dados Pessoais</h2>

                    <div className="dados_pessoais">

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Nome:</h3>
                            <p className="dados">{userData.nome}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Email:</h3>
                            <p className="dados">{userData.email}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Telefone:</h3>
                            <p className="dados">{userData.tel}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">CPF:</h3>
                            <p className="dados">{userData.cpf}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">CEP:</h3>
                            <p className="dados">{userData.cep}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Logradouro:</h3>
                            <p className="dados">{userData.logradouro}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Número:</h3>
                            <p className="dados">{userData.numero}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Bairro:</h3>
                            <p className="dados">{userData.bairro}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Estado:</h3>
                            <p className="dados">{userData.estado}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Cidade:</h3>
                            <p className="dados">{userData.cidade}</p>
                        </div>
                    </div>

                    <h2>Dados do Carro</h2>

                    <div className="dados_pessoais">

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Modelo:</h3>
                            <p className="dados">{carroData.modelo}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Marca:</h3>
                            <p className="dados">{carroData.marca}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Placa:</h3>
                            <p className="dados">{carroData.placa}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Ano:</h3>
                            <p className="dados">{carroData.ano}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Quilometragem antiga:</h3>
                            <p className="dados">{carroData.ultima_vistoria}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Quilometragem atual:</h3>
                            <p className="dados">{carroData.atual}</p>
                        </div>

                        <div className="campos_dados">
                            <h3 className="titulo_dados">Data última vistoria:</h3>
                            <p className="dados">{carroData.data}</p>
                        </div>
                    </div>

                    <h2>Plano Selecionado</h2>

                    <div className="dados_pessoais">

                        <div className="campos_dados">
                            <h3 className="titulos_dados">Tipo de Plano:</h3>
                            <p className="dados">{plano}</p>
                        </div>

                    </div>
                        <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
                    </div>
                )}

            </div>
            
        </div>
        </>

    );
}
