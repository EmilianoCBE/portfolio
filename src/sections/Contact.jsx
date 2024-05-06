import { useState } from "react";
import { Flex, Card, Space, Form, Input, Button } from "antd";
import "./Contact.css";
import axios from "axios";

const { TextArea } = Input;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/send-email", formData);
      console.log(response.data); 
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  return (
    <Flex
      className="contact-container"
      justify="center"
      align="center"
      gap="middle"
      vertical
    >
      <h2>Contacto</h2>
      <div className="text-contact">
        <p>
          Puedes encontrarme en mi perfil de
          <a href="https://github.com/EmilianoCBE" target='_blank'>Github</a> 
          y
          <a href="www.linkedin.com/in/emiliano-carrizales" target='_blank'>LinkedIn,</a>
          y también puedes enviarme un correo electrónico
        </p>
      </div>
      
      <Space direction="vertical" size={16} className="space-container">
        <Card
          style={{
            // width: ,
            background: 'transparent',
            fontFamily: 'Onest variable, sans-serif',
          }}
        >
          <Form
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            style={{
              // maxWidth: 600,
              color: '#FFFFFF'
            }}
            onSubmit={handleSubmit}
          >
            <Form.Item label="Nombre" style={{color: '#fff'}}>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Correo electrónico">
              <Input name="email" value={formData.email} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Mensaje">
              <TextArea name="message" rows={4} value={formData.message} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <Button className="btn-contact" htmlType="submit">Enviar mensaje</Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </Flex>
  );
};
