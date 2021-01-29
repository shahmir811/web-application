<template>
  <div>
    <img src="../../assets/Group-310-1.png" alt="logo" class="top-logo">

    <h1 class="right-side-register-component-title">Bienvenue sur Controlemaboite.fr! 👋</h1>
    <p class="right-side-register-component-subTitle">Veuillez créer votre compte pour commencer l’aventure.</p>

    <div class="registerFormInput">
      <a-form :layout="formLayout" :form="form" @submit="handleSubmit">
        <div class="firstLastNameDiv">
          <a-form-item label="Prénom">
            <a-input
              class="inputNamesField"
              v-decorator="['firstName', { rules: [{ required: true, message: 'Le prénom est requis' }] }]"
            />
          </a-form-item>
          <a-form-item label="Nom de famille">
            <a-input
              class="inputNamesField"
              v-decorator="['lastName', { rules: [{ required: true, message: 'Le nom est obligatoire' }] }]"
            />
          </a-form-item>                  
        </div>
        <a-form-item label="Email">
          <a-input
            class="inputForm"
            v-decorator="['email', { rules: [{ required: true, message: 'Le champ e-mail est obligatoire' }] }]"
          />
        </a-form-item>
        <a-form-item label="Mot de passe" class="inputPasswordFieldDiv">
          <a-input-password
            class="inputPasswordForm"
            size="large"
            v-decorator="['password', { rules: [{ required: true, message: 'Le champ du mot de passe est obligatoire' }] }]"
          />
        </a-form-item>     
        <a-form-item label="Téléphone" class="inputTelephoneDiv">
          <a-input
            size="large"
            v-decorator="[
              'telephone',
              {
                rules: [{ required: true, message: 'Le numéro de téléphone est requis' }],
              },
            ]"
            style="width: 320px"
            >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '44' }]"
            style="width: 66px"
          >
            <a-select-option value="44">
              +44
            </a-select-option>
            <a-select-option value="1">
              +1
            </a-select-option>
          </a-select>
          </a-input>
        </a-form-item>   

        <p class="left-side-register-component-description">
          En cliquant sur “S’inscrire” vous acceptez nos <span class='changeFontColor'>conditions générales d’utilisation</span> et notre <span class='changeFontColor'>politique de confidentialité.</span>          
        </p>

        <a-form-item :wrapper-col="{ span: 24 }" class='submitButtonDiv'>
          <a-button type="primary" html-type="submit" class='submitButton'>
            S’inscrire
          </a-button>
        </a-form-item>
      </a-form>

        <div class='right-side-register-component-little-desc-Div'>
          <p class="right-side-register-component-little-desc">
            Vous avez déjà un compte? 
          </p>
          <p class="right-side-register-component-little-desc">
            <router-link to="/">Se connecter</router-link>
          </p>  
        </div>    

    </div>

  </div>
</template>>

<script>
export default {
  name: 'LeftSideRegisterComponent',
  data() {
    return {
      formLayout: 'vertical',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },   

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.top-logo {
  position: absolute;
  left: 4.17%;
  right: 68.75%;
  top: 2.71%;
  bottom: 91.04%;
}

.right-side-register-component-title {
  position: absolute;
  width: 370px;
  height: 24px;
  left: 208px;
  top: 160px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}

.right-side-register-component-subTitle {
  position: absolute;
  width: 316px;
  height: 35px;
  left: 208px;
  top: 189px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 149.19%;
  color: #000000;
}

.registerFormInput {
  margin-top: 230px;
  width: 60%;
  margin-left: 205px;  
}

.inputForm {
  width: 320px;
  height: 40px;
  background: #FFFFFF;
  // border: 1px solid #403EFB;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
  border-radius: 5px;  
}

.inputPasswordForm {
  width: 320px;
  height: 40px;
  background: @GRAY-1;
  border: 1px solid @GRAY-5;
  box-sizing: border-box;
  border-radius: 5px;
}

.ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    height: 40px !important;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
}

.firstLastNameDiv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
}

.inputNamesField {
  width: 152px;
  height: 40px;
  background: @GRAY-1;
  border: 1px solid #403EFB;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
  border-radius: 5px;  
}

.inputTelephoneDiv {
  margin-bottom: 13px;
}

.selectCountryCodeClass {
  width: 66px;
  background: @GRAY-2;
  border-radius: 5px 0px 0px 5px;
}

.inputTelephoneNumber {
  width: 253px;
  background: @GRAY-1;
  border: 1px solid @GRAY-5;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;  
}

.left-side-register-component-description {
  width: 320px;
  height: 41px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: #000000;  
}

span.changeFontColor {
  color: #403EFB;
}

.submitButtonDiv {
  margin-top: 49px;
  margin-bottom: 0px;
  padding: 0px;
}

.submitButton {
  width: 320px;
  height: 40px;
  background: #403EFB;
  border-radius: 5px;
  color: @GRAY-1;  
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;  
  margin-bottom: 19px;
}

.right-side-register-component-little-desc-Div {
  display: flex;
  justify-content:space-between;
  align-items:center;
  width: 88%;
}


.right-side-register-component-little-desc {
  height: 17px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  &:first-child {
    width: 152px;
    color: #000000;
  }

  &:last-child {
    width: 152px;
    color:#403EFB;
  }
}

</style>>