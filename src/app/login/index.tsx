import { defineComponent } from 'vue'
import styles from './index.module.less'
import LoginForm from './login-form'
import logo from '@/assets/logo.png'
const Login = defineComponent({
  render() {
    return (
      <div class={styles.login}>
        <div class={styles.loginBlock}>
          <div class={styles.loginLogo}>
            <img class={styles.loginLogoImg} src={logo} />
          </div>
          <div class={styles.loginContent}>
            <div class={styles.loginHeader}>
              <h2 class={styles.loginAppName}>{process.env.APP_NAME}</h2>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  },
})
export default Login
