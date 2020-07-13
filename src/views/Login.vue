<template>
  <div class="a-login">
    <b-card :img-src="require('../assets/logo.png')" img-alt="Logo" img-top class="a-login-card">
      <b-container>
        <b-row class="a-row">
          <h1>Login</h1>
        </b-row>
        <b-row class="a-row">
          <b-form>
            <b-form-radio-group v-model="form.type" :options="users"></b-form-radio-group>
            <b-form-input placeholder="Usuario" v-model="form.username"></b-form-input>
            <b-form-input placeholder="Contraseña" type="password"></b-form-input>
            <b-button @click="onSubmit" variant="primary" block>Aceptar</b-button>
          </b-form>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template> 

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      users: ["Estudiante", "Docente"],
      form: {
        username: "",
        type: "Estudiante"
      }
    };
  },
  methods: {
    onSubmit() {
      this.logOut();
      this.addUser(this.form);

      switch (this.form.type) {
        case "Estudiante":
          this.$router.push({ name: "StudentHome" });
          break;
        case "Docente":
          this.$router.push({ name: "TeacherHome" });
          break;

        default:
          break;
      }
    },
    ...mapMutations(["addUser", "logOut"])
  }
};
</script>

<style scoped>
.a-login {
  min-height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a-login .btn-primary {
  background-color: var(--global-color-1);
  border: none;
  margin: 20px 0;
}

.a-login .a-row {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.a-login .a-row h1 {
  color: var(--global-color-1);
  font-weight: bold;
  margin-bottom: 20px;
}
</style>

<style>
.a-login .a-login-card {
  max-width: 50%;
  border-color: transparent;
  border-radius: 20px;
  -webkit-box-shadow: 10px 10px 24px 0px rgba(84, 84, 84, 1);
  -moz-box-shadow: 10px 10px 24px 0px rgba(84, 84, 84, 1);
  box-shadow: 10px 10px 24px 0px rgba(84, 84, 84, 1);
}
.a-login .card-img-top {
  background-image: url("../assets/images/login.png");
  object-fit: contain;
  padding: 50px 40px;
  border-radius: 20px 20px 0 0;
}
.a-login .form-control {
  background-color: var(--global-color-2);
  border: none;
  margin: 10px 0;
  color: white;
}

/* Placeholder custom color */
.form-control::-webkit-input-placeholder {
  color: white;
} /* WebKit, Blink, Edge */
.form-control:-moz-placeholder {
  color: white;
} /* Mozilla Firefox 4 to 18 */
.form-control::-moz-placeholder {
  color: white;
} /* Mozilla Firefox 19+ */
.form-control:-ms-input-placeholder {
  color: white;
} /* Internet Explorer 10-11 */
.form-control::-ms-input-placeholder {
  color: white;
} /* Microsoft Edge */

@media (max-width: 600px) {
  .a-login .a-login-card {
    max-width: 100%;
  }
}
</style>