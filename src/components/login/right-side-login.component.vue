<template>
  <div>
    <h1 class="right-side-login-component-title">Bienvenue sur Controlemaboite.fr!</h1>
    <p class="right-side-login-component-subtitle">Veuillez vous connecter à votre compte pour commencer l’aventure.</p>

    <div class="loginFormInput">
      <a-form-model layout="vertical" :model="form" >
        <a-form-model-item label="Email *">
            <a-input v-model="form.email" class="inputForm" />
          </a-form-model-item>  
        <a-form-model-item label="Mot de passe *" class="passwordFormModelItem">
            <a-input v-model="form.password" class="inputForm" />
          </a-form-model-item>
        <a-checkbox v-model="form.rememberMe" name="rememberMe" class='rememberMeClass'>
          Rester connecté
        </a-checkbox>  
        <a-form-model-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" @click="onSubmit" class='submitButton'>
            Se connecter
          </a-button>
        </a-form-model-item>                      
      </a-form-model>
    </div>

    <a href="#" class="forgotPasswordLink">Mot de passe oublié ?</a>

  </div>
</template>>

<script>

export default {
  name: 'RightSideLoginComponent',
  data() {
    return {
      formLayout: 'vertical',
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: { 
        layout: 'vertical',
        email: '',
        password: '',
        rememberMe: false
      },
      rules: { 

      }
    };
  },

  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
  }, 

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.right-side-login-component-title {
  position: absolute;
  width: 354px;
  height: 24px;
  left: 884px;
  top: 160px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
}

.right-side-login-component-subtitle {
  position: absolute;
  width: 316px;
  height: 35px;
  left: 884px;
  top: 192px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 149.19%;
}

.loginFormInput {
  margin-top: 255px;
  width: 80%;
  margin-left: 116px;
}


label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px !important;
  color: @GRAY-9;
}

.ant-input {
  width: 320px;
  height: 40px;  
}

.submitButton {
  width: 320px;
  height: 40px;
  background: #403EFB;
  border-radius: 5px;
  color: @GRAY-1;
}

.forgotPasswordLink {
  position: absolute;
  right: 335px;
  top: 357px;
}

.passwordFormModelItem {
  margin-bottom: 0px
}

.rememberMeClass {
  margin-top: 14px;
  margin-bottom: 66px;
}

</style>>