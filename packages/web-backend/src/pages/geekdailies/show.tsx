import { useShow, IResourceComponentsProps, useOne } from '@refinedev/core';

import { Show, MarkdownField, ListButton, EditButton, RefreshButton, ImageField } from '@refinedev/antd';

import { Space, Typography } from 'antd';

import { IGeekDaily, ICategory } from '../../interfaces';
import { API_URL } from '../../constants';

const { Title, Text } = Typography;

export const GeekdailyShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IGeekDaily>({
  });

  const { data, isLoading } = queryResult;
  const record = data?.data;

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

      <Title level={5}>Episode</Title>
      <Text>{record?.episode}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Url</Title>
      <Text>{record?.url}</Text>

      <Title level={5}>Introduce</Title>
      <MarkdownField value={record?.introduce} />
    </Show>
  );
};
