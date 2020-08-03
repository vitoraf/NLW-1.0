import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        
<article className="teacher-item">
                  <header>
                      <img src="https://pbs.twimg.com/profile_images/815301333645426688/Qa9hHgXB_400x400.jpg" alt="Vitor Ferreira"/>
                      <div>
                          <strong>Vitor Ferreira</strong>
                          <span>Musica</span>
                      </div>
                  </header>

                  <p>
                  You see, in this world there's two kinds of people, my friend: Those with loaded guns and those who dig
                  </p>
                  <footer>
                      <p>Preço por Hora
                          <strong>R$ 40,00</strong>                          
                      </p>
                      <button type="button">
                      <img src={whatsAppIcon} alt="Whatsapp"/>
                      Entrar em contato
                      </button>
                     
                  </footer>
              </article>
    )
}

export default TeacherItem