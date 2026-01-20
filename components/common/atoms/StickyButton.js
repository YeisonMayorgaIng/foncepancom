import Link from 'next/link';

const isMobileDevice = () => {
  return (
    (typeof window !== 'undefined' && window.orientation !== undefined) ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('IEMobile') !== -1)
  );
};

export default function StickyButton({ text = ' ' }) {
  const isMobile = isMobileDevice();
  let whastApp = null;
  if (isMobile) {
    whastApp =
      'https://api.whatsapp.com/send?phone=3166220000&text=Hola%20😃%0A';
  } else {
    whastApp =
      'https://web.whatsapp.com/send?phone=3166220000&text=Hola%20😃%0A';
  }

  return (
    <Link href={whastApp} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsApp-phone font-color-medium"
        style={{
          alignItems: 'center',
          position: 'fixed',
          bottom: '70px',
          height: '50px',
          width: '50px',
          right: '10px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          alt="icon whatsapp"
          src="/images/whatsapp-48.webp"
          decoding="async"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            padding: 0,
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: '50px',
            height: '50px',
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
          }}
        />
      </a>
    </Link>
  );
}