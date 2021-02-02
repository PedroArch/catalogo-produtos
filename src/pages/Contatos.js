import React from 'react';
import styles from './Contatos.module.css';
import foto from '../img/contato.jpg';

function Contatos() {
  return (
    <section className={styles.contatos  + ' animeLeft'}>
      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>pedrofrancocarvalho@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua do Limoeiro 11</li>
        </ul>
      </div>
    </section>
  );
}

export default Contatos;
