import { domainUrl } from 'configs';
import { Link } from 'react-router-dom';
import { Counter } from 'store/features/counter/Counter';

import { ChakraProvider } from '@chakra-ui/react'

import MainRoutes from './MainRoutes';

export default function Layout() {
  return (
    <ChakraProvider>
      {/* tailwindcss example */}
      <h1 className="text-3xl text-center font-bold underline">
        Hello world!
        <br />
        {domainUrl}
      </h1>

      <Link to={'./'}>home</Link>
      <Link to={'./about'}>about</Link>

      {/* @reduxjs/toolkit example */}
      <Counter />
      <MainRoutes />
    </ChakraProvider>
  );
}
