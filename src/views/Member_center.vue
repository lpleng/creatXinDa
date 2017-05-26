<template>
    <div>
        <!--会员中心右侧订单部分-->
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
              <table border="1px solid #f7f7f7 " cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td colspan="4"><span class="order_sp">订单号：254678925</span><span class="time_sp">订单时间:16.06.06</span></td></tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="t_d1"><img src="s" alt=""><p>信达服务中心<br>注册分公司</p><span class="t_sp">800.00</span><span class="t_sp2">1</span></td><td class="t_d2">800.00</td><td class="t_d3">等待买家付款</td><td class="t_d4" rowspan="2"><p  class="t_d4_p1">付款</p><p  class="t_d4_p2">删除订单</p></td>
                      </tr>
                      <tr>
                          <td  class="t_d1"><img src="s" alt=""><p>信达服务中心<br>注册分公司</p><span  class="t_sp">800.00</span><span  class="t_sp2">1</span></td><td class="t_d2">800.00</td><td class="t_d3">等待买家付款</td>
                      </tr>
                  </tbody>
              </table>
              <table border="1px solid #f7f7f7" cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td colspan="4"><span class="order_sp">订单号：254678925</span><span class="time_sp">订单时间:16.06.06</span></td></tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="t_d1"><img src="s" alt=""><p>信达服务中心<br>注册分公司</p><span class="t_sp">800.00</span><span class="t_sp2">1</span></td><td class="t_d2">800.00</td><td class="t_d3">等待买家付款</td><td class="t_d4" rowspan="2"><p class="t_d4_p1">付款</p><p class="t_d4_p2">删除订单</p></td>
                      </tr>
                      <tr>
                          <td  class="t_d1"><img src="s" alt=""><p>信达服务中心<br>注册分公司</p><span  class="t_sp">800.00</span><span  class="t_sp2">1</span></td><td class="t_d2">800.00</td><td class="t_d3">等待买家付款</td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Member_center',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
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
        /*table*/
        .r_ordertime{
          table{
            width:936px;
            height:172px;
            border:1px solid #f7f7f7;
            margin-top:20px;
          }
          thead{
            background: #f7f7f7;
          }
          .order_sp{
              margin-left:10px;
          }



          .t_d1{
            width:550px;
            height:70px;
              img{
                float:left;
                width:48px;
                height: 48px;
                background:#e8e8e8;
                margin-top:10px;
                margin-left:10px;
              }
              p{
                float:left;
                margin-left:10px;
                margin-top:12px;

              }
              .t_sp{
                margin-left:204px;
                line-height: 70px;
              }
              .t_sp2{
                margin-left:80px;
              }

          }
          .t_d2{
            width:120px;
            text-align: center;
          }
          .t_d3{
            width:140px;
            text-align: center;
          }
          .t_d4{
            text-align: center;
            .t_d4_p1{
              width:54px;
              height:24px;
              border:1px solid #2693d4;
              border-radius: 5px;
              margin:0 auto;
              cursor: pointer;
            }
            .t_d4_p2{
              color:red;
              margin-top:10px;
              cursor: pointer;
            }

          }
        }
    }


</style>