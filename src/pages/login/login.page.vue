<template>
  <div class="flex-container">
    <div class="column">
      <LeftSideLogin></LeftSideLogin>
    </div>
    <div class="column">
      <RightSideLogin class="column"></RightSideLogin>
    </div>
    

  </div>
</template>>

<script>

import LeftSideLogin from '../../components/login/left-side-login.component';
import RightSideLogin from '../../components/login/right-side-login.component';

export default {
  name: 'LoginPage',
  components: {
    LeftSideLogin,
    RightSideLogin
  }

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.flex-container {
  display: flex;
  width: 100%;

  .column {
    flex: 1;
  }
}



</style>>