import { useDispatch, useSelector } from 'react-redux';

import Menu from 'antd/lib/menu';

import UserOutlined from '@ant-design/icons/UserOutlined';
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import VideoCameraOutlined from '@ant-design/icons/VideoCameraOutlined';

import Loader from 'components/Loader';

import useMount from 'utils/hooks/useMount';
import { fetchMenuItems } from 'store/features/menu';

export default function NavigationMenu() {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menu.items);

  useMount(() => {
    dispatch(fetchMenuItems());
  });

  return (
    <Loader isShow={!menuItems?.length}>
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
    </Loader>
  );
}