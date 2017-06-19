<template>
<div>
  <Row>
    <Col :xs="0" :sm="24" :md="24" align="center">
      <p>&copy;Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
    </Col>
  </Row>
  <Row>
    <Col :xs="24" :sm="0" :md="0" align="center" class="foot-posi">
     <div @click="toHome"  class="colposi">
       <Icon type="android-home" size="30" ></Icon></br>
       <span>首页</span>    
     </div>
     <div @click="toStorList"  class="colposi">
        <Icon type="bag" size="30"></Icon></br>   
        <span>店铺</span>
     </div>
      <div @click="toShoppingcar"  class="colposi">
         <Badge :count="getCartNum" >
            <Icon type="ios-cart-outline" size="30" style="font-weight: 700;"></Icon>
            </br><span>购物车</span>
        </Badge>
      </div>
     <div @click="toMember"  class="colposi">
      <Icon type="ios-person-outline" size="30" style="font-weight: 700;"></Icon></br>
      <span>我的</span>
     </div>
    </Col>
  </Row>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'top',
  data(){
    return{
      byCarClick: false
    }
  },
  computed: {
    ...mapGetters(['getCartNum'])
  },
  methods:{
    ...mapActions(['change_mengban']),
    toHome(){
       this.$router.push({
          path: "/HOME",
          query: {
           
          }
        })
    },
    toStorList(){
       this.$router.push({
          path: "/Store_list",
          query: {
           
          }
        })
    },
    toShoppingcar(){
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
          if (res.data.status == 0) {
              _this.change_mengban(true)
          } else {
            this.$router.push({
              path: "/shopping_car"
            })
          }
      })
    },
    toMember(){
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
          if (res.data.status == 0) {
             _this.change_mengban(true)
          } else {
            _this.$router.push({
              path: "/Mine"
            })
          }
      })
    }
  }
}
</script>

<style scoped lang="less">
.foot-posi{
  position:fixed;
  bottom:0;
}
.colposi{
  background: rgba(255,255,255,.7);
  width:25%;
  height: 50px;
  float:left;
  display:block;
  cursor:pointer;  
}
</style>