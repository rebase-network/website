import dayjs from "dayjs";
import React, { useState } from 'react';
import { useCreateMany } from '@refinedev/core';

import { AuthHelper } from '@refinedev/strapi-v4';

import { Create, useForm, useSelect } from '@refinedev/antd';
import { Form, Input, Col, Row, Divider } from 'antd';

import { TOKEN_KEY, API_URL } from '../../constants';
import { IGeekDaily } from '../../interfaces';

export const GeekdailyCreate: React.FC = () => {
  const { TextArea } = Input;

  const { formProps, saveButtonProps } = useForm<IGeekDaily>();

  const strapiAuthHelper = AuthHelper(API_URL);

  const { mutate } = useCreateMany();

  const bulkInsert = async (items: any) => {


    const credentials = localStorage.getItem(TOKEN_KEY);

    const me = await strapiAuthHelper.me(credentials);

    const currDate = dayjs().format("YYYY-MM-DD");

    mutate(
      {
        resource: 'geekdailies',
        values: [
          {
            episode: items.episode,
            editor: me.data,
            author: items.author1,
            title: items.title1,
            url: items.url1,
            time: currDate,
            introduce: items.introduce1,
          },
          {
            episode: items.episode,
            editor: me.data,
            author: items.author2,
            title: items.title2,
            url: items.url2,
            time: currDate,
            introduce: items.introduce2,
          },
          {
            episode: items.episode,
            editor: me.data,
            author: items.author3,
            title: items.title3,
            url: items.url3,
            time: currDate,
            introduce: items.introduce3,
          },
        ],
      },

      {
        onSuccess: () => { },
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

        <Form.Item label="Introduce" name="introduce1" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Divider />

        <Row justify="space-between">
          <Col span={6}>
            <Form.Item label="Author" name="author2" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Title" name="title2" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Url" name="url2" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Introduce" name="introduce2" rules={[{ required: false }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Divider />

        <Row justify="space-between">
          <Col span={6}>
            <Form.Item label="Author" name="author3" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Title" name="title3" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Url" name="url3" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Introduce" name="introduce3" rules={[{ required: false }]}>
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Create>
  );
};
