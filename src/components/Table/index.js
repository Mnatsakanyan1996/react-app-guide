import { useMemo } from 'react';

import Table from 'antd/lib/table';

const getColumns = columns => {
  if (!columns) return [];
  return columns.map(item => ({
    title: item.Name,
    key: item.MemberField,
    ellipsis: true,
    dataIndex: item.MemberField,
  }));
};

const AppTable = ({
  data,
  columns,
  loading,
  actionBar,
  rowKey = 'a1',
  headerActionBar,
}) => {
  const tableColumns = useMemo(() => {
    const newColumns = getColumns(columns);
    return actionBar ? [...newColumns, actionBar] : newColumns;
  }, [actionBar, columns]);

  return (
    <>
      {headerActionBar}
      <Table
        bordered
        rowKey={rowKey}
        columns={tableColumns}
        dataSource={data?.Entities}
        pagination={false}
        loading={loading}
        scroll={{
          x: 1000,
          y: 500,
        }}
      />
    </>
  );
};

export default AppTable;