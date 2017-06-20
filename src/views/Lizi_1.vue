<template >
    <!--<Row class="lizi" >
          <col :lg="24">
            <Row>
                    <Col :xs="0" :sm="9" :md="9" class="col1">
                        <div class="div1">
                            123
                        </div>
                    </Col>
                    <Col :xs="24" :sm="9" :md="9" class="col2">
                        <div class="div2">
                            456
                        </div>
                    </Col>
            </Row>
          </col>
    </Row>-->
    <div>
        <input type="text" placeholder="请输入手机号" v-model="mobile"><br>
        <input type="text" placeholder="请输入密码" v-model="password"><br>
        <input type="text" placeholder="请输入验证码" v-model="yanzhengma"><br>
        <img :src="imgCodeUrl" @click="change">
        <button @click="center">确认登陆</button>
        <button @click="toLizi">跳回去</button>
    </div>
</template>
<script>
export default {
 data(){
     return{
         mobile:'',
         password:'',
         yanzhengma:'',
         imgCodeUrl:'/xinda-api/ajaxAuthcode'
     }
 },
 methods:{
    change(){
        this.imgCodeUrl = '/xinda-api/ajaxAuthcode?' + Math.random()
    },
     a(value){
            return /^1[3|4|5|7|8][0-9]{9}$/.test(value)
        },
    b(value){
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)
    },
    toLizi(){
         this.$router.push({path:this.$route.query.lzl})
    },
    center(){
        console.log("1111",this.$route.query.lzl)
       if(this.a(this.mobile)){
            if(this.b(this.password)){
                this.ajax.post('/xinda-api/sso/login',this.qs.stringify({
                    loginId:this.mobile,
                    password:this.md5(this.password),
                    imgCode:this.imgCode
                })).then(function(){
                    this.status = this.data.status;
                    if(res.data.status == 1){//登陆成功
                         _this.setusername();
                         _this.setCartNum();
                         setTimeout(function() {
                            _this.$router.push({path:"_this.$route.query.lzl",query:{'username':_this.userNumber}})
                         }, 1000);
                    }else{
                        console.log('验证码错误')
                        _this.b() //图片验证码发生改变
                    }
                })
            }else{
                console.log('密码格式错误')
            }
       }else{
           console.log('手机号格式错误')
       }

    }
 }
}
</script>
<style scoped lang = less>
   /*.col1{
       height: 300px;
       background: pink;
   }
   .col2{
       height: 300px;
       background: yellow;
   }*/
</style>
