<template>
  <div>
    <!---这是轮播部分-->
    <div class="banner">
        <div class="banner_right"><h3>这是轮播部分</h3></div>
    </div>
   <!-------------------这是轮播结束部分--------------->
   <!--这是明星产品推荐部分-->
<div class="star">
    <div class="star_item">
      明星产品推荐
    </div>
    <div class="star_body">

    </div>
</div>

   <!------------<!这是明星产品推荐结束部分------------->-->
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped  lang="less">
// ----------------------------这是公共样式部分
 .mg{
      margin :0 auto;
  } 
 .tex{
    text-align: center;
  }



// ----------------------------这是公共样式结束部分
// --------------------------这是轮播部分---------------

  .banner{
    width: 1200px;
    height: 401px;
    color: #fff;
    .tex;
    .mg;
      .banner_right {
       width: 1200px;
       height: 401px;
       background: #636363;
     }
  } 
  // --------------------------这是轮播结束部分-----------------
//  ------------------------- 这是明星产品推荐部分-------------------------
 .star{
  width: 1200px;
  height: 473px;
  margin-top: 50px;
  background: pink;
   .mg;
 }





// ------------------------这是明星产品推荐结束部分------------------------


</style>
