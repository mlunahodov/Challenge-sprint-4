"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadastroUsuario() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        tel: '',
        cpf: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        estado: '',
        cidade: '',
        password: '',
        confirm_password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCadastro = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            alert("As senhas não coincidem.");
            return;
        }
    }

    const [formErrors, setFormErrors] = useState({
        senhaMismatch: false,
        campoVazio: false,
    });

    const [senhaMismatch, setSenhaMismatch] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('usuario');

        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (formErrors.campoVazio || formErrors.senhaMismatch) {
            setFormErrors({ senhaMismatch: false, campoVazio: false });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem('usuario', JSON.stringify(formData));

        console.log('Dados do usuário:', formData); 
        router.push("/pages/CadastroCarro"); 
    }

    return (

        <>

        <div id="cadastro">

            <img id="fundocadastro" src="/img/fundoliso.png" alt="Imagem azul de fundo"/> 

            <div id="caixa_cadastro">

            <div id="titulo_usuario">
                <h1>Cadastro</h1>
                <p>Insira os seus dados pessoais abaixo:</p>
            </div>

            <form name="form_usuario" id="form_usuario" onSubmit={handleSubmit}>

                <label className="campos_usuario" htmlFor="nome">
                    <p>Digite o seu nome completo</p>
                    <input type="text" name="nome" id="nome" placeholder="Ana Beatriz Lima" required value={formData.nome} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="email">
                    <p>Digite o seu email</p>
                    <input type="email" name="email" id="email" placeholder="anabeatriz@gmail.com" required  value={formData.email} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="tel">
                    <p>Digite um número para contato</p>
                    <input type="tel" name="tel" id="tel" placeholder="00 12345-6789" maxLength={14} pattern="\d{2} \d{4,5}-\d{4}" required  value={formData.tel} onChange={handleChange}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9\- ]/g, '');
                    }} />
                </label>

                <label className="campos_usuario" htmlFor="cpf">
                    <p>Digite o seu cpf</p>
                    <input type="text" name="cpf" id="cpf" placeholder="111.222.333-44" maxLength={14} pattern="\d{3}.\d{3}.\d{3}-\d{2}" required  value={formData.cpf} onChange={handleChange}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9\-.]/g, '');
                    }} />
                </label>

                <label className="campos_usuario" htmlFor="cep">
                    <p>Digite o seu CEP</p>
                    <input type="text" name="cep" id="cep" placeholder="01217-010" maxLength={9} pattern="\d{5}-\d{3}" required value={formData.cep} onChange={handleChange}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9\- ]/g, '');
                    }}/>
                </label>

                <label className="campos_usuario" htmlFor="logradouro">
                    <p>Digite o logradouro</p>
                    <input type="text" name="logradouro" id="logradouro" placeholder="Rua Alameda Ribeiro da Silva" required  value={formData.logradouro} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="numero">
                    <p>Digite o número</p>
                    <input type="number" name="numero" id="numero" placeholder="275" min={0} required value={formData.numero} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="bairro">
                    <p>Digite o bairro</p>
                    <input type="text" name="bairro" id="bairro" placeholder="Campos Elíseos" required value={formData.bairro} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="estado">
                    <p>Digite o estado</p>
                    <select name="estado" id="estado" required value={formData.estado} onChange={handleChange}>
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
                </label>    

                <label className="campos_usuario" htmlFor="cidade">
                    <p>Digite a cidade</p>
                    <input type="text" name="cidade" id="cidade" placeholder="São Paulo" required value={formData.cidade} onChange={handleChange}/>
                </label>   

                <label className="campos_usuario" htmlFor="password">
                    <p>Crie uma senha</p>
                    <input type="password" name="password" id="password" placeholder="Crie uma senha que você possa se lembrar mais tarde" required value={formData.password} onChange={handleChange}/>
                </label>

                <label className="campos_usuario" htmlFor="confirm_password">
                    <p>Confirme a sua senha</p>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Reescreva a sua senha por garantia" required value={formData.confirm_password}
                    onChange={(e) => {
                        const confirmPassword = e.target.value; 
                        setFormData({ ...formData, confirm_password: confirmPassword }); 
                        setSenhaMismatch(confirmPassword !== formData.password);
                    }}/>
                </label>       

                {senhaMismatch && ( <p id="observacao" style={{ color: 'red' }}>** As senhas devem ser exatamente iguais.</p>)}

                <button name="button" type="button" onClick={() => window.history.back()}>Já tenho uma conta</button>
                <button name="submit" type="submit">Avançar</button>

            </form>

            </div>

        </div>

        </>

    )
}