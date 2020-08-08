import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/14905296?s=460&u=8a15b91c0004fedff0e4129be58f7f63d89bbcd4&v=4" alt="Anderson Xavier" />
                <div>
                    <strong>Anderson Xavier</strong>
                    <span>Infortmática</span>
                </div>
            </header>
            <p>
                Profissional com mais de 07 anos de atuação em Tecnologia de Informação.
                <br /> <br />
                Com experiências Profissionais e Acadêmicas em Banco de Dados, Extração de Dados, Engenharia de Dados, Business Intelligence, Machine Learning e Desenvolvimento Mobile e Web
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;