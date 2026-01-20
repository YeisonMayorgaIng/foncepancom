import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import Image from 'next/image';
// import styles from '../style/scss/pages/_about.scss';

const About = () => (
  <Root>
    <>
      <Head>
        <title> Nosotros</title>
      </Head>
      <div className="about-container">
        {/* Row */}
        <div className="row py-md-5 px-4 mt-5 pt-5 about-hero pb-lg-8">
          <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-md-5 px-4 justify-content-center">
              <h2 className="font-size-header mb-4">NUESTRA MISION</h2>
              <h4 className="font-size-subheader mb-4">
                Satisfacer las necesidades de los clientes, ofreciendo productos
                alimenticios de alta calidad, acompañado de un excelente
                servicio, que permita a nuestros clientes un alto nivel de
                satisfacción alimentaría, optando por FONCEPAN como la mejor
                proveedora de productos de panadería y pastelería de la ciudad.
              </h4>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="about-image h-100">
              <div className="d-flex align-items-center px-5 justify-content-center h-100">
                <Image
                  className="h-100 w-100 imageAbout"
                  src="/images/business-strategy.webp"
                  alt="nuestra mision"
                  layout='fill'
                />

              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="md-reverse row py-md-5 px-4 pt-md-3 pb-md-3 pb-lg-8">
          <div className="col-12 px-md-6 px-lg-4 col-lg-6">
            <div className="about-image h-100">
              <div className="d-flex align-items-center px-5 justify-content-center h-100">
              <Image
                  className="h-100 w-100 imageAbout"
                  src="/images/business-vision.webp"
                  alt="vision foncepan"
                  layout='fill'
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column justify-content-center py-md-5 px-4">
              <h3 className="font-size-header mb-4">NUESTRA VISION</h3>
              <h4 className="font-size-subheader mb-4">
                Ser una empresa reconocida por la calidad y satisfacción de
                nuestros productos y servicios, mediante el compromiso y el
                profesionalismo de nuestro personal buscando de esta manera
                deleitarlos con las ricuras que ofrece el campo de la panadería
                y pastelería.
              </h4>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="pb-4 row py-md-5 px-4">
          <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column justify-content-center py-md-5 px-4">
              <h3 className="font-size-header mb-4">
                NUESTRA POLITICA DE CALIDAD
              </h3>
              <h4 className="font-size-subheader mb-4">
                Para FONCEPAN la mejora continua se basa en el cumplimiento de
                los requisitos legales, en proveernos de materia prima de buena
                calidad; está comprometido en fortalecer sus productos y
                servicios que generen confianza al consumidor y este tenga a su
                vez una experiencia positiva en la obtención del mismo.
              </h4>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="about-image h-100">
              <div className="d-flex align-items-center px-5 justify-content-center h-100">
                <Image
                  src="/images/quality.webp"
                  className="h-100 w-100 imageAbout"
                  alt="politica de calidad"
                  layout='fill'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="pb-1 row">
          <div className="col-12 col-md-10 col-lg-12 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-md-5 px-4">
              <h2 className="d-flex justify-content-center font-size-header mb-lg-4 mb-5">
                NUESTROS VALORES
              </h2>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="circle mr-3" />
                <div>
                  <h4>Eficacia</h4>
                  Logramos nuestros objetivos de manera efectiva y eficiente.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="red circle mr-3" />
                <div>
                  <h4>Responsabilidad</h4>
                  Cumplimos con nuestras obligaciones de manera rigurosa y
                  exigente.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className=" green circle mr-3 " />
                <div>
                  <h4>Disciplina</h4>
                  Lideramos de forma constructiva y estamos siempre en
                  aprendizaje y colaboración.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="orange circle mr-3" />
                <div>
                  <h4>Aprendizaje</h4>
                  Trabajamos juntos para el éxito del equipo.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="red circle mr-3" />
                <div>
                  <h4>Respeto</h4>
                  Mantenemos un trato ético e integro con los demás.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="green circle mr-3" />
                <div>
                  <h4>Trabajo en equipo</h4>
                  Aportamos profesionalismo y colaboración en el desarrollo de
                  nuestras tareas.
                </div>
              </div>
              <div className="background-val mb-lg-5 mb-md-3 mb-sm-3 handle-xs-mb d-flex justify-content-start">
                <div className="circle mr-3" />
                <div>
                  <h4>Ética empresarial</h4>
                  Nos identificamos de manera honesta y responsable, cumpliendo
                  nuestra misión, visión, políticas y valores.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  </Root>
);

export default About;
