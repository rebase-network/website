import React from 'react';
import { Edit, useForm, useSelect } from '@refinedev/antd';
import { getValueProps } from '@refinedev/strapi-v4';
import { Form, Input, Select } from 'antd';

import { IGeekDaily } from '../../interfaces';

export const GeekdailyEdit: React.FC = () => {
  const { TextArea } = Input;

  const { formProps, saveButtonProps, queryResult } = useForm<IGeekDaily>({
    // metaData: { populate: ['category'] },
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Episode"
          name="episode"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 14 }}
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Introduce"
          name="introduce"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
