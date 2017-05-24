<template>
<div>
    <div class="whole">
        <div class="left_side">
            <p>首页/公司工商</p>
            <div class="l_content">
              <div class="con_top">
                  <img src="/static/membercenter/huiyuan.png">
                  <p>12345678901</p>
              </div>
              <div class="con_content">
                  <div><img src="/static/membercenter/order.png" alt=""><span>我的订单</span></div>
                  <div><img src="/static/membercenter/pingjia.png" alt=""><span>用户评价</span></div>
                  <div><img src="/static/membercenter/shezhi.png" alt=""><span>账户设置</span></div>
              </div>
            </div>
        </div>
        <div class="right_side">
            <div class="r_top">
                <p>我的订单</p>
            </div>
            <div class="r_ordernum">
              订单号：<input class="order_ser" type="text" placeholder="请输入订单号搜索"><input class="serc" type="button" value="搜索">
            </div>
            <div class="r_time">
              创建时间：<input type="text"><input type="text">
            </div>
            <ul>
                <li class="item1">商品名称</li>
                <li class="item2">单价</li>
                <li class="item3">数量</li>
                <li class="item4">总金额</li>
                <li class="item5">订单状态</li>
                <li class="item6">订单操作</li>
            </ul>
            <div class="r_ordertime">
              <table border="1" cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td>订单号：订单时间</td><td></td><td></td><td></td></tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><p>信达服务中心</p><p>注册分公司</p></td><td></td><td></td><td></td>
                      </tr>
                      <tr>
                          <td></td><td></td><td></td><td></td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
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

  },
}
</script>


<style scoped lang=less>


.whole{
  width:1200px;
  height:651px;
  border:1px solid red;
  margin:10px auto;
    .left_side{
      width:242px;
      height:553px;
      border: 1px solid red;
      float:left;
      .l_content{
          width:240px;
          height:526px;
          margin-top:10px;
          .con_top{
            width: 238px;
            height:141px;
            background: #e9e9e9;
            text-align: center;
            font-size:16px;
            img{
              margin-top:10px;
            }
          }
          .con_content{
            width:238px;
            height:372px;
            background: #f7f7f7;
            margin-top:10px;
            div{
              width:240px;
              height:51px;
              margin:0 auto;
              cursor: pointer;
              img{
                margin-left:70px;
                margin-top:14px;
                vertical-align: middle;
              }
               span{
                  font-size:16px;
                  display: inline-block;
                  vertical-align: middle;
                  padding-left:10px;
                }
              
            }
          }
      }
    }
    .right_side{
        width:934px;
        height:614px;
        border:1px solid red;
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
        .r_ordernum{
          width:934px;
          height:23px;
          margin-top:20px;
          font-size:16px;

          .order_ser{
            width:263px;
            height:23px;
            margin-left:26px;
          }
          .serc{
            width:70px;
            height:25px;
            border-radius: 5px;
            background: #fff;
            color:#2693d4;
            border:1px solid #2693d4;
            margin-left:20px;
          }
        }
        .r_time{
          width:934px;
          height:23px;
          margin-top:10px;
          font-size:16px;
          input{
            width:112px;
            height:23px;
            margin-left:10px;
          }

        }
        ul{
          width:934px;
          height:35px;
          margin-top:10px;
          background: #f7f7f7;
          margin-top:20px;
          li{
            float:left;
            color:#000;
            font-weight:bold;
            line-height: 35px;
          }
          .item1{
            margin-left:40px;
          }
          .item2{
            margin-left:270px;
          }
          .item3{
            margin-left:80px;
          }
          .item4{
            margin-left:80px;
          }
          .item5{
            margin-left:80px;
          }
          .item6{
            margin-left:80px;
          }
        }
        .r_ordertime{
          table{
            width:936px;
            height:172px;
            border:1px solid;
            
          }
          td{
              
            }
        }
    }
}

</style>