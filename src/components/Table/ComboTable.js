import { usePagination, useSortBy, useTable } from 'react-table';

import { useColumns } from 'utils/hooks';

import CoreTable from './CoreTable';
import Pagination from './Pagination';

import { initialState } from './utils';

function ComboTable({ columns, data, isSortable, isLoading, ...restProps }) {
  const tableColumns = useColumns(columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    ...restTableProps
  } = useTable(
    {
      data: data || [],
      initialState,
      columns: tableColumns,
    },
    useSortBy,
    usePagination,
  );

  return (
    <div>
      <CoreTable
        h="full"
        page={page}
        isLoading={isLoading}
        prepareRow={prepareRow}
        headerGroups={headerGroups}
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        {...restProps}
      />
      {(!!page?.length && !isLoading) && <Pagination {...restTableProps} />}
    </div>
  );
}

export default ComboTable;
