import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';

import { Counter } from 'store/features/counter/Counter';
import { baseUrl, version, partnerGuid, recaptchaSiteKey, partnerAlias, iconUrl } from 'configs';

import MainRoutes from '../routes';

import AppHeader from './Header';
import NavigationMenu from './NavigationMenu';

const { Content, Sider, Header } = Layout;

const Container = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <NavigationMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;