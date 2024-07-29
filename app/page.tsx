'use client';
import { useState } from 'react';
import '../styles/globals.css';

const MyApp = () => {
  const [name, setName] = useState('Srujan');
  return (
    <>Hello {name}</>
  );
};

export default MyApp;
