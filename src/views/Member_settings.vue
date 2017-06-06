<template>
  <div>
    <div class="set">
      <div class="banner">
        <span v-on:click="set()" :class="{active:zhang}">账户设置</span>
        <span v-on:click="paswd()" :class="{active:pass}">修改密码</span>
      </div>
      <div class="zhanghu" v-show="zhang">
        <table>
          <tr>
            <td class="td1">
              <p>当前头像：</p>
            </td>
            <td>
              <img :src="memberpic+memberinfo_ajax.headImg" alt="请上传图片">
            </td>
          </tr>
          <tr>
            <td>
              <p>姓名：</p>
            </td>
            <td>
              <input type="text" v-model="memberinfo_ajax.name">
            </td>
          </tr>
          <tr>
            <td>
              <p>性别：</p>
            </td>
            <td>
              <input type="radio" name="radio" :checked="memberinfo_ajax.gender==1?true:false" value=1 @click="gender =1"> 男
              <input type="radio" name="radio" :checked="memberinfo_ajax.gender==2?true:false" value=0 @click="gender =2"> 女
            </td>
          </tr>
          <tr>
            <td>邮箱：</td>
            <td>
              <input type="text" v-model="memberinfo_ajax.email">
            </td>
          </tr>
          <tr>
            <td>所选地区：</td>
            <td>
              <threeLinkage></threeLinkage>
            </td>
          </tr>
        </table>
        <p class="baocun" @click="save()">保存</p>
      </div>
      <div class="password" v-show="pass">
        <div>
          <span>旧密码：</span>
          <input type="text" v-model="oldpass">
        </div>
        <div>
          <span>新密码：</span>
          <input type="text" v-model="newpass">
        </div>
        <div>
          <span>再输入一次密码：</span>
          <input class="inp" type="text" v-model="newword">
        </div>
        <p class="baocun2" @click="passsubmit()">保存</p>
      </div>
    </div>
  </div>
</template>
<script>
import threeLinkage from './ProvinceCityAreaLinkage.vue'
export default {
  name: 'Member_settings',
  components: {
    threeLinkage
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      zhang: true,
      pass: false,
      memberinfo_ajax: {},
      memberpic: "http://115.182.107.203:8088/xinda/pic",
      gen: 1,
      oldpass: "",
      newpass: "",
      newword: ""
    }
  },
  created() {
    this.memberinfor()
  },
  methods: {
     text_pwd(value){
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value);
    },
    set: function () {
      this.zhang = true;
      this.pass = false;
    },
    paswd: function () {
      this.zhang = false;
      this.pass = true;
    },
    memberinfor() {
      let _this = this;
      this.ajax.post("/xinda-api/member/info").then(function (res) {
        _this.memberinfo_ajax = res.data.data
      })
    },
    passsubmit() {
     if(this.text_pwd(this.oldpass)){
        if(this.text_pwd(this.newpass)){
            if(this.text_pwd(this.newword)){
              if (this.newpass == this.newword) {
                this.ajax.post("/xinda-api/sso/change-pwd", this.qs.stringify({
                  "oldPwd": this.md5(this.oldpass),
                  "newPwd": this.md5(this.newpass)
                })).then(function (res) {
                  console.log(res)
                  alert("修改成功")
                })
              }
              else {
                alert("两次输入新密码不一致")
              }
            }else{
               alert("密码格式错误")
            }
        }else{
           alert("密码格式错误")
        }
     }else{
        alert("密码格式错误") 
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
<style  scoped lang =less>
.set {
  width: 876px;
  height: 521px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
  .banner {
    width: 876px;
    height: 40px;
    border-bottom: 1px solid #e9e9e9;
    .active {
      color: #2693d4;
      border-bottom: 1px solid #2693d4;
    }
    span {
      width: 112px;
      height: 40px;
      display: inline-block;
      margin-left: 20px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
  .zhanghu {
    table {
      width: 950px;
      height: 300px;
      .td1 {
        width: 80px;
      }
      img {
        margin-left: 10px;
      }
      select {
        height:34px!important;
        margin-left: 10px;
        cursor: pointer;
      }
    
      input {
        margin-left: 10px;
      }
    }
    .baocun {
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      margin-left: 97px;
      margin-top: 20px;
      background: #2693d4;
      color: #fff;
      cursor: pointer;
    }
  }
  .password {
    width: 500px;
    height: 220px;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 16px;
    div {
      margin-top: 20px;
      input {
        margin-left: 80px;
      }
      .inp {
        margin-left: 16px;
      }
    }
    .baocun2 {
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border: 1px solid #2693d4;
      border-radius: 5px;
      margin-top: 20px;
      margin-left: 145px;
      cursor: pointer;
    }
  }
}
</style>