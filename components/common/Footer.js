import React from 'react';
import Link from 'next/link';
import StickyButton from './atoms/StickyButton';
import Image from 'next/image';

const isMobileDevice = () => {
  return (
    (typeof window !== 'undefined' && window.orientation !== undefined) ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('IEMobile') !== -1)
  );
};
const Footer = () => {
  const isMobile = isMobileDevice();
  let link = null;
  if (isMobile) {
    link = 'https://api.whatsapp.com/send?phone=3166220000';
  } else {
    link = 'https://web.whatsapp.com/send?phone=3166220000';
  }

  return (
    <footer
      className='pt-2'
      style={{ backgroundColor: '#161321', color: 'white' }}
    >
      <StickyButton />
      <div className='custom-container mb-2 pt-5'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4'>
            <p className='font-family-secondary font-size-display1 mb-4'>
              Foncepan
            </p>
            <p className='pr-5 mb-5'>
              Un verdadero reflejo de nuestra pasión y experiencia.
            </p>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <p className='font-family-secondary font-size-display1 mb-4'>
              Enlaces Útiles
            </p>
            <div className='d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0'>
              <div className='pr-5'>
                <Link href='/about'>
                  <a className='mb-3 d-flex ' style={{ alignItems: 'center' }}>
                    <Image
                      className='pr-1 h-16'
                      src='/images/ourHistory.png'
                      alt='ourHistory'
                      width={20}
                      height={20}
                    />
                    Nuestra historia
                  </a>
                </Link>
                <Link href='/branches'>
                  <a className='mb-3 d-flex ' style={{ alignItems: 'center' }}>
                    <Image
                      className='pr-1 h-16'
                      src='/images/branches.webp'
                      alt='ourHistory'
                      width={20}
                      height={20}
                    />
                    Sucursales
                  </a>
                </Link>
              </div>
              <div className='d-block font-color-light'>
                <a
                  href='https://foncepan.net/login.php'
                  className='font-color-light'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  🌐 Intranet
                </a>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <p className='font-family-secondary font-size-display1 mb-4'>
              Síguenos
            </p>
            <div className='d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0'>
              <div className='pr-5'>
                <a
                  href='https://www.instagram.com/foncepan/?hl=en'
                  className='d-flex'
                  style={{ alignItems: 'center', borderRadius: '5px' }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='pr-1 h-16'
                    src='/images/socialIcons/instaColor.webp'
                    alt='Instagram'
                    width={20}
                    height={18}
                  />
                  Instagram
                </a>
              </div>
              <div className='pr-5'>
                <a
                  href='https://www.facebook.com/people/Foncepan/100063798541886/'
                  className='mb-3 d-flex'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ alignItems: 'center', borderRadius: '5px' }}
                >
                  <Image
                    className='pr-1 h-16'
                    src='/images/socialIcons/facebookColor.webp'
                    alt='Facebook Icon'
                    width={20}
                    height={18}
                  />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-md-5'>
        <div className='bg-brand300'>
          <div className='custom-container d-flex flex-column flex-md-row align-items-center justify-content-between'>
            <div className=' pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center'>
              {/* <a
                href="tel:+576076342380"
                className="font-color-brand font-weight-semibold font-size-caption text-uppercase text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                🕘 Horarios
              </a>
              <p className="px-2 font-color-brand font-size-caption">-</p>
              <a
                href="tel:+576076342380"
                className="font-color-brand font-weight-semibold font-size-caption text-uppercase text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lunes a Sabado de 9:30 am a 8:30 pm
              </a>
              <p className="px-2 font-color-brand font-size-caption">-</p>
              <a
                href="tel:+576076342380"
                className="font-color-brand font-weight-semibold font-size-caption text-uppercase text-center"
                target="_blank"
                rel="noopener noreferrer"
                >
                📲 tel:+576076342380
              </a> */}
            </div>

            <div className='font-color-brand font-weight-bold font-size-caption py-2 text-right'>
              <label className='font-color-black font-size-caption text-uppercase text-center'>
                &copy; {new Date().getFullYear()} Foncepan - Que Buen Pan
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
