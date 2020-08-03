import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/49207932?s=460&u=e60661f8a354bb248ba9adebf35a0eeef871b865&v=4"
          alt=""
        />
        <div>
          <strong>Matheus Pires</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Nisisimilique quisquam repudiandae quod culpa molestiae, totam dolores
        tempore fuga sed numquam ratione? Quia maxime sequi sunt voluptas! Cum,
        numquam quis?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
