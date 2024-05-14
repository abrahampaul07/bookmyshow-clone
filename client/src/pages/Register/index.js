import React from 'react'
import {Form} from 'antd'

const Register = () => {
  return (
    <div>
      <Form>
        <Form.Item label='Name' name='name'>
            <input type="text" placeholder='Username'/>
        </Form.Item>
        <Form.Item label='Email' name='email'>
            <input type="text" placeholder='Email'/>
        </Form.Item>
        <Form.Item label='Password' name='password'>
            <input type="password" placeholder='Password'/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
