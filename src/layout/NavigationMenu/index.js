import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'antd/lib/menu';

import Loader from 'components/Loader';

import useMount from 'utils/hooks/useMount';
import { fetchMenuItems, setSelectedItem } from 'store/features/menu';
import { menuItemsSelector, menuLoadingSelector, menuSelectedItemSelector, menuSelectedMainItemSelector } from 'store/selectors';

import { getItem } from './utils';

export default function NavigationMenu() {
  const dispatch = useDispatch();

  const menuItems = useSelector(menuItemsSelector);
  const loading = useSelector(menuLoadingSelector);
  const selectedItem = useSelector(menuSelectedItemSelector);
  const selectedMainMenuItem = useSelector(menuSelectedMainItemSelector);

  useMount(() => {
    dispatch(fetchMenuItems());
  });

  const items = useMemo(() => {
    if (!menuItems?.length) return [];
    return selectedMainMenuItem?.a5.map(item => getItem(item.a2, item.a1, item.a5, item));
  }, [menuItems, selectedMainMenuItem]);

  const handleOnClick = e => {
    dispatch(setSelectedItem(e?.item?.props?.data));
  };

  return (
    <Loader isShow={loading}>
      <div className="logo" />
      {/* TODO: Add defaultOpenKeys */}
      <Menu
        items={items}
        mode="inline"
        onClick={handleOnClick}
        selectedKeys={[selectedItem?.a1]}
      />
    </Loader>
  );
}