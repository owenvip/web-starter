import React, { FC } from 'react'
import styles from './index.module.less'
import LoginForm from './login-form'
import logo from '@/assets/logo.png'

const Login: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginBlock}>
        <div className={styles.loginLogo}>
          <img className={styles.loginLogoImg} src={logo} />
        </div>
        <div className={styles.loginContent}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
