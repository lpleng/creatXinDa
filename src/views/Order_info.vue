<template>
  <div class="order_info">
      <div class="fir_pay">
          <span>首页/支付</span> 
      </div>
      <div class="details">
          <p class="p">订单详情</p>
          <ul class="clear">
            <li class="clear num">
                  <div><p class="form">订单编号：<span>{{businessOrder.businessNo}}</span></p></div>
                  <div><p class="form">创建时间：{{businessOrder.createTime}}</p></div>
                  <div class="account ">
                        <p>订单金额：<span>￥{{(businessOrder.totalPrice/100).toFixed(2)}}</span>&nbsp;元</p>
                        <div class="div" @click = "order_show=!order_show">
                         订单明细
                        </div>
                  </div>
            </li>
            <li class="bill" v-show = "order_show" v-for="value in serviceOrderList">
              <div><p class="form2">服务名称：{{value.serviceName}}</p></div>
              <div><p class="form2">单价：<span>￥{{(value.unitPrice/100).toFixed(2)}}</span></p></div>
              <div><p class="form2">数量：<span>{{value.buyNum}}</span></p></div>
              <div><p class="form2">总额：<span>￥{{(value.totalPrice/100).toFixed(2)}}</span></p></div>
            </li>
          </ul>
      </div> 
        <div class="order_way">
          <p>支付方式</p>
         </div>
         <div class="no_E_bank">
           <p>非网银支付</p>
           <div class="clear">
             <label for="">
                <input type="radio" class="choose" name="choose_pay" src="/xinda-api/pay/china-pay" @click="nowChoose=1">
                <img src="/static/images/yinlian.jpg" alt="">
             </label>
           </div>
         </div>
         <div class="plant_pay clear">
           <p>平台支付</p>
           <div class="">
                 <label for="">
                        <input type="radio" class="choose" name="choose_pay" @click="nowChoose=2">
                        <img src="/static/images/weixin.jpg" alt="">
                    </label>
             </div>
             <div class="">
                     <label for="">
                        <input type="radio" class="choose" name="choose_pay" @click="nowChoose=3">
                        <img src="/static/images/zhifubao.jpg" alt="">
                    </label>
            </div>
         </div>
           <div class="auto_pay">
              <p>自助转账  <span>因限额不能支付时，建议自助转账</span></p>
              <div class="clear clear">
                <label for="">
                    <input type="radio" class="choose" name="choose_pay" @click="nowChoose=4">
                    <img src="/static/images/u2225.png" alt="">
                </label>
              </div>   
         </div>
        <div class="note"> <a>注：转账时请将订单编号备注在付款信息里；转账完成后，请通知客服</a></div>
        <div class="sum clear">
          <div>
            <p>金额 <span>￥{{total_pirce}}</span></p>
            <div><p v-on:click="statement()">去结算</p></div>
            <div v-show="msg?true:false" class="pay_warning">{{msg}}</div>
          </div>
        </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg:"",
      order_show:false,
      Order_info_ajax:[],
      nowChoose:-1,
      businessOrder:null,
      serviceOrderList:null
    }
  },
  created(){
    this.order_info();//加载页面时请求数据
  },
  computed:{
    total_pirce(){
      return this.serviceOrderList.reduce(function(pre,cur){
        return ((~~pre.totalPrice + ~~cur.totalPrice)/100).toFixed(2)
      })
    }
  },
 methods:{
   order_info(){
      let _this = this;
      this.ajax.post("/xinda-api/business-order/detail",this.qs.stringify({
        businessNo:this.$route.query.order_num
      })).then(function(res){
        console.log(res)
        // res.data.data  
        _this.businessOrder = res.data.data.businessOrder
        _this.serviceOrderList = res.data.data.serviceOrderList  
        console.log(_this.businessOrder)
        console.log(_this.serviceOrderList)
        // serviceOrderList
      })
   },
    choose_pay_way(pay_url,pay_data){
      let _this = this;
      this.ajax.post(pay_url,this.qs.stringify(pay_data)).then(function (res) {
      },function(err){
        console.log("err"+err)
      })
    },
    statement(){
        switch(this.nowChoose){
          case 1: {this.getdata('/xinda-api/pay/china-pay',{});};break;
          case 2: {this.getdata('/xinda/xinda-api/pay/ weixin-pay',{});};break;
          case 3: {this.getdata('/xinda/xinda-api/pay/ali-pay',{});};break;
          case 4: {this.getdata('/xinda/xinda-api/pay/ weixin-js-pay',{});};break;
          default: this.msg = "请选择支付方式";
        }
    }
 }
}
</script>


<style lang="less">
 .order_info{
    margin:0 auto;
    width:1200px;
    height:1000px;
    .fir_pay{
        font-size:13px;
        margin-top:17px;

      span{
        color:#434343;
       line-height: 30px;
       }
    }
    .details{
      // height:31px;
      margin-top:17px;
      .p{
        color:#3d9bd9;
        line-height: 31px;
        border-bottom:1px solid #bdbdbd;
      }
     ul{
       background-color: #f7f7f7;
       margin-top:38px;
       li{
         height:73px;
         border:1px solid #b6b6b6;
         border-top: 0;
         overflow: hidden;
            div{
              float:left;
              margin-left:46px;
              width:351px;
              .form{
                line-height: 73px;
                color: #000;
                span{
                  color: #6cafdc;
                }
              }
            }
         .account{
           float:left;
           margin-top: 15px;
              p{ 
                font-size:13px;
                span{
                  color:rgb(102, 188, 192);  
                }
              }
              .div{
                cursor:pointer;
                width: 75px;
                position: relative;
                z-index: 0;
                margin-top: 5px;
                color: #f3a1b7;
                &:after{
                  content:'';
                  display: block;
                  width: 0;
                  height: 0;
                  border: 6px solid transparent;
                  border-top:6px solid #f3a1b7; 
                  position: absolute;
                  top: 7.5px;
                  right: 0px;
                  z-index: 0;
                }
            }
         }
       }
        .bill{
            div{
              float:left;
              margin-left:46px;
              width:200px;
              .form2{
                line-height: 73px;
                height: 73px;
                color: #000;
                span{
                  color: #66bcc0;
                }
              } 
            }
         }
             
     }
    }
    .order_way{
         p{
        color:#3d9bd9;
        line-height: 31px;
        border-bottom:1px solid #bdbdbd;
      }
    }
    .no_E_bank{
      p{
        font-size: 13px;
        color:#676767;
        line-height: 64px;
      }
      div{
        width:207px;
        height:52px;
        border:1px solid #efefef;
        position:relative;
        img{
          width:149px;
          height:42px;
         position:absolute;
         left:35px;
         top:5px;
        }
        .choose{
          position:absolute;
          left:5px;
          top:20px;
          cursor:pointer;
        }
      
     }
      
   }
    .plant_pay{
          p{
            font-size: 13px;
            color:#676767;
            line-height: 64px;
         }
     div{
             margin-right:6px;
              width:207px;
              height:52px;
              border:1px solid #efefef;
              position:relative;
              float:left;
            img{
              width:100px;
              height:42px;
              position:absolute;
              left:55px;
             top:5px;
            }
            .choose{
                position:absolute;
                left:5px;
                top:20px;
                cursor:pointer;
            }
         }
 }
  .auto_pay{
      p{
        font-size: 13px;
        color:#676767;
        line-height: 64px;
        span{
          font-size:11px;
          margin-right:5px;
        }
          
      }
      div{
        width:420px;
        height:52px;
        border:1px solid #efefef;
        position:relative;
        img{
          width:371px;
          height:52px;
          float:right;
        }
        .choose{
          position:absolute;
          left:5px;
          top:20px;
          cursor:pointer;
        }
    }    
 }
 .note{
   width:420px;
   margin-top:17px;
   a{
     font-size:11px;
     color:#fe6867;
   }
 }
 .sum{
   height:61px;
   margin-top:87px;
   div{
     float:right;
     p{
       color:#686868;
       font-size:12px;
       text-align: right;
       span{
         color:#2793d3;
         font-size:18px;
        }
      }
      div{
        margin-top:17px;
        width:102px;
        height:27px;
        border:1px solid #2793d3;
        border-radius: 5px;
        &.pay_warning{
          color: red;
          line-height: 25px;
          border-color: red;
          margin-right: 20px;
          padding: 0 10px;
          width: 120px;
        }
        p{
          line-height: 25px;
          text-align: center;
          cursor:pointer;
        }
      }
   }
 }
}

  
</style>
