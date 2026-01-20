import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import BranchesCard from '../components/common/organisms/branchesCard';
import {branches} from '../dataBranches'
const Branches = () => (
  <Root>
    <Head>
      <title> Sucursales</title>
    </Head>
    <div className="pt-5 py-md-5 px-4 mt-5 pt-5 pb-2 d-flex flex-wrap flex-column align-items-center justify-content-center" style={{minHeight:'80vh', background:'url(/images/visitanos.png)', backgroundSize: 'contain',
    backgroundRepeat: 'round' }}>
        <h1 className="my-5 font-color-white" > 🏪 Visítanos !</h1>
        <BranchesCard branches={branches}/>
      
    </div>
    <Footer />
  </Root>
);

export default Branches;
