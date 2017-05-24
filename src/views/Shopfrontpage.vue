<template>
  <div>
        <div class="whole">
        </div>
  </div>
</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
      
  }
}

</script>

<style scoped lang=less>
*{
  margin:0;
	padding:0;
}


/*清除浮动*/
.clear:after{
	content:"";
	display:block;
	clear:both;
}
</style>