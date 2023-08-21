import { IResourceComponentsProps } from '@refinedev/core';

import {
  List,
  useTable,
  getDefaultSortOrder,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
} from '@refinedev/antd';

import { Table, Select, Space } from 'antd';

import { IGeekDaily } from '../../interfaces';

export const GeekdailyList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IGeekDaily>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
    metaData: {
      populate: ['editor'],
    },
  });

  return (
    <List>
      <Table
        {...tableProps}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          showSizeChanger: true,
        }}
      >
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter={{ multiple: 2 }}
        />
        <Table.Column dataIndex="episode" key="episode" title="Episode" />
        <Table.Column dataIndex="title" key="title" title="Title" />
        <Table.Column dataIndex="author" key="author" title="Author" />

        <Table.Column
          dataIndex="time"
          title="Time"
          render={(value) => <DateField value={value} format="YYYY-MM-DD" />}
          defaultSortOrder={getDefaultSortOrder('time', sorter)}
          sorter={{ multiple: 1 }}
        />

        <Table.Column dataIndex={['editor', 'username']} key="editor" title="Editor" />

        <Table.Column<{ id: string }>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => {
            return (
              <Space>
                <ShowButton hideText size="small" recordItemId={record.id} />
                <EditButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
