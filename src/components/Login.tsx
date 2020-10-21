import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function Login(){
    const history = useHistory();

    const goToDashboard = () => {
        history.push("/dashboard");
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setTimeout(() => {
            
            goToDashboard();

        }, 200);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row>
            <Col
                style={{ marginTop: '200px' }}
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 16, offset: 4 }}
                lg={{ span: 8, offset: 8 }}
                xl={{ span: 6, offset: 9 }}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

    );
}