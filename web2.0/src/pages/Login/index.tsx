import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import bgImage from '../../assets/images/give-classes-background.png'

import './styles.css';

function Login(){
    return (
    <div id="page-login">
        <div id="page-login-content" className="container">
            <div className="logo-container">
               <img src={logoImg} alt="Proffy" /> 
               <h2>Sua plataforma de estudos online</h2>
           </div>
           
        </div>
        <div id="page-login-form">
           <form id="login-form">
                <fieldset>
                    <legend>
                        Fazer Login 
                        <button type="button">Criar uma conta</button>
                    </legend>
                <div className="input-group">
                    <div className="input-block"><
                        input name="email" type="email" required placeholder="E-mail" />
                        </div>
                    <div className="input-block">
                        <input name="password" type="password" required placeholder="Senha" />
                    </div>
                 </div>
                 <div className="login-options">
                     <div className="input-group"> 
                        <input type="checkbox" id="remember-check"/>
                         <label htmlFor="remember-check">Lembrar-me
                         </label>
                         
                         
                     </div>
                           <button type="button">
                             Esqueci minha senha
                         </button>               
                 </div>
                </fieldset>
            </form>
           </div>
    </div>
    )
}

export default Login;