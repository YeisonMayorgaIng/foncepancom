import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {dataProducts} from '../../dataProducts';
const Collections = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 20,
    }}
  >
    {dataProducts?.map((category, index) => (
      <Category
        key={index}
        title={category.title}
        subtitle={category.subtitle}
        buttonText={category.buttonText}
        description={category.description}
        image={category.image}
        goTo={category.goTo}
      />
    ))}
  </div>
);

const Category = ({
  title,
  subtitle,
  buttonText,
  description,
  image,
  goTo,
}) => (
  <div
    style={{
      background: 'wheat',
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: '1em',
      maxWidth: '300px',
      fontSize: '18px',
      lineHeight: '26px',
    }}
  >
    <Image
      className="imageCategory"
      src={image}
      width="500"
      height="500"
      alt={title}
    />
    <h2 style={{ margin: '0 0 0.5em' }}>{title}</h2>
    <p className="font-weight-bold" style={{ margin: '0 0 1em' }}>
      {subtitle}
    </p>
    <p
      className="font-weight-semibold"
      style={{ margin: '0 0 1em', color: '#333', minHeight:'140px' }}
    >
      {description}
    </p>

    <Link href={`/${goTo}`}>
      <a
        download
        style={{
          display: 'inline-block',
          padding: '0.5em 1em',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '0.5rem',
          fontSize: '0.8em',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginTop: '1em',
        }}
      >
        {buttonText}
      </a>
    </Link>
  </div>
);
export default Collections;