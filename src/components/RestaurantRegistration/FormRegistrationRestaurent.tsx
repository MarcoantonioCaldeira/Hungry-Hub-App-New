import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./style/style.scss";
import { InputRegister } from "../../design-systems/Inputs";
import { FontLogin } from "../../design-systems/Fonts";
import  LogoImg  from "../../assets/img/Logo.png";
import { Logo } from "../../design-systems/Images";
// import ImgFundo from '../../assets/img/img_background.jpg';
import { ButtonLogin } from "../../design-systems/Buttons";
axios.defaults.withCredentials = true;

const steps = [
  {
    id: "FORM_ONE",
    title: "Vamos criar uma conta"
  },
  {
    id: "FORM_TWO",
    title: "Endereço"
  }
];

export default function FormRegistrationRestaurent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(
    {
        nome_proprietario: "",
        cnpj_cpf: "",
        telefone_Restaurante: "",
        email:"",
        senha: "",
        confirmarSenha: "",
        foto_Restaurante:"",
        especialidade: "",
        nome_restaurante: "",
        descricao: "",
        endereco:{
          cep:"",
          uf:"",
          cidade:"",
          bairro:"",
          rua: "",
          numero_end: "",
          complemento: ""
        }
      }
  );

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

  async function handleSubmit(e:any) {
    e.preventDefault();
  
    try {
      const API_URL = 'http://localhost:5050';
      const response = await axios.post(API_URL + '/rest/cliente/save', formValues);


      if (response.status === 200) {
        console.log(response)
      }

      setLoading(false);
      setCurrentStep(0);
      setFormValues({
        nome_proprietario: "",
        cnpj_cpf: "",
        telefone_Restaurante: "",
        email:"",
        senha: "",
        confirmarSenha: "",
        foto_Restaurante:"",
        especialidade: "",
        nome_restaurante: "",
        descricao: "",
        endereco:{
          cep:"",
          uf:"",
          cidade:"",
          bairro:"",
          rua: "",
          numero_end: "",
          complemento: ""
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
            <a href="/">
              <Logo>
                  <img src={LogoImg} className='LogoImg'/>
              </Logo>
            </a>
          

            {/* <img  src={ImgFundo} className='Ilustration'/> */}

            <form className='FormRegistration' onSubmit={handleSubmit}>

                <div className='areaInputRegister'>

                <FontLogin className='Title'>{steps[currentStep].title}</FontLogin>

                <div className="fields">


                    {currentStep === 0 && (
                    <>
                      <div className="field">
                          <InputRegister
                              type="text"
                              placeholder="Foto do Restaurante"
                              name="foto_Restaurante"
                              onChange={handleInputChange}
                              value={formValues.foto_Restaurante}
                          />
                        </div>
                        <div className="field">
                          <InputRegister
                              type="text"
                          
                              placeholder="Nome do Proprietario"
                              name="nome_proprietario"
                              onChange={handleInputChange}
                              value={formValues.nome_proprietario}
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
                            placeholder="Telefone do Restaurante"
                            name="telefone_Restaurante"
                            onChange={handleInputChange}
                            value={formValues.telefone_Restaurante}
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

