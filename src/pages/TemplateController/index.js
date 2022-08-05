import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Button from 'antd/lib/button';

import Loader from 'components/Loader';
import AppTable from 'components/Table';

import { apiUrl } from 'configs';
import useFetch from 'utils/hooks/useFetch';
import {
  menuLoadingSelector,
  menuSelectedItemSelector,
} from 'store/selectors';

import Filter from './Filter';

export default function TemplateController() {
  const loading = useSelector(menuLoadingSelector);
  const selectedItem = useSelector(menuSelectedItemSelector);

  const { data, fetchData, isLoading } = useFetch(selectedItem && `${apiUrl}/${selectedItem?.a3}`);

  useEffect(() => {
    if (selectedItem) {
      fetchData(selectedItem.a6);
    }
  }, [fetchData, selectedItem]);

  const actionBar = useMemo(() => {
    if (!selectedItem?.a21?.length) return;
    return {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <div>
          {selectedItem.a21.map((item, index) => (
            <Button key={index}>{item?.a2}</Button>
          ))}
        </div>
      ),
    };
  }, [selectedItem?.a21]);

  const headerActionBar = useMemo(() => {
    if (!selectedItem?.a20?.length) return;
    return selectedItem.a20.map((item, index) => (
      <Button key={index}>{item?.a2}</Button>
    ));
  }, [selectedItem?.a20]);

  return (
    <Loader isShow={loading}>
      <>
        <Filter
          filter={selectedItem?.a6}
          columns={selectedItem?.a7}
        />
        <AppTable
          data={data}
          loading={isLoading}
          actionBar={actionBar}
          columns={selectedItem?.a7}
          headerActionBar={headerActionBar}
        />
      </>
    </Loader>
  );
}
