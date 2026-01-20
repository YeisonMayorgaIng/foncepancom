import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ContactForm from '../components/sendMessage/ContactForm';
import styles from '../style/scss/pages/_contactUs.module.css';

const ContactUs = () => (
  <Root>
    <Head>
      <title>Contactenos</title>
    </Head>
    <div className='w-100 p-0'>
      <section className={`row py-md-5 px-5 mt-5 pt-5 ${styles.heroSection}`}>
        <header className={`py-4 pl-4 ${styles.header}`}>
          <h2 className={styles.title}>
            Déjanos tu consulta en este formulario
          </h2>
          <h5 className={styles.subtitle}>para saber cómo podemos ayudarte</h5>
        </header>
        <ContactForm />
      </section>
    </div>
    <Footer />
  </Root>
);

export default ContactUs;
