<template>
  <div>
    <main_head></main_head>
    <router-view></router-view>
    <main_foot></main_foot>
  </div>
</template>
<script>
import main_head from '../components/main_head';
import main_foot from '../components/main_foot';


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    main_head,
    main_foot
  }
}
</script>





<style scoped>

</style>
