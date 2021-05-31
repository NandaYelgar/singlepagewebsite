import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;


function Contact(){
    return(
          <div id="contact" className="block contactBlock">
              <div class="container-fluid">
                  <div className="titleHolder">
                      <h2>Contact Us</h2>
                      <p></p>
                  </div>
                  <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    >
      <Form.Item
        name="Fullname"
        rules={[{ required: true, message: 'Please input your Full Name!' }]}
      >
        <Input  placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your valid Email!' }]}
      >
        <Input
      
          type="email"
          placeholder="Email Address"
        />
      </Form.Item>
      <Form.Item
        name="telephone"
        rules={[{ required: true, message: 'Please input your valid Telephone No.!' }]}
      >
        <Input
      
          type="telephone"
          placeholder="Enter your Telephone No."
        />
      </Form.Item>
      <Form.Item name="subject">
        <Input
         type="subject"
          placeholder="Enter you Subject"
        />
      </Form.Item>
      <Form.Item name="message">
        <TextArea
         type="message"
          placeholder="Enter your message"
        />
      </Form.Item>
     
      
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      
      >
        <Checkbox>
          I agree terms and conditions.
        </Checkbox>
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         Submit
        </Button>
      
      </Form.Item>

    </Form>
              </div>
          </div>
    );
}

export default Contact;