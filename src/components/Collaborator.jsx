import React from 'react'
import 'antd/dist/antd.css';
import {
    Form,
    Select,
    InputNumber,
    Radio,
    Button,
    Input
} from 'antd';
import Navbar from './Navbar';
import data from '../BD/data.json'

const factor = data.factores.factor

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};


const Collaborator = () => {
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div >
            <Navbar/>
            <br/><br/><br/><br/><br/>
            <div style={{margin:'18px%'}}>
        <Form 
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
            'inputr': 1,
            }}
        >
        <Form.Item
            name="select"
            label="Punto de Partida"
            hasFeedback
            rules={[
                {
                required: true,
                message: 'Ups! Falta un punto de partida',
                },
            ]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            name="select"
            label="Punto de LLegada"
            hasFeedback
            rules={[
                {
                required: true,
                message: 'Ups! Falta un punto de llegada',
                },
            ]}
            >
            <Input />
        </Form.Item>
  
        <Form.Item
          name="select-multiple"
          label="Medio de Transporte"
          rules={[
            {
              required: true,
              message: 'Ups! Selecciona un medio de transporte',
              type: 'array',
            },
          ]}
        >
          <Select mode="multiple">
            <Option value="Auto">Auto</Option>
            <Option value="Camioneta">Camioneta</Option>
            <Option value="BusPri">Bus (Vehiculo Privado)</Option>
            <Option value="BusPub">Bus Transantiago</Option>
            <Option value="Metro">Metro</Option>
            <Option value="Motocicleta">Motocicleta</Option>
            <Option value="AvionI">Avion Internacional</Option>
            <Option value="AvionN">Avion Nacional</Option>
            <Option value="Caminando">Caminando</Option>
          </Select>
        </Form.Item>
  
        <Form.Item label="Can de Personas en el viaje">
          <Form.Item name="inputr" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> Personas</span>
        </Form.Item>
        <Form.Item
            name="select"
            label="Kilometraje"
            hasFeedback
            rules={[
                {
                required: true,
                message: 'Ups! Falta el kilometraje',
                },
            ]}
            >
            <Input />
        </Form.Item>
        <Form.Item name="radio-group" label="Radio.Group">
          <Radio.Group>
            <Radio value="2">Ida y vuelta</Radio>
            <Radio value="1">Solo Ida</Radio>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    )
}

export default Collaborator
