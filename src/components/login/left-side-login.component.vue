<template>
  <div class="left-side-login">
    <img src="../../assets/Group-310-1.png" alt="logo" class="top-logo">
      <img src="../../assets/Image-291-2.png" alt="meeting-img" class='left-side-login-meeting-img'>
  </div>
</template>>

<script>
export default {
  name: 'LeftSideLoginComponent',

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.left-side-login {
  background: @AUTH_BG_COLOR;
  height: 100vh;
}

.top-logo {
  position: absolute;
  width: 390px;
  height: 60px;
  top: 26px;
  left: 60px;
}

.left-side-login-meeting-img {
  width: 378px;
  height: 277px;
  position: absolute;
  left: 171px;
  top: 198px;
}

</style>>