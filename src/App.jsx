import './App.css';
import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

function App() {
  const [form] = Form.useForm();
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');

  const onFinish = (values) => {
    // console.log('Submitted:', values);
    setUsername(values.username);
    setDescription(values.description);
  };

  return (
    <div style={{ width: '320px', margin: '1rem auto' }}>
      <Typography.Title level={1} style={{ marginBottom: '1rem' }}>
        Homework 19
      </Typography.Title>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Имя" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отапрвить
          </Button>
        </Form.Item>
      </Form>

      {username && description && (
        <Card title="Отправленные данные">
          <Typography.Paragraph>
            <Typography.Text strong>Имя: </Typography.Text>
            {username}
          </Typography.Paragraph>

          <Typography.Paragraph>
            <Typography.Text strong>Описание: </Typography.Text>
            {description}
          </Typography.Paragraph>
        </Card>
      )}
    </div>
  );
}

export default App;
