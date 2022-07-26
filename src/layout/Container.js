import { useState } from 'react';

import { Layout } from 'antd';

import MainRoutes from '../routes';

import AppHeader from './Header';
import NavigationMenu from './NavigationMenu';

const { Content, Sider, Header } = Layout;

const Container = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
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
            <MainRoutes />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;