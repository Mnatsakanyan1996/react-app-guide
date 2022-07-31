import { useDispatch } from 'react-redux';

import { Button, Checkbox, Form, Input } from 'antd';

import Loader from 'components/Loader';

import { USER_LOGIN } from 'api';
import useFetch from 'utils/hooks/useFetch';
import { login } from 'store/features/authorize';

export default function LoginPage() {
  const dispatch = useDispatch();

  const { fetchData, isLoading } = useFetch(USER_LOGIN);

  const onFinish = async values => {
    const response = await fetchData(values);
    if (response) {
      dispatch(login(response));
    }
  };

  return (
    <Loader isShow={isLoading}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="a1"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="a2"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </Loader>
  );
}