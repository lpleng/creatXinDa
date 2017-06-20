<template >
    <div>
        <input type="text" placeholder="请输入手机号" v-model="mobile"><br>
        <input type="text" placeholder="请输入密码" v-model="password"><br>
        <input type="text" placeholder="请输入验证码" v-model="yanzhengma"><br>
        <img :src="imgCodeUrl" @click="change">
        <button @click="center">确认登陆</button>
        <div v-for="Details_ajax1 in Details_ajax1_ajax">
            <h2>{{Details_ajax1.providerName}}</h2>
            <p>{{Details_ajax1.providerInfo}}</p>
        </div>


        <div>{{geta}}</div>  <!--让index.js中的a显示出来-->

        <!--<button @click="toLizi">跳回去</button>-->
    </div>
</template>
<script>
import {mapGetters} from 'vuex' //让index.js中的a显示出来
export default {
    computed:{
        ...mapGetters(['geta'])
    },
 data(){
     return{
         Details_ajax1_ajax:[],
         mobile:'',
         password:'',
         yanzhengma:'',
         imgCodeUrl:'/xinda-api/ajaxAuthcode',
         sidd :''
     }
 },
//  create(){
//      this.bb(this.$route.query.b)
//  },
created(){
    this.getdata(this.$route.params.id)  
},
 methods:{
     getdata(d){
        // this.sidd = d;
        console.log(d)
        let _this = this
        this.ajax.post("/xinda-api/product/package/detail",this.qs.stringify({
            sId : d
        })).then(function(res){
            _this.Details_ajax1_ajax = res.data.data;
            console.log('....',res)
        })
     },



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
