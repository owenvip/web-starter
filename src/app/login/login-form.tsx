import { defineComponent } from 'vue'
import md5 from 'blueimp-md5'
import { MD5_SALT, DOMAIN_NUMBER } from '@/config'
import { Button, Form, Input } from 'ant-design-vue'
import styles from './index.module.less'
import { mapActions, mapState } from 'vuex'
const LoginForm = defineComponent({
  data: function () {
    return {
      loading: false,
      formData: {
        account: undefined,
        password: undefined,
      },
    }
  },
  computed: mapState('auth', ['isLogin']),
  watch: {
    isLogin(val) {
      if (val) {
        this.$router.replace('/')
      }
    },
  },
  beforeMount() {
    if (this.isLogin) {
      this.$router.replace('/')
    }
  },
  methods: {
    ...mapActions('auth', ['userLogin']),
    async handleFormFinish() {
      this.loading = true
      const data = {
        account: this.formData.account,
        password: md5(this.formData.password + MD5_SALT).toString(),
        domainNumber: DOMAIN_NUMBER,
      }
      await this.userLogin(data)
      this.loading = false
    },
    handlePasswordChange(e) {
      this.formData.password = e.target.value
    },
    handleAccountChange(e) {
      this.formData.account = e.target.value
    },
  },
  render() {
    return (
      <Form
        class={styles.loginForm}
        model={this.formData}
        onFinish={this.handleFormFinish}
      >
        <Form.Item
          name={['account']}
          rules={[
            {
              required: true,
              whitespace: false,
              message: '请输入手机号码',
            },
            {
              pattern: /^1(\d){10}$/,
              message: '请输入正确的手机号码',
            },
          ]}
          onChange={this.handleAccountChange}
          value={this.formData.account}
        >
          <Input size="large" placeholder="手机号码" />
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
          onChange={this.handlePasswordChange}
          value={this.formData.password}
        >
          <Input.Password size="large" key={name} placeholder="密码" />
        </Form.Item>
        <Button
          size="large"
          loading={this.loading}
          block
          htmlType="submit"
          type="primary"
        >
          登录
        </Button>
      </Form>
    )
  },
})
export default LoginForm
