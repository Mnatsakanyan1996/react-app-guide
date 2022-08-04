import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Loader from 'components/Loader';
import AppTable from 'components/Table';

import { apiUrl } from 'configs';
import useFetch from 'utils/hooks/useFetch';

export default function TemplateController() {
  const loading = useSelector(state => state.menu.loading);
  const selectedItem = useSelector(state => state.menu.selectedItem);

  const { data, fetchData, isLoading } = useFetch(selectedItem && `${apiUrl}/${selectedItem?.a3}`);

  useEffect(() => {
    if (selectedItem) {
      fetchData(JSON.parse(selectedItem.a6));
    }
  }, [fetchData, selectedItem]);

  return (
    <Loader isShow={loading}>
      <AppTable
        data={data}
        loading={isLoading}
        columns={selectedItem?.a7}
      />
    </Loader>
  );
}
