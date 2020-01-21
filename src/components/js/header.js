const Login = () => import(/* webpackChunkName = "c-header" */ '@/components/Login')
export default {
  name: 'Header',
  components: {
    Login
  },
  data () {
    return {
      visibleLoginPopUp: false
    }
  },
  methods: {
    toggleVisibleLoginPopUp () {
      this.visibleLoginPopUp = !this.visibleLoginPopUp
    }
  }
}
