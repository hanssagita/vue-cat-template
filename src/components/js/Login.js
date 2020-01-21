import { mapActions, mapGetters } from 'vuex'

const Modal = () => import(/* webpackChunkName = "c-header" */ '@/components/Modal')
export default {
  name: 'Login',
  components: {
    Modal
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('user', ['token'])
  },
  methods: {
    ...mapActions('user', ['loginAction']),
    doLogin () {
      this.loginAction({
        data: {
          username: this.username,
          password: this.password
        },
        success: this.handleSuccess
      })
    },
    handleSuccess () {
      console.log('success')
      console.log(this.token)
    }
  }
}
