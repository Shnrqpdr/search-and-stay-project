<template>
  <div class="container d-flex justify-center align-center">
    <div class="form-div">
        <b-form class="form-content" @submit.prevent="onSubmit">
            <h1 class="text-center">Search and Stay Task</h1>
            <b-form-group id="email-group" label="Email:" label-for="email">
                <b-form-input id="email" v-model="email" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group id="password-group" label="Password:" label-for="password">
                <b-form-input id="password" v-model="password" type="password" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
    </div>
  </div>
</template>
  
<script>
import api from '../services/api';

export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        const { data } = await api.post('/login_json', { login: credentials })
        localStorage.setItem('token', data.access_token);
      } catch (error) {
        alert('Ocorreu um erro ao tentar fazer login. Verifique suas credenciais e tente novamente.', error);
      } finally {
        this.$router.push('/Home');
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
.form-div {
width: 600px;
margin: auto;
padding: 20px;
background-color: white;
}

.form-content {
    width: 100%;
}
</style>

  
  
  
  
  
  