<template>
    <div>
        <div class="set">
            <div class="banner">
                <span v-on:click="set()">账户设置</span><span v-on:click="paswd()">修改密码</span>
            </div>
          <div class="zhanghu" v-show="zhang">
            <table>
              <tr><td class="td1"><p>当前头像：</p></td><td><img src="/static/membercenter/huiyuan.png" alt=""></td></tr>
              <tr><td><p>姓名：</p></td><td><input type="text"></td></tr>
              <tr><td><p>性别：</p></td><td><input type="radio" name="radio">男<input type="radio" name="radio">女</td></tr>
              <tr><td>邮箱：</td><td><input type="text"placeholder="请输入邮箱"></td></tr>
              <tr>
                <td>所选地区：</td>
                <td>
                  <select name=""> 
                      <option value="">北京</option> 
                      <option value="">上海</option> 
                  </select> 
                   <select name=""> 
                      <option value="">北京市</option> 
                      <option value="">上海</option> 
                  </select> 
                   <select name=""> 
                      <option value="">海淀区</option> 
                      <option value="">上海</option> 
                  </select> 
                </td>
              </tr>
            </table>
            <p class="baocun">保存</p>
          </div>
          <div class="password" v-show="pass">
              <div><span>旧密码：</span><input type="text"></div>
              <div><span>新密码：</span><input type="text"></div>
              <div><span>再输入一次密码：</span><input class="inp" type="text"></div>
              <p class="baocun2">保存</p>
          </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Member_settings',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      zhang:true,
      pass:false,
    }
  },
  methods:{
      set:function(){
        this.zhang=true;
        this.pass=false;
      },
      paswd:function(){
        this.zhang = false;
        this.pass = true;
      },
  }
}
</script>
<style  scoped lang =less>
    .set{
      width:876px;
      height:521px;
      margin-left:20px;
      margin-top:20px;
      float:left;
        .banner{
            width:876px;
            height:40px;
            border-bottom:1px solid #e9e9e9;
            span{
              width:112px;
              height:40px;
              display: inline-block;
              margin-left:20px;
              line-height: 40px;
              text-align: center;
              cursor: pointer;
            }
            span:first-child{
              color:#2693d4;
              border-bottom:1px solid #2693d4;
            }
        }
      .zhanghu{
        table{
          width:900px;
          height:300px;
            .td1{
              width:80px;
            }
            img{
              margin-left:10px;
            }
            select{
              margin-left:10px;
              cursor: pointer;
            }
            input{
              margin-left:10px;
            }
        }
        .baocun{
          width:100px;
          height:30px;
          text-align: center;
          line-height: 30px;
          border-radius: 5px;
          margin-left:97px;
          margin-top:20px;
          background: #2693d4;
          color:#fff;
          cursor: pointer;
        }
      }
      .password{
        width:500px;
        height:220px;
        margin-top:20px;
        margin-left:10px;
        font-size: 16px;
        div{
          margin-top:20px;
          input{
            margin-left:80px;
          }
          .inp{
            margin-left:16px;
          }
        }
        .baocun2{
            width:80px;
            height:25px;
            line-height: 25px;
            text-align: center;
            border:1px solid #2693d4;
            border-radius: 5px;
            margin-top:20px;
            margin-left:145px;
            cursor: pointer;
        }
      }
    }
</style>