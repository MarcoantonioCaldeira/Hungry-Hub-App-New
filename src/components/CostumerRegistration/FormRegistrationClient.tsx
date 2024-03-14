import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./style/style.scss";
import { InputRegister } from "../../design-systems/Inputs";
import { FontLogin } from "../../design-systems/Fonts";
import  LogoImg  from "../../assets/img/Logo.png";
import { Logo } from "../../design-systems/Images";
import ImgFundo from '../../assets/img/img_background.jpg';
import { ButtonLogin } from "../../design-systems/Buttons";
axios.defaults.withCredentials = true;

const steps = [
  {
    id: "FORM_ONE",
    title: "Vamos criar uma conta"
  },
  {
    id: "FORM_TWO",
    title: "Endereço de entrega"
  },
  {
    id: "FORM_THREE",
    title: "Dados de pagamento"
  }
];

export default function FormRegistrationClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    nome: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    endereco: {
      cep: "",
      uf: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero_end: "",
      complemento: ""
    },
    formaPagamento: {
      tipoPagamento: "",
      num_cartao: "",
      nomeImpresso: "",
      validadeCartao: "",
      cvvCartao: "",
      nome_Apelido: "",
      cpf_cnpj: ""
    }
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleInputChange(event:any) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleAddressInputChange(event:any) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        [name]: value
      }
    }));
  }

  function handlePaymentInputChange(event:any) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      formaPagamento: {
        ...prevState.formaPagamento,
        [name]: value
      }
    }));
  }

  async function handleSubmit(e:any) {
    e.preventDefault();
    //axios.defaults.withCredentials = true;

    try {
      const API_URL = 'http://localhost:5050';
      const response = await axios.post(API_URL + '/rest/cliente/save', formValues);


      if (response.status === 200) {
        console.log(response)
      }

      setLoading(false);
      setCurrentStep(0);
      setFormValues({
        email: "",
        nome: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        endereco: {
          cep: "",
          uf: "",
          cidade: "",
          bairro: "",
          rua: "",
          numero_end: "",
          complemento: ""
        },
        formaPagamento: {
          tipoPagamento: "",
          num_cartao: "",
          nomeImpresso: "",
          validadeCartao: "",
          cvvCartao: "",
          nome_Apelido: "",
          cpf_cnpj: ""
        }
      });
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }


  return (
    <>
        <div className='BodyRegistration'>

            <Logo>
                <img src={LogoImg} className='LogoImg'/>
            </Logo>

            <img  src={ImgFundo} className='Ilustration'/>

            <form className='FormRegistration' onSubmit={handleSubmit}>

                <div className='areaInputRegister'>

                <FontLogin className='Title'>{steps[currentStep].title}</FontLogin>

                <div className="fields">


                    {currentStep === 0 && (
                    <>
                        <div className="field">
                        <InputRegister
                            type="text"
                         
                            placeholder="Nome"
                            name="nome"
                            onChange={handleInputChange}
                            value={formValues.nome}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            onChange={handleInputChange}
                            value={formValues.email}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Telefone"
                            name="telefone"
                            onChange={handleInputChange}
                            value={formValues.telefone}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="password"
                            placeholder="Senha"
                            name="senha"
                            onChange={handleInputChange}
                            value={formValues.senha}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="password"
                            placeholder="Confirmar Senha"
                            name="confirmarSenha"
                            onChange={handleInputChange}
                            value={formValues.confirmarSenha}
                        />
                        </div>
                    </>
                    )}

                    {currentStep === 1 && (
                    <>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="CEP"
                            name="cep"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.cep}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="UF"
                            name="uf"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.uf}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Cidade"
                            name="cidade"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.cidade}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Bairro"
                            name="bairro"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.bairro}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Número"
                            name="numero_end"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.numero_end}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Rua"
                            name="rua"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.rua}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Complemento"
                            name="complemento"
                            onChange={handleAddressInputChange}
                            value={formValues.endereco.complemento}
                        />
                        </div>
                    </>
                    )}

                    {currentStep === 2 && (
                    <>
                        <div className='LabelArea'>
                            <input
                                type="radio"
                                placeholder="Tipo de Pagamento"
                                name="tipoPagamento"
                                onChange={handlePaymentInputChange}
                                value={formValues.formaPagamento.tipoPagamento = "1"}
                            />
                            <label>Debito</label>

                            <input
                                type="radio"
                                placeholder="Tipo de Pagamento"
                                name="tipoPagamento"
                                onChange={handlePaymentInputChange}
                                value={formValues.formaPagamento.tipoPagamento = "2"}
                            />
                            <label>Credito</label>
                        </div>
                        
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Número do Cartão"
                            name="num_cartao"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.num_cartao}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Nome Impresso"
                            name="nomeImpresso"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.nomeImpresso}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Validade do Cartão"
                            name="validadeCartao"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.validadeCartao}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="CVV do Cartão"
                            name="cvvCartao"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.cvvCartao}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="Nome ou Apelido do Cartão"
                            name="nome_Apelido"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.nome_Apelido}
                        />
                        </div>
                        <div className="field">
                        <InputRegister
                            type="text"
                            placeholder="CPF ou CNPJ"
                            name="cpf_cnpj"
                            onChange={handlePaymentInputChange}
                            value={formValues.formaPagamento.cpf_cnpj}
                        />
                        </div>
                    </>
                    )}
                </div>

                {currentStep < steps.length - 1 && (
                    <ButtonLogin className="button next" type="button" onClick={handleNext}>
                        <a>Próximo</a>
                    </ButtonLogin>
                )}

                {currentStep === steps.length - 1 && (
                    <ButtonLogin className="button submit" type="submit">
                    <a>Enviar</a>
                    </ButtonLogin>
                )}

                {loading && <h1 className="loader">Enviando...</h1>}
                </div>
            </form>
        
        </div>
      <Footer />
    </>
    

  );
}

