<template>
  <div>
    <h1 class="right-side-login-component-title">Bienvenue sur Controlemaboite.fr!</h1>
    <p class="right-side-login-component-subtitle">Veuillez vous connecter à votre compte pour commencer l’aventure.</p>

    <div class="login-form-input">
      <a-form-model layout="vertical" :model="form" >
        <a-form-model-item label="Email *">
            <a-input v-model="form.email" />
          </a-form-model-item>  
        <a-form-model-item label="Mot de passe *">
            <a-input v-model="form.password" />
          </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            Create
          </a-button>
          <a-button style="margin-left: 10px;">
            Cancel
          </a-button>
        </a-form-model-item>                      
      </a-form-model>
    </div>


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

.login-form-input {
  margin-top: 255px;
  width: 80%;
  margin-left: 116px;
}

.ant-col.ant-form-item-label > label {
    color: blue !important;
}



</style>>