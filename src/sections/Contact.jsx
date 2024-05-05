import { Flex, Card, Space, Form, Input, Button } from "antd";
import "./Contact.css";

const { TextArea } = Input;

export const Contact = () => {
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
          Puedes encontrarme en mi redes sociales de  
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
          >
            <Form.Item label="Nombre" style={{color: '#fff'}}>
              <Input />
            </Form.Item>
            <Form.Item label="Correo electrónico">
              <Input />
            </Form.Item>
            <Form.Item label="Mensaje">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button className="btn-contact">Enviar mensaje</Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </Flex>
  );
};
