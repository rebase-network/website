import { useShow, IResourceComponentsProps, useOne } from '@refinedev/core';

import { Show, MarkdownField, ListButton, EditButton, RefreshButton, ImageField } from '@refinedev/antd';

import { Space, Typography } from 'antd';

import { IPost, ICategory } from '../../interfaces';
import { DOMAIN } from '../../constants';

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IPost>({
    metaData: { populate: ['category', 'cover'] },
  });

  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne<ICategory>({
    resource: 'categories',
    id: record?.category?.id || '',
    queryOptions: {
      enabled: !!record,
    },
  });

  const handleRefresh = () => {
    queryResult.refetch();
  };

  return (
    <Show
      isLoading={isLoading}
      headerProps={{
        extra: (
          <>
            <ListButton />
            <EditButton />
            <RefreshButton onClick={handleRefresh} />
          </>
        ),
      }}
    >
      <Title level={5}>Id</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Category</Title>
      <Text>{categoryIsLoading ? 'Loading...' : categoryData?.data?.title}</Text>

      <Title level={5}>Introduce</Title>
      <MarkdownField value={record?.introduce} />

      <Title level={5}>Image</Title>
      <Space wrap>
        {record?.cover ? (
          <ImageField value={`${DOMAIN}${record?.cover.formats.medium.url}`} width={200} />
        ) : (
          <Text>Not found any images</Text>
        )}
      </Space>
    </Show>
  );
};
