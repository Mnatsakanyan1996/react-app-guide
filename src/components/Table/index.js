import { useTable } from 'react-table';

import CoreTable from './CoreTable';

// import Styles from './style';

const Table = ({
  columns,
  data,
  ...restProps
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <CoreTable
      page={rows}
      prepareRow={prepareRow}
      headerGroups={headerGroups}
      getTableProps={getTableProps}
      getTableBodyProps={getTableBodyProps}
      {...restProps}
    />
  );
};

export default Table;
