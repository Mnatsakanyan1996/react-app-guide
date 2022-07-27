import { Link } from 'react-router-dom';
import { Page } from '@shopify/polaris';

import { domainUrl } from 'configs';
import { Counter } from 'store/features/counter/Counter';

export default function Home() {
  return (
    <Page>
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
    </Page>
  );
}