import { useEffect } from "react";
import { Flex } from "antd";
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  })

  return (
    <Flex
      className="contact-container"
      justify="center"
      align="center"
      gap="middle"
      vertical
    >
      <h2>Contacto</h2>
      <div className="text-contact" data-aos='fade-up'>
        <p>
          Puedes encontrarme en mi perfil de
          Github,
          LinkedIn,
          y también puedes enviarme un correo electrónico dando click en los íconos de abajo.
        </p>
      </div>
      <ul className="social-contact" data-aos='fade-up'>
        <li>
          <a href="https://github.com/EmilianoCBE" target='_blank'>
            <img src="/github.webp" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/emiliano-carrizales" target='_blank'>
            <img src="/linkedin.webp" alt="Linkedin logo" />
          </a>
        </li>
        <li>
          <a href="mailto:e.carrizales1305@gmail.com" target='_blank'>
            <img src="/mail.webp" alt="Mail logo" />
          </a>
        </li>
      </ul>
      
      {/* <Space direction="vertical" size={16} className="space-container">
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
      </Space> */}
    </Flex>
  );
};
