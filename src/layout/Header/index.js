import { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'antd/lib/button';

import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';

import { logout } from 'store/features/authorize';
import { isLoggedInSelector } from 'store/selectors';

import ProductList from './ProductList';

export default function AppHeader({ collapsed, setCollapsed }) {
  const dispatch = useDispatch();
 
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <div>
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}

      <ProductList />

      <Button onClick={() => dispatch(logout())}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </Button>
    </div>
  );
}