import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

//declaração do objeto de interface com a propriedade title como string
interface PageHeaderProps{
    title: string;
}

//declaração typescript de um componente que vai receber o valor do title. Note que nesse caso, o componente é declarado como const, e não como function
const PageHeader:React.FC<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt= "Proffy"/>
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
        </div>
       
    </header>
    );
}

export default PageHeader;