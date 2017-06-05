<template>
    <div>
        <div class="right_side" v-show="my">
            <div class="r_top">
                <p>我的评价</p>
            </div>
            <div class="r_banner">
                <span v-on:click="norevew()" :class="{active:ok}">未评价</span>
                <span v-on:click="yesrevew()" :class="{active:ok2}">已评价</span>
            </div>
            <div class="r_content" v-show="ok">
                <div class="r_con_img"><img src="/static/membercenter/pingjiaz.png" alt=""></div>
                <div class="r_con_xin">
                    <p>信达北京服务中心</p>
                    <p>服务单号：<span>B1823</span></p>
                    <p>购买内容：test</p>
                </div>
                <div class="r_con_time"><p>购买时间：2016-01-01 02:12:21</p></div>
                <div class="r_con_revew" ><p v-on:click="go()">去评价</p></div>
            </div>

            <div class="r_content2" v-show="ok2">
                <div class="r_con_img"><img src="/static/membercenter/pingjiaz.png" alt=""></div>
                <div class="r_con_xin">
                    <p>信达北京服务中心</p>
                    <p>服务单号：<span>B1823</span></p>
                    <p>购买内容：test</p>
                </div>
                <div class="r_con_time"><p>购买时间：2016-01-01 02:12:21</p></div>
                <div class="r_con_revew"><p>已评价</p></div>
            </div>
        </div>
        <div class="go_revew" v-show="pingjia">
            <div class="r_top">
                <p>评价</p>
            </div>
            <ul>
                <li><p>服务单号：B16230363</p></li>
                <li><p>购买内容：test</p></li>
                <li><p>购买时间：2016-12-06</p></li>
            </ul>
            <table>
                <tr><td class="td1">评价:</td><td class="td2"><input type="radio" name="radio" />好评<input type="radio"  name="radio"/>中评<input type="radio"  name="radio"/>差评</td></tr>
                <tr><td class="td1">评分:</td><td class="td2"><img src="a" alt="星星"></td></tr>
                <tr><td class="td1">感受:</td><td class="td2"><input class="biginput" type="text"></td></tr>
            </table>
           <input v-on:click="tijiao" class="tijiao" type="button" value="提交">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Member_userrevew',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      ok:true,
      ok2:false,
      pingjia:false,
      my:true,
      isA:true,
      isB:false,
    }
  },
  created(){
       this.businesslist();
  },
  methods:{
      norevew:function(){
          this.ok=true;
          this.ok2=false;
      },
      yesrevew:function(){
          this.ok=false;
          this.ok2=true;
      },
      go:function(){
          this.pingjia=true;
          this.my=false;
      },
      tijiao:function(){
          this.pingjia=false;
          this.my = true;
      },
       //获取订单列表
    businesslist(){
      let that =this;
      this.ajax.post("/xinda-api/business-order/grid",this.qs.stringify(
      {  "businessNo":1,
        "startTime":"2017-03-28",
        "endTime":"2017-03-28",
        "start":0}
      )).then(function(res){
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang =less>
    .right_side{
        width:934px;
        height:614px;
        margin-left:20px;
        margin-top:30px;
        float:left;
        .r_top{
          width:934px;
          height:30px;
          border-bottom:1px solid #e9e9e9;
          p{
            width:112px;
            height:28px;
            font-size:14px;
            line-height: 30px;
            margin-left:40px;
            color:#2693d4;
            text-align: center;
            border-bottom:1px solid #2693d4;
          }
        }
        .r_banner{
            width:950px;
            height:43px;
            margin-top:20px;
            background: #f7f7f7;
            .active{
                background:#2693d4;
            }
            span{
                display: inline-block;
                text-align: center;
                cursor: pointer;
                line-height: 43px;
                width:107px;
                height:43px;
            }
            
        }
        .r_content{
            width:950px;
            height:150px;   
            div{
                float:left;
            }
            .r_con_img{
                width:98px;
                height:98px;
                margin:20px 10px;
                img{
                    border:1px solid #cccccc;
                }
            }
            .r_con_xin{
                width:160px;
                height:100px;
                margin:20px 10px;
                p{
                    margin-top:10px;
                    span{
                        color:red;
                    }
                }
                p:first-child{
                    font-size:16px;
                    font-weight: bold;
                }

            }
            .r_con_time{
                width:250px;
                height:40px;
                margin:60px 10px;
            }
            .r_con_revew{
                margin:50px 0px 0 200px;
                p{
                    width:110px;
                    height:40px;
                    border:1px solid #2693d4;
                    text-align: center;
                    border-radius: 5px;
                    font-size:16px;
                    color:#2693d4;
                    line-height: 40px;
                    cursor: pointer;
                }
            }
        }
        .r_content2{
            width:950px;
            height:150px;
             div{
                float:left;
            }
            .r_con_img{
                width:98px;
                height:98px;
                margin:20px 10px;
                img{
                    border:1px solid #cccccc;
                }
            }
            .r_con_xin{
                width:160px;
                height:100px;
                margin:20px 10px;
                p{
                    margin-top:10px;
                    span{
                        color:red;
                    }
                }
                p:first-child{
                    font-size:16px;
                    font-weight: bold;
                }

            }
            .r_con_time{
                width:250px;
                height:40px;
                margin:60px 10px;
            }
            .r_con_revew{
                margin:50px 0px 0 200px;
                p{
                    width:110px;
                    height:40px;
                    border:1px solid #2693d4;
                    text-align: center;
                    border-radius: 5px;
                    font-size:16px;
                    color:#2693d4;
                    line-height: 40px;
                }
            }
        }

    }
    .go_revew{
        width:934px;
        height:614px;
        margin-left:10px;
        margin-top:30px;
        float:left;
        .r_top{
          width:934px;
          height:30px;
          border-bottom:1px solid #e9e9e9;
          p{
            width:70px;
            height:28px;
            font-size:14px;
            line-height: 30px;
            margin-left:40px;
            color:#2693d4;
            text-align: center;
            font-weight: bold;
            border-bottom:1px solid #2693d4;
          }
        }
        ul{
            list-style: none;
            margin-top:20px;
            li{
                float:left;
                margin-left:50px;
            }
        }
        table{
            margin-left:20px;
            tr{
                margin-top:20px;
            }
            .td1{
                width:60px;
            }
            .td2{
                width:750px;
                input{
                    margin-left:40px;
                }
                img{
                    margin-left:40px;
                }
                .biginput{
                    width:700px;
                    height:200px;
                }
            }

        }
        .tijiao{
            margin-left:700px;
            margin-top:20px;
            width:132px;
            height:40px;
            color:#fff;
            background: #2693d4;
            border-radius: 5px;
            cursor: pointer;
        }



    }

</style>