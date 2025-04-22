// plugins/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  th: {
    auth: {
      login: 'เข้าสู่ระบบ',
      loggingIn: 'กำลังเข้าสู่ระบบ...',
      username: 'ชื่อผู้ใช้',
      usernamePlaceholder: 'ชื่อผู้ใช้หรือเบอร์โทรศัพท์',
      password: 'รหัสผ่าน',
      passwordPlaceholder: 'รหัสผ่าน',
      forgotPassword: 'ลืมรหัสผ่าน?',
      rememberMe: 'จดจำฉัน',
      noAccount: 'ยังไม่มีบัญชี?',
      register: 'สมัครสมาชิก'
    }
  },
  en: {
    auth: {
      login: 'Login',
      loggingIn: 'Logging in...',
      username: 'Username',
      usernamePlaceholder: 'Username or phone number',
      password: 'Password',
      passwordPlaceholder: 'Password',
      forgotPassword: 'Forgot password?',
      rememberMe: 'Remember me',
      noAccount: 'Don\'t have an account?',
      register: 'Register'
    }
  }
}

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'th',
    messages
  })
  
  vueApp.use(i18n)
})