import { createElement, cloneElement, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'antd/lib/button';

import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';

import { logout } from 'store/features/authorize';
import { Dropdown, Image, Menu, Tooltip } from 'antd';

export default function AppHeader({ collapsed, setCollapsed }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authorize.isLoggedIn);
  const menuItems = useSelector(state => state.menu.items);

  const [selectedKey, setSelectedKey] = useState();

  const handleMenuClick = (e) => {
    console.log('click', e);
    setSelectedKey(e.key);
  };

  const menu = useMemo(() => {
    let items = [];
    if (menuItems?.length) {
      !selectedKey && setSelectedKey(menuItems?.[0]?.a1);
      items = menuItems.map(item => ({
        key: item.a1,
        label: item.a2,
        icon: <Image
          width={25}
          src={`https://resources.besofted.com/images/admin/icons/${item.a1}.svg`}
        />
      }));
    }
    return (
      <Menu
        onClick={handleMenuClick}
        items={items}
        selectedKeys={selectedKey || menuItems?.[0]?.a1}
      />
    );
  }, [menuItems, selectedKey]);

  return (
    <div>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}

      <Dropdown.Button
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          cloneElement(rightButton, {
            loading: !menuItems?.length,
          }),
        ]}
      >
        {menuItems?.find(item => item.a1 === selectedKey)?.a2}
      </Dropdown.Button>

      {/* Example */}
      <Button onClick={() => dispatch(logout())}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </Button>
    </div>
  );
}