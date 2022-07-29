import Menu from 'antd/lib/menu';

import UserOutlined from '@ant-design/icons/UserOutlined';
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import VideoCameraOutlined from '@ant-design/icons/VideoCameraOutlined';

export default function NavigationMenu() {
  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </>
  );
}