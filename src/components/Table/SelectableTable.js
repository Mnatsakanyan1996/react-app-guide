import React, { useEffect } from 'react';
import { usePagination, useRowSelect, useSortBy, useTable } from 'react-table';

import { useColumns } from 'utils/hooks';

import CoreTable from './CoreTable';
import Pagination from './Pagination';

import { initialState } from './utils';

import Styles from './style';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function SelectableTable({
  columns,
  data,
  isSortable,
  isLoading,
  getSelectableRow,
  ...restProps
}) {
  const tableColumns = useColumns(columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    selectedFlatRows,
    ...restTableProps
  } = useTable(
    {
      data: data || [],
      initialState,
      columns: tableColumns,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className='table-checkbox'>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div className='table-checkbox'>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    getSelectableRow && getSelectableRow(selectedFlatRows);
  }, [getSelectableRow, selectedFlatRows]);

  return (
    <Styles>
      <CoreTable
        h="full"
        page={page}
        className="selectable-table"
        isLoading={isLoading}
        prepareRow={prepareRow}
        headerGroups={headerGroups}
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        {...restProps}
      />
      {(!!page?.length && !isLoading) && <Pagination {...restTableProps} />}
    </Styles>
  );
}

export default SelectableTable;
