import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'antd/lib/menu';

import MailOutlined from '@ant-design/icons/MailOutlined';

import Loader from 'components/Loader';

import useMount from 'utils/hooks/useMount';
import { fetchMenuItems } from 'store/features/menu';

function getItem(label, key, icon, children, type) {
  const obj = { key, icon: <MailOutlined />, label };
  if (children?.length) {
    return {
      ...obj,
      children: children.map(item => getItem(item.a2, item.a1, item.a1, item.a5)),
    };
  }
  return obj;
}

export default function NavigationMenu() {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menu.items);
  const selectedMainMenuItem = useSelector(state => state.menu.selectedMainItem);

  useMount(() => {
    dispatch(fetchMenuItems());
  });

  const items = useMemo(() => {
    if (!menuItems?.length) return [];
    return menuItems
      .find(mainItem => mainItem.a1 === selectedMainMenuItem.a1)?.a5
      .map(item => getItem(item.a2, item.a1, item.a1, item.a5));
  }, [menuItems, selectedMainMenuItem]);

  return (
    <Loader isShow={!menuItems?.length}>
      <div className="logo" />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        theme="dark"
      />
    </Loader>
  );
}