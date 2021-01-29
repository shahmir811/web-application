<template>
  <div class="flexContainer">
    
    <div class="column">
      <LeftSide></LeftSide>
    </div>
    <div class="column">
      <RightSide class="column"></RightSide>
    </div>
    


  </div>
</template>>

<script>

import LeftSide from '../../components/register/left-side-register.component';
import RightSide from '../../components/register/right-side-register.component'

export default {
  name: 'RegsiterPage',
  components: { LeftSide, RightSide},

}
</script>>

<style scoped lang="less">

@import '../../styles/app.less';

.flexContainer {
  display: flex;
  width: 100%;

  .column {
    flex: 1;
  }
}



</style>>