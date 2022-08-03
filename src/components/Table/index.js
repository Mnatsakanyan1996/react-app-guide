import React from 'react';

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

const AppTable = ({ columns, data, loading }) => {
  return (
    <Table
      bordered
      columns={getColumns(columns)}
      dataSource={data?.Entities}
      pagination={false}
      loading={loading}
      scroll={{
        x: 1500,
        y: 500,
      }}
    />
  );
};

export default AppTable;