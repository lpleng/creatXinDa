<template>
<div>
<Row class="ph_whole">
        <!--账户设置 top-->
     <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
                <div class="ph_setting_top">
                    <span  class="ph_setting_top1"><</span>
                    <span  class="ph_setting_top2">账户设置</span>
                </div>
            </Col>
     </Row>
     <!--背景样式-->
    <Row>
        <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_bg_gray"></div>
        </Col>
    </Row>
    <!--账户设置-->
    <Row>
         <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_intro_serhome">
               <p>账户设置</p>
            </div>
         </Col>
    </Row>
    <!--账户设置内容-->
    <Row class="dangqianimg">
         <Col :xs="6" :sm="6" :md="0" :lg="0">
            <p>当前头像:</p>
         </Col>
         <Col :xs="18" :sm="18" :md="0" :lg="0">
                <img src="/static/membercenter/huiyuan.png" alt="">
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="6" :sm="6" :md="0" :lg="0">
            <p>真实姓名:</p>
         </Col>
         <Col :xs="18" :sm="18" :md="0" :lg="0">
               <input  class="allinput"  type="text" v-model="memberinfo_ajax.name">
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="6" :sm="6" :md="0" :lg="0">
            <p>邮箱:</p>
         </Col>
         <Col :xs="18" :sm="18" :md="0" :lg="0">
            <input  class="allinput"  type="text" v-model="memberinfo_ajax.email">
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="6" :sm="6" :md="0" :lg="0">
            <p>性别:</p>
         </Col>
         <Col :xs="18" :sm="18" :md="0" :lg="0">
            <input type="radio" name="radio" :checked="memberinfo_ajax.gender==1?true:false" value=1 @click="gender =1"> 男
            <input type="radio" name="radio" :checked="memberinfo_ajax.gender==2?true:false" value=0 @click="gender =2"> 女
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="6" :sm="6" :md="0" :lg="0">
            <p>所在地:</p>
         </Col>
         <Col :xs="18" :sm="18" :md="0" :lg="0">
                <threeLinkage></threeLinkage>
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="24" :sm="24" :md="0" :lg="0">
          
            <span class="baocun"  @click="save()">保存</span>
         </Col>
    </Row>
    <!--灰色背景-->
    <Row>
        <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_bg_gray"></div>
        </Col>
    </Row>
    <!--修改密码-->
    <Row>
         <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_intro_serhome">
               <p>修改密码</p>
            </div>
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="10" :sm="10" :md="0" :lg="0">
            <p>旧密码:</p>
         </Col>
         <Col :xs="14" :sm="14" :md="0" :lg="0">
            <input  class="allinput"  type="password" v-model="oldpass" placeholder="设置6-20位含数字、字母密码">
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="10" :sm="10" :md="0" :lg="0">
            <p>新密码:</p>
         </Col>
         <Col :xs="14" :sm="14" :md="0" :lg="0">
            <input  class="allinput"  type="password" v-model="newpass" placeholder="设置6-20位含数字、字母密码">
         </Col>
    </Row>
    <Row class="dangqianimg">
         <Col :xs="10" :sm="10" :md="0" :lg="0">
            <p>再次输入新密码:</p>
         </Col>
         <Col :xs="14" :sm="14" :md="0" :lg="0">
             <input  class="allinput"  type="password" v-model="newword" placeholder="设置6-20位含数字、字母密码">
         </Col>
    </Row>
        <Row class="dangqianimg">
         <Col :xs="24" :sm="24" :md="0" :lg="0" 
            <p class="baocun" @click="passsubmit()" @keyup.13="passsubmit()">保存</p>
            <p class="warning"v-if="warning!=''" style="border:0；width:0">{{warning}}</p>
         </Col>
    </Row>
</Row>



</div>
</template>

<script>
import threeLinkage from './ProvinceCityAreaLinkage.vue'
export default {
  name:'Mine_setting',
  components: {
    threeLinkage
  },
  data() {
    return {
      msg: '',
      memberinfo_ajax: {},
      memberpic: "http://115.182.107.203:8088/xinda/pic",
      gen: 1,
      oldpass: "",
      newpass: "",
      newword: "",
      warning:"",
    }
  },
  created() {
    this.memberinfor()
  },
  methods: {
     text_pwd(value){
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value);
    },
    memberinfor() {
      let _this = this;
      this.ajax.post("/xinda-api/member/info").then(function (res) {
        _this.memberinfo_ajax = res.data.data
      })
    },
    passsubmit() {
    let _this = this
     if(this.text_pwd(this.oldpass)){
        if(this.text_pwd(this.newpass)){
            if(this.text_pwd(this.newword)){
              if (this.newpass == this.newword) {
                this.ajax.post("/xinda-api/sso/change-pwd", this.qs.stringify({
                  "oldPwd": this.md5(this.oldpass),
                  "newPwd": this.md5(this.newpass)
                })).then(function (res) {
                  console.log(res)
                  if(res.data.status==1){
                  _this.warning = "修改成功"
                  }
                  else{
                    _this.warning = "旧密码错误"
                  }
                })
              }
              else {
                _this.warning ="两次输入新密码不一致"
              }
            }else{
               _this.warning ="密码格式错误"
            }
        }else{
           _this.warning ="密码格式错误"
        }
     }else{
        _this.warning ="密码格式错误"
     }
    },
    save() {
      let _this = this;
      this.ajax.post("/xinda-api/member/update-info", this.qs.stringify({
        "name": this.memberinfo_ajax.name,
        "email": this.memberinfo_ajax.email,
        "gender": this.gender
      })).then(function (res) {
        if (res.data.status == 1) {
          location.reload()
        }
      })
    }
  }
}
</script>

<style scoped lang=less>
.ph_whole{
    position:relative;
    margin-bottom:100px;
}
    .ph_setting_top{
        width:95%;
        margin:10px auto;
          font-size: 16px;
        .ph_setting_top1{
             font-weight:bold;
        }
         .ph_setting_top2{
             margin-left:40%;;
             font-weight:bold;
           
         }
    }
    /*背景样式*/
    .ph_bg_gray {
        width: 100%;
        height: 10px;
        background: #ccc;
        border-top: 2px solid #b7b7b7;
        border-bottom: 2px solid #b7b7b7;
   }
    .ph_det_intro_serhome {
        margin: 10px auto;
        width: 95%;
        border-bottom: 1px solid #2693d4;
        p {
            color: #000;
            font-weight: bold;
           
        }
   }
   .dangqianimg{
       width:95%;
       margin:0 auto;
        img{
            width:30%;
        }
   }
   .dangqianimg{
      margin-top:10px;
   }
   .allinput{
       width:80%;
   }
   .baocun{
       width:14%;
       color:#fff;
       background: #2693d4;
       border:1px solid #2693d4;
       display: inline-block;
       text-align: center;
       margin-left:28%;
       margin-top:10px;
       margin-bottom:20px;
       border-radius: 5px;
   }
    .warning{
      width:50%;
      margin:0 auto;
      border: 1px solid #ccccd4;
      border-radius: 5px;
      text-align: center;
      line-height: 25px;
      text-align: center;
    }
</style>