import { baseUrl, version, partnerGuid, recaptchaSiteKey, partnerAlias, iconUrl } from 'configs';
import { Link } from 'react-router-dom';
import { Counter } from 'store/features/counter/Counter';

import MainRoutes from './MainRoutes';

import 'antd/dist/antd.min.css';
import { Authorize } from 'store/features/authorize/Authorize';

export default function Layout() {
  return (
    <Authorize>
      <div>
        {/* tailwindcss example */}
        <h1 className="text-3xl text-center font-bold underline">
          Hello world!
          <br />
          {baseUrl}
          <br />
          {version}
          <br />
          {partnerGuid}
          <br />
          {recaptchaSiteKey}
          <br />
          {partnerAlias}
          <br />
          {iconUrl}
        </h1>

        <Link to={'./'}>home</Link>
        <Link to={'./about'}>about</Link>

        {/* @reduxjs/toolkit example */}
        <Counter />

        <MainRoutes />
      </div>
    </Authorize>
  );
}
