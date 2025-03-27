import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className='h-screen py-12 px-4 sm:px-6 lg:px-8 '>
      <h2 className='text-4xl font-bold text-white mb-4 text-center'>Contact Us</h2>
      <motion.div
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Contact Information */}
        <motion.div
          className='rounded-xl shadow-lg p-8 border-blue-500 shadow-blue-500'
          variants={itemVariants}
        >
          <h2 className='text-3xl font-bold mb-6 text-white text-center'>Let's Connect</h2>

          <div className='space-y-6'>
            <motion.div
              className='flex items-center space-x-4'
              variants={itemVariants}
            >
              <MailOutlined className='text-2xl text-blue-600' />
              <div>
                <h3 className='text-lg font-semibold'>Email</h3>
                <p className='text-blue-600'>ravidarshan928@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className='flex items-center space-x-4'
              variants={itemVariants}
            >
              <EnvironmentOutlined className='text-2xl text-blue-600' />
              <div>
                <h3 className='text-lg font-semibold'>Location</h3>
                <p className='text-blue-600'>Bengaluru, India</p>
              </div>
            </motion.div>

            <motion.div
              className='flex space-x-6 mt-8'
              variants={itemVariants}
            >
              <a href="https://github.com/darshangk7890" target="_blank" rel="noopener noreferrer"
                className='text-3xl text-white hover:text-gray-400 transition-colors'>
                <GithubOutlined />
              </a>
              <a href="https://www.instagram.com/ravidarshan928/?hl=en" target="_blank" rel="noopener noreferrer"
                className='text-3xl text-white hover:text-pink-600 transition-colors'>
                <InstagramOutlined />
              </a>
              <a href="https://www.linkedin.com/in/darshan-r-857057250/" target="_blank" rel="noopener noreferrer"
                className='text-3xl text-white hover:text-blue-800 transition-colors'>
                <LinkedinOutlined />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className='rounded-xl border-blue-500 shadow-lg shadow-blue-500 p-8'
          variants={itemVariants}
        >
          <h2 className='text-3xl font-bold mb-6 text-white text-center'>Send a Message</h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className='space-y-4'
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="Your Name"
                size="large"
                className='rounded-lg'
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input
                placeholder="Your Email"
                size="large"
                className='rounded-lg'
              />
            </Form.Item>

            <Form.Item
              name="subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input
                placeholder="Subject"
                size="large"
                className='rounded-lg'
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea
                placeholder="Your Message"
                rows={4}
                className='rounded-lg'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className='w-full bg-blue-600 hover:bg-blue-700 rounded-lg'
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
