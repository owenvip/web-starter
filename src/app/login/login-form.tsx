import { defineComponent } from 'vue'
import md5 from 'blueimp-md5'
import { MD5_SALT } from '@/config'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import styles from './index.module.less'
import { mapActions, mapState } from 'vuex'

const rules = {
  account: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1(\d){10}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const LoginForm = defineComponent({
  data: function () {
    return {
      loading: false,
      formData: {
        account: '',
        password: '',
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
      }
      await this.userLogin(data)
      this.loading = false
    },
  },
  render() {
    return (
      <ElForm class={styles.loginForm} rules={rules} model={this.formData}>
        <ElFormItem prop="account">
          <ElInput placeholder="手机号码" />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput show-password placeholder="密码" />
        </ElFormItem>
        <ElButton
          size="large"
          loading={this.loading}
          type="primary"
          onClick={this.handleFormFinish}
        >
          登录
        </ElButton>
      </ElForm>
    )
  },
})
export default LoginForm
