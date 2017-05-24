<template>
  <div class="order_info">
      <div class="fir_pay">
          <span>首页/支付</span> 
      </div>
      <div class="details">
          <p class="p">订单详情</p>
          <ul class="clear">
            <li class="clear num">
                  <div><p class="form">订单编号：<span>s62727345689090</span></p></div>
                  <div><p class="form">创建时间：2017—07-01 12:30:23</p></div>
                  <div class="account ">
                        <p>订单金额：<span>￥2000.00</span>元</p>
                        <div class="div" @click = "order_show=!order_show">
                          <a class="span">订单明细</a>
                          <div class="traggle"></div>
                        </div>
                  </div>
            </li>
            <li class="bill" v-show = "order_show"></li>
            <li class="bill" v-show = "order_show"></li>
          </ul>
      </div> 
        <div class="order_way">
          <p>支付方式</p>
         </div>
         <div class="no_E_bank">
           <p>非网银支付</p>
           <div class="clear">
             <label for="">
                <input type="radio" class="choose" name="choose_pay">
                <img src="/static/images/yinlian.jpg" alt="">
             </label>
           </div>
         </div>
         <div class="plant_pay clear">
           <p>平台支付</p>
           <div class="">
                 <label for="">
                        <input type="radio" class="choose" name="choose_pay">
                        <img src="/static/images/weixin.jpg" alt="">
                    </label>
             </div>
             <div class="">
                     <label for="">
                        <input type="radio" class="choose" name="choose_pay">
                        <img src="/static/images/zhifubao.jpg" alt="">
                    </label>
            </div>
         </div>
           <div class="auto_pay">
              <p>自助转账  <span>因限额不能支付时，建议自助转账</span></p>
              <div class="clear clear">
                <label for="">
                    <input type="radio" class="choose" name="choose_pay">
                    <img src="/static/images/u2225.png" alt="">
                </label>
              </div>   
         </div>
        <div class="note"> <a>注：转账时请将订单编号备注在付款信息里；转账完成后，请通知客服</a></div>
        <div class="sum clear">
          <div>
            <p>金额 <span>￥800.00</span></p>
            <div><p>去结算</p></div>
          </div>
        </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
    order_show:false
    }
  }
}
</script>


<style lang="less">
  *{
    margin:0;
    padding:0;
    list-style: none;
  }
  .clear:after{
    content:"";
    display:block;
    clear:both;
}

  .order_info{
    margin:0 auto;
    width:1208px;
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
           margin-top:30px;
              p{
                
                font-size:13px;
             
                span{
                  color:red;
                  
                }
              }
              .div{
                cursor:pointer;
                .span{
                color:red;
                float:left;
                margin-right:-39px;
                margin-left:40px;
              }
              .traggle{
                width: 0;
                height: 0;
                border-top:10px solid transparent;
                border-bottom: 6px solid #ff0000;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
                cursor:pointer;
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
        p{
          line-height: 27px;
          text-align: center;
          cursor:pointer;
        }
      }
   }
 }
}

  
</style>
