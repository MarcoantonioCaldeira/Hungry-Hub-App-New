import React, { Component, useRef } from 'react';
import axios from 'axios';
import PrimaryDataForm from './PrimaryDataForm';
import SecondDataForm from './SecondDataForm';
import ThirdDataForm from './ThirdDataForm';
import { ButtonLogin } from '../../design-systems/Buttons';
import Footer from '../Footer/Footer';
import { useForm } from 'react-hook-form';
import './style/style.scss';

interface State {
    currentStep: number;
    parte1Data: {
        nome: string;
        email: string;
        telefone: string;
        senha: string;
        confirmarSenha: string;
    };
    parte2Data: {
        cep: string;
        uf: string;
        cidade: string;
        bairro: string;
        numero_end: string;
        rua: string;
        complemento: string;
    };
    parte3Data: {
        tipo_pagamento: string;
        num_cartao: string;
        nomeImpresso: string;
        validadeCartao: string;
        cvvCartao: string;
        nome_Apelido: string;
        cpf_cnpj: string;
    };
    showSuccessMessage: boolean;
}

axios.defaults.withCredentials = true;

class CostumerRegistration extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentStep: 1,
            parte1Data: {
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                confirmarSenha: '',
            },
            parte2Data: {
                cep: '',
                uf: '',
                cidade: '',
                bairro: '',
                numero_end: '',
                rua: '',
                complemento: '',
            },
            parte3Data: {
                tipo_pagamento: '',
                num_cartao: '',
                nomeImpresso: '',
                validadeCartao: '',
                cvvCartao: '',
                nome_Apelido: '',
                cpf_cnpj: '',
            },
            showSuccessMessage: false,
        };
    }

    handleParte1Change = (parte1Data: Partial<State['parte1Data']>) => {
        this.setState((prevState) => ({
            parte1Data: { ...prevState.parte1Data, ...parte1Data },
        }));
    };

    handleParte2Change = (parte2Data: Partial<State['parte2Data']>) => {
        this.setState((prevState) => ({
            parte2Data: { ...prevState.parte2Data, ...parte2Data },
        }));
    };

    handleParte3Change = (parte3Data: Partial<State['parte3Data']>) => {
        this.setState((prevState) => ({
            parte3Data: { ...prevState.parte3Data, ...parte3Data },
        }));
    };

    handleNextStep = () => {
        this.setState((prevState) => ({
            currentStep: prevState.currentStep + 1,
        }));
    };

    handlePreviousStep = () => {
        this.setState((prevState) => ({
            currentStep: prevState.currentStep - 1,
        }));
    };

    render() {
        const { currentStep, parte1Data, parte2Data, parte3Data, showSuccessMessage } = this.state;

        const onSubmit = async (data: State) => {
            try {
                const API_URL = 'http://localhost:5050';
                const response = await axios.post(API_URL + '/rest/cliente/save', data);
                console.log(response)

                if (response.status === 200) {
                    this.setState({ showSuccessMessage: true });
                    console.log(response)
                }
            } catch (error) {
                console.error('Ocorreu um erro ao cadastrar:', error);
            }
        };

        let formToShow;
        if (currentStep === 1) {
            formToShow = (
                <>
                    <PrimaryDataForm data={parte1Data} onParte1Change={this.handleParte1Change} />
                    <div className='Buttons_1'>
                        <ButtonLogin className="btn_login_1" onClick={this.handleNextStep}>
                            <a>Próximo</a>
                        </ButtonLogin>
                    </div>
                </>
            );
        } else if (currentStep === 2) {
            formToShow = (
                <>
                    <SecondDataForm data={parte2Data} onParte2Change={this.handleParte2Change} />
                    <div className='Buttons'>
                        <ButtonLogin className="btn_login" onClick={this.handlePreviousStep}>
                            <a>Anterior</a>
                        </ButtonLogin>
                        <ButtonLogin className="btn_login" onClick={this.handleNextStep}>
                            <a>Próximo</a>
                        </ButtonLogin>
                    </div>
                </>
            );
        } else if (currentStep === 3) {
            formToShow = (
                <>
                    <ThirdDataForm
                        data={parte3Data}
                        onParte3Change={this.handleParte3Change}
                        showSuccessMessage={showSuccessMessage}
                    />
                    <div className='Buttons'>
                        <ButtonLogin className="btn_login" onClick={this.handlePreviousStep}>
                            <a>Anterior</a>
                        </ButtonLogin>
                        <ButtonLogin className="btn_login" onClick={onSubmit}>
                            <a>Cadastrar</a>
                        </ButtonLogin>
                    </div>
                </>
            );
        }

        return (
            <>
                <div className='BodyRegistration'>
                    {formToShow}
                </div>
                <Footer />
            </>
        );
    }
}

export default CostumerRegistration;
