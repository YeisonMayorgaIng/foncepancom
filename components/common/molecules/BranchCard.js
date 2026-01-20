import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BranchCard({
  permalink,
  image,
  name,
  dir,
  alt,
  schedule,
  tel,
  nameButton
}) {
  let phone = `tel:${tel}`
  return (
    <div
      className="expand d-flex flex-column text-align-center align-items-center justify-content-start"
      style={{
        paddingBottom: '1em',
        maxWidth: '300px',
        background: 'white',
        borderRadius:'15px'
      }}
    >
      <Image
      className="imageCategory-top "
        src={image}
        width="400"
        height="300"
        alt={alt}
      />
      <main className="xx d-flex flex-column align-items-center justify-content-between" style={{ padding:'1rem', textAlign:'center', fontSize: '18px', lineHeight:'26px'}}>
        <h3 style={{ minHeight:'67px', margin: '0 0 0.5em'}}>{name}</h3>
        {/* {(name==='Foncepan Cabecera' || name==='Foncepan Diamante') && <h4 style={{color:'white'}}>.</h4>} */}
        <p
          className="font-weight-bold"
          style={{ margin: '0 0 1em'}}
        >
          {dir}
        </p>
        <a className="font-weight-bold"
          style={{ margin: '0 0 1em',}} href= {phone} rel="noopener noreferrer">📞 {tel}</a>
        <p style={{maxWidth:'250px', minHeight: '104px'}}>{schedule}</p>
        <a
          style={{
            display: 'inline-block',
            padding: '0.5em 1em',
            backgroundColor: '#229c2b',
            color: '#fff',
            borderRadius: '0.5rem',
            fontSize: '0.8em',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '1em',
            minWidth:'250px',
            fontWeight:700,
          }}
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          📌 {nameButton}
        </a>
      </main>

    </div>
  );
}
