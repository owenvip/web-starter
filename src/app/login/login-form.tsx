import React, { FC, useCallback, useState, useEffect } from 'react'
import md5 from 'blueimp-md5'
import { MD5_SALT } from '@/config'
import { Button, Form, Input } from 'antd'
import useAuth from '@/hooks/use-auth'
import { useHistory } from 'react-router'

const LoginForm: FC = () => {
  const history = useHistory()
  const [form] = Form.useForm()
  const { userLogin, isLogin } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (data) => {
      data.password = md5(data.password + MD5_SALT).toString()
      setLoading(true)
      const res = await userLogin(data)
      if (!res) {
        // 只有在未成功登录的情况下需要重置状态
        setLoading(false)
      }
    },
    [userLogin]
  )

  useEffect(() => {
    if (isLogin) {
      history.replace('/')
    }
  }, [isLogin, history])

  return (
    <Form
      style={{ width: 360 }}
      form={form}
      initialValues={{
        countryCode: '+86',
      }}
      size="large"
      onFinish={handleSubmit}
    >
      <Form.Item
        name={['account']}
        rules={[
          {
            required: true,
            whitespace: false,
            message: '请输入用户名/手机号',
          },
        ]}
      >
        <Input placeholder="用户名/手机号码" />
      </Form.Item>
      <Form.Item
        name={['password']}
        rules={[
          {
            required: true,
            whitespace: false,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Button loading={loading} block htmlType="submit" type="primary">
        登录
      </Button>
    </Form>
  )
}

export default LoginForm
