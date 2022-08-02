import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'antd/lib/menu';

import Loader from 'components/Loader';

import useMount from 'utils/hooks/useMount';
import { fetchMenuItems, setSelectedItem } from 'store/features/menu';

import { getItem } from './utils';

export default function NavigationMenu() {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menu.items);
  const loading = useSelector(state => state.menu.loading);
  const selectedItem = useSelector(state => state.menu.selectedItem);
  const selectedMainMenuItem = useSelector(state => state.menu.selectedMainItem);

  useMount(() => {
    dispatch(fetchMenuItems());
  });

  const items = useMemo(() => {
    if (!menuItems?.length) return [];
    return menuItems
      .find(mainItem => mainItem.a1 === selectedMainMenuItem.a1)?.a5
      .map(item => getItem(item.a2, item.a1, item.a5, item));
  }, [menuItems, selectedMainMenuItem]);

  const handleOnClick = useCallback(e => {
    dispatch(setSelectedItem(e?.item?.props?.data));
  }, [dispatch]);

  return (
    <Loader isShow={loading}>
      <div className="logo" />
      <Menu
        onClick={handleOnClick}
        defaultSelectedKeys={[selectedItem?.a1]}
        // TODO: Add defaultOpenKeys
        mode="inline"
        items={items}
      />
    </Loader>
  );
}