import { useState } from 'react';
import Link from 'next/link';
import styles from '../../style/scss/components/_contactForm.module.css';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import Swal from 'sweetalert2';

const alertContent = () => {
  Swal.fire({
    title: 'Felicitaciones!',
    text: 'Tu mensaje fue enviado exitosamente y pronto le responderemos ',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const INITIAL_STATE = {
  nombre: '',
  correo: '',
  mensaje: '',
};
const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const [isSelected, setIsSelected] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSelected === false) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        html: 'Por favor de clic en el cuadro <b>He leído la política de privacidad</b>',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    const { nombre, correo, mensaje } = contact;
    if (nombre !== '' && correo !== '' && mensaje !== '') {
      try {
        const url = `${baseUrl}/api/contact`;
        const payload = { nombre, correo, mensaje };
        await axios.post(url, payload);
        setContact(INITIAL_STATE);
        setIsSelected(false);
        alertContent();
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Por favor diligencia todos los datos',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }
  };

  return (
    <form
      className={`${styles.form} d-flex flex-column justify-content-center pl-5 m-0 mw-600 mw-450 g-20`}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='nombre'
        value={contact.nombre}
        onChange={handleChange}
        placeholder='Nombre'
        className={styles.input}
      />
      <input
        type='email'
        name='correo'
        value={contact.correo}
        onChange={handleChange}
        placeholder='Correo electrónico'
        className={styles.input}
      />
      <textarea
        name='mensaje'
        value={contact.mensaje}
        onChange={handleChange}
        placeholder='Mensaje'
        className={`${styles.textarea} ${styles.input}`}
      />
      <label className={`d-flex align-items-center pl-3 ${styles.label}`}>
        <input
          onChange={() => {
            setIsSelected(!isSelected);
          }}
          checked={isSelected}
          className={styles.checkbox}
          type='checkbox'
        />
        <Link href='/policy'>
          <a className={'font-color-white font-weight-semibold'}>
            He leído y acepto la Política de Privacidad
          </a>
        </Link>
      </label>
      <button type='submit' className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
