import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Collections from '../components/collections/Collections';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/Footer';
import styles from '../style/scss/pages/_collection.module.css'

const Home = () => (
  <Root>
    <Head>
      <title>Categorias</title>
    </Head>
    <div className={`row py-md-5 px-5 mt-5 pt-5 about-hero mx-0 pb-2 d-flex flex-column g-40 ${styles.div}`}>
      <header className={`py-4 pl-4 ${styles.header}`}>
        <h2 className={styles.h2}>Nuestros productos</h2>
      </header>
      <Collections />
      <SocialMedia color="white" />
    </div>
    <Footer />
  </Root>
);

export default Home;
