<template>
  <div class="right-side-register-component">
    <img src="../../assets/Image-291-2.png" alt="meeting-img" class='right-side-register-meeting-img'>
  </div>
</template>>

<script>
export default {
  name: 'RightSideRegisterComponent',

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.right-side-register-component {
  background: @AUTH_BG_COLOR;
  height: 100vh;
  position: relative;
}

.right-side-register-meeting-img {
  position: absolute;
  left: 23.75%;
  right: 23.75%;
  top: 22.92%;
  bottom: 48.23%;
}


</style>>