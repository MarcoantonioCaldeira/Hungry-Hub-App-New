import { Component } from 'react';
import axios from 'axios';
import PrimaryDataForm from './PrimaryDataForm';
import SecondDataForm from './SecondDataForm';
import ThirdDataForm from './ThirdDataForm';
import { ButtonLogin } from '../../design-systems/Buttons';
import Footer from '../Footer/Footer';
import './style/style.scss'



interface State {
    currentStep: number;
    parte1Data: {
        nome: string,
        email: string,
        telefone: string,
        senha: string,
        confirmarSenha: string,
    };
    parte2Data: {
        cep: string,
        uf: string,
        cidade: string,
        bairro: string,
        numero_end: string,
        rua: string,
        complemento: string
    };
    parte3Data: {
        tipo_pagamento: string,
        num_cartao: string,
        nomeImpresso: string,
        validadeCartao: string,
        cvvCartao: string,
        nome_Apelido: string,
        cpf_cnpj: string
      
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
                email:'',
                telefone:'',
                senha:'',
                confirmarSenha:'',
            },
            parte2Data: {
                cep:'',
                uf:'',
                cidade:'',
                bairro:'',
                numero_end:'',
                rua:'',
                complemento:'',
            },
            parte3Data: {
                tipo_pagamento: '',
                num_cartao: '',
                nomeImpresso: '',
                validadeCartao:'',
                cvvCartao:'',
                nome_Apelido:'',
                cpf_cnpj:'',
              
            },
            showSuccessMessage: false
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

    handleFormSubmit = async () => {
        const { parte1Data, parte2Data, parte3Data } = this.state;
       
        const clienteData = {
            email:parte1Data.email,
            telefone:parte1Data.telefone,
            nome:parte1Data.nome,
            senha: parte1Data.senha,
            confirmarSenha: parte1Data.confirmarSenha,
            formaPagamento: {
                tipo_pagamento: parte3Data.tipo_pagamento,
                num_cartao: parte3Data.num_cartao,
                nomeImpresso: parte3Data.nomeImpresso,
                validadeCartao:parte3Data.validadeCartao,
                cvvCartao:parte3Data.cvvCartao,
                nome_Apelido:parte3Data.nome_Apelido,
                cpf_cnpj:parte3Data.cpf_cnpj,
            },
            endereco: {
                cep:parte2Data.cep,
                uf: parte2Data.uf,
                cidade:parte2Data.cidade,
                bairro:parte2Data.bairro,
                rua:parte2Data.rua,
                numero_end:parte2Data.numero_end,
                complemento:parte2Data.complemento,
            },
        };

        try {
            const API_URL = 'http://localhost:5050'; 
            const response = await axios.post(API_URL + '/rest/cliente/save', clienteData);
            

            if (response.status === 200) {
                this.setState({ showSuccessMessage: true });
            }
        } catch (error) {
            console.error('Ocorreu um erro ao cadastrar:', error);

        }
    };

    render() {

        const { currentStep } = this.state;
    
        let formToShow;

        if (currentStep === 1) {
            formToShow = <PrimaryDataForm data={this.state.parte1Data} onParte1Change={this.handleParte1Change} />;
        } else if (currentStep === 2) {
            formToShow = <SecondDataForm data={this.state.parte2Data} onParte2Change={this.handleParte2Change} />;
        } else if (currentStep === 3) {
            formToShow = <ThirdDataForm data={this.state.parte3Data} onParte3Change={this.handleParte3Change} showSuccessMessage={this.state.showSuccessMessage} />      
        } 

        return (
            <>
             <div className='BodyRegistration'>
                {formToShow}
                
                {currentStep > 1 && <ButtonLogin  className="btn_login" onClick={this.handlePreviousStep}><a>Anterior</a></ButtonLogin>}
                {currentStep < 3 && <ButtonLogin className="btn_login" onClick={this.handleNextStep}><a>Próximo</a></ButtonLogin>}
                {currentStep === 3 && <ButtonLogin className="btn_login" onClick={this.handleFormSubmit}><a>Cadastrar</a></ButtonLogin>}
                
            </div>
            <Footer />
            </>
           
        );
    }

    



}



export default CostumerRegistration;
