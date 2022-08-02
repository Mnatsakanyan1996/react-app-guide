import { cloneElement, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'antd/lib/menu';
import Image from 'antd/lib/image';
import Tooltip from 'antd/lib/tooltip';
import Dropdown from 'antd/lib/dropdown';

import { setSelectedMainItem } from 'store/features/menu';

export default function ProductList() {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menu.items);
  const selectedMainItem = useSelector(state => state.menu.selectedMainItem);
  const loading = useSelector(state => state.menu.loading);

  const handleMenuClick = useCallback((e) => {
    dispatch(setSelectedMainItem(menuItems.find(item => item.a1 === e.key)));
  }, [dispatch, menuItems]);

  const menu = useMemo(() => {
    const items = menuItems?.length
      ? menuItems.map(item => ({
          key: item.a1,
          label: item.a2,
          icon: <Image
            width={25}
            src={`https://resources.besofted.com/images/admin/icons/${item.a1}.svg`}
          />
        }))
      : [];
    return (
      <Menu
        items={items}
        onClick={handleMenuClick}
        selectedKeys={selectedMainItem?.a1}
      />
    );
  }, [handleMenuClick, menuItems, selectedMainItem?.a1]);

  return (
    <Dropdown.Button
      overlay={menu}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        cloneElement(rightButton, { loading }),
      ]}
    >
      <Image
        width={25}
        src={`https://resources.besofted.com/images/admin/icons/${selectedMainItem.a1}.svg`}
      />
      {selectedMainItem?.a2}
    </Dropdown.Button>
  );
}