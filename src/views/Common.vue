<template>
  <div>
    <myhead></myhead>
    <router-view></router-view>
    <main_bottom></main_bottom>
  </div>
</template>
<script>
import myhead from '../components/header';
import main_bottom from '../components/main_bottom';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    myhead,
    main_bottom
  }
}
</script>
<style scoped lang="less">
</style>
