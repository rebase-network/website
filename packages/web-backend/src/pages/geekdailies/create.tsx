import React, { useState } from 'react';
import { useCreateMany } from '@refinedev/core';

import { getValueProps } from '@refinedev/strapi-v4';
import { Create, useForm, useSelect } from '@refinedev/antd';
import { Form, Input, Select, Col, Row, Divider } from 'antd';

import { TOKEN_KEY, API_URL } from '../../constants';
import { IGeekDaily } from '../../interfaces';

export const GeekdailyCreate: React.FC = () => {
  const { TextArea } = Input;

  const { formProps, saveButtonProps } = useForm<IGeekDaily>();

  const { mutate } = useCreateMany();

  const bulkInsert = (items: any) => {
    mutate(
      {
        resource: 'geekdailies',
        values: [
          {
            episode: items.episode,
            author: items.author1,
            title: items.title1,
            url: items.url1,
            category: items.category1,
            introduce: items.introduce1,
          },
          {
            episode: items.episode,
            author: items.author2,
            title: items.title2,
            url: items.url2,
            category: items.category2,
            introduce: items.introduce2,
          },
          {
            episode: items.episode,
            author: items.author3,
            title: items.title3,
            url: items.url3,
            category: items.category3,
            introduce: items.introduce3,
          },
        ],
      },

      {
        onSuccess: () => {},
      },
    );
  };

  const { selectProps } = useSelect({
    resource: 'categories',
    // defaultValue: 2,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="horizontal"
        onFinish={(values) => {
          bulkInsert(values);
          console.log('Received values of form:', values);
        }}
      >
        <Form.Item label="Episode" name="episode" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>

        <Row justify="space-between">
          <Col span={6}>
            <Form.Item label="Author" name="author1" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Title" name="title1" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Url" name="url1" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Category" name="category1" rules={[{ required: true }]}>
          <Select placeholder="Select a category" {...selectProps} />
        </Form.Item>

        <Form.Item label="Introduce" name="introduce1" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Divider />

        <Row justify="space-between">
          <Col span={6}>
            <Form.Item label="Author" name="author2" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Title" name="title2" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Url" name="url2" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Category" name="category2" rules={[{ required: true }]}>
          <Select placeholder="Select a category" {...selectProps} />
        </Form.Item>

        <Form.Item label="Introduce" name="introduce2" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Divider />

        <Row justify="space-between">
          <Col span={6}>
            <Form.Item label="Author" name="author3" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Title" name="title3" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Url" name="url3" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Category" name="category3" rules={[{ required: true }]}>
          <Select placeholder="Select a category" {...selectProps} />
        </Form.Item>

        <Form.Item label="Introduce" name="introduce3" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Create>
  );
};
