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
                <li>商品名称</li>
                <li>单价</li>
                <li>数量</li>
                <li>总金额</li>
                <li>订单状态</li>
                <li>订单操作</li>
            </ul>



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
          border:1px solid red;
          margin-top:20px;
          .order_ser{
            width:263px;
          }
        }
        .r_time{
          width:934px;
          height:23px;
          border:1px solid red;
          margin-top:10px;
        }
        ul{
          width:934px;
          height:23px;
          border:1px solid red;
          margin-top:10px;
          li{
            float:left;
            margin-left:50px;
          }
        }
    }
}

</style>