import React from "react";
import { useRegister, useLogin } from "@refinedev/core";

import { GithubFilled } from '@ant-design/icons';

import {
  Row,
  Col,
  Layout as AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
} from "antd";

const { Text, Title } = Typography;

import "./styles.css";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

export const RegisterPage: React.FC = () => {
  const CardTitle = (
    <Title level={3} className="title">
      Sign up your account
    </Title>
  );

  const [form] = Form.useForm<IRegisterForm>();

  const { mutate: register } = useRegister<IRegisterForm>();
  const { mutate: login } = useLogin<ILoginForm>();

  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={22}>
          <div className="container">
            <div className="imageContainer">
              <GithubFilled />
            </div>
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<IRegisterForm>
                layout="vertical"
                form={form}
                requiredMark={true}
                initialValues={{
                }}

                onFinish={(values) => {
                  register(values, {
                    onSuccess: () => {
                      login(values);
                    },
                  })
                }}
              >
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[{ required: true }]}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true }]}
                >
                  <Input
                    type="email"
                    size="large"
                    placeholder="Email"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }]}
                >
                  <Input
                    type="password"
                    size="large"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  block
                >
                  Sign up
                </Button>
              </Form>

              <div style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 12 }}>
                  Have an account?
                  {" "}
                  <a href="/login" style={{ fontWeight: "bold" }}>
                    Sign in
                  </a>
                </Text>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
