import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import Collections from '../components/collections/Collections';
import HomeBanner from '../components/homepage/HomeBanner';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';
import MakeOwnCake from '../components/productAssets/MakeOwnCake';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Foncepan</title>
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      <meta name='title' content='Panaderia Foncepan' key='title' />
      <meta
        name='description'
        content='Sitio oficial de Panaderia Foncepan que buen Pan!'
      />
      <meta property='og:title' content='Panaderia Foncepan' />
      <meta property='og:image' content='https://foncepan.com/image/LOGO.png' />
      <meta
        property='og:description'
        content='Sitio oficial de Panaderia Foncepan que buen Pan!'
      />
      <meta property='og:url' content='https://foncepan.com' />
      <meta property='twitter:title' content='Panaderia Foncepan' />
      <meta
        property='twitter:image'
        content='https://foncepan.com/image/LOGO.png'
      />
      <meta
        property='twitter:description'
        content='Sitio oficial de Panaderia Foncepan que buen Pan!'
      />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
    <HeroSection />
    <HomeBanner disable={true} />
    {/* <CategoryBanner /> */}
    {/* <ProductsBanner /> */}
    <Collections />
    <MakeOwnCake />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
