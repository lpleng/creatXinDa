<template>
<div>
    <div class="whole">
        <div class="top clear">
            <p class="font-top">首页/公司注册</p>
            <img src="./images/u1182.png">
            <div class="top_right clear">
              <div class="t_r_left">
                <h2>注册分公司</h2>
                <p class="t_r_left_seal">营业执照+5个章(公章、财务章、人名章、发票章、发票章、合同章)</p>
                <div class="t_r_left_price">
                  <p class="prise_p">市场价：<span>￥900.00 </span></p>
                  <p class="prise_p2">价格：<span>￥800.00</span> 元</p>
                </div>
                <p class="t_r_left_type">类型：<span>注册分公司</span></p>
                <p class="t_r_left_area">地区：北京-北京市-朝阳区</p>
                <p class="t_r_left_number">购买数量：<span>-</span><span>1</span><span>+</span></p>
                <span class="t_r_left_buy">立即购买</span><span class="t_r_left_car">加入购物车</span>
              </div>
              <div class="t_r_right">
                  <h3>顶级服务商</h3>
                  <p class="t_r_right_center">北京信达服务中心</p>
                  <p class="t_r_right_refer">马上咨询</p>
                  <div class="t_r_right_serve"><p>查看服务商</p></div>
              </div>
            </div>
        </div>
        <div class="center">
          <img src="./images/u1225.png">
        </div>
        <div class="bottom">
          <div class="bottom_top">
            <span class="b_t_serve">服务内容</span>
            <span class="b_t_goods">商品评价</span>
          </div>
          <div class="bottom_content">
              <div>
                  <p>所需资料</p>
                  <p>1.法人身份证及复印件</p>
                  <p>2.房产证原件及复印件</p>
                  <p>3.租房合同原件及复印件</p>
                  <p>4.股东是个人的提供身份证原件</p>
                  <p>5.股东是企业的提供企业营业执照副本原件复印件加盖公章</p>
                  <p>6.总公司营业执照副本复印件</p>
              </div>
              <div>
                  <p>服务内容</p>
                  <p>1.核名</p>
                  <p>2.核准通知书</p>
                  <p>3.上传资料/现场递交</p>
                  <p>4.资料审核</p>
                  <p>5.审核通过</p>
                  <p>6.工商取营业执照</p>
                  <p>7.备案刻章</p>
                  <p>8.交接证件</p>
              </div>
              <div>
                  <p>服务周期</p>
                  <p>7~25个工作日不等(不同区域，办理时间有一定差异)</p>
              </div>
              <div>
                  <p>服务流程</p>
                  <p>1.办理营业执照10-15个工作日</p>
                  <p>2.工商核名</p>
                  <p>3.网上登记</p>
                  <p>4.现场交材料</p>
                  <p>5.办理营业执照</p>
              </div>
          </div> 
          <div class="bottom_content2">
              <div class="b_c_whole clear">
                  <div class="b_c_w_top">
                      <img src="./images/pingjia.png">
                      <div class="yinxiang">
                          <p>客户印象</p>
                          <p>暂无已添加标签</p>
                      </div>
                  </div>
                  <div class="b_c_w_center">
                      <span>全部评价(0)</span>
                      <span>好评(0)</span>
                      <span>中评(0)</span>
                      <span>差评(0)</span>
                  </div>
                  <div class="b_c_w_bottom">
                      <div class="b_c_bot_t">
                          <span class="assess">评价</span>
                          <span class="satusfied">满意度</span>
                          <span class="people">用户</span>
                      </div>
                      <div class="b_c_bot_con">
                          <ul class="clear">
                              <li class="con_li1">价格包含养老、事业医疗、工商剩余</li>
                              <li class="con_li2"><img src="./images/u8176.png"></li>
                              <li class="con_li3"></li>
                          </ul>
                          <div class="con_bot">
                              <span class="con_bot_s1">上一页</span>
                              <span class="con_bot_s2">1</span>
                              <span class="con_bot_s3">下一页</span>
                          </div>
                      </div>
                  </div>
              </div>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang=less>
*{
  margin:0;
	padding:0;
}
@border:0px solid red;
.clear:after{
	content:"";
	display:block;
	clear:both;
}
.whole{
  width:1200px;
  height:1450px;
  border:@border;
  margin:0 auto;
  .top{
     .font_top{
        font-size:15px;
        color:#2a2a2a;
     }
    img{
      width:525px;
      height:393px;
      border: @border;
      margin-top:15px;
     }
     .top_right{
      float:right;
      width:642px;
      height:393px;
      border:@border;
      margin-top:15px;
        .t_r_left{
          width:387px;
          height:393px;
          border:@border;
          float:left;
          font-size:14px;
          .t_r_left_seal{
            margin-top:20px;
          }
          .t_r_left_price{
            width:387px;
            height:75px;
            margin-top:20px;
            border:@border;
            background: #f7f7f7;
            font-size:14px;
            .prise_p{
              margin:16px 12px 0;
              span{
                text-decoration:line-through;
              }
            }
            .prise_p2{
              margin:6px 12px 0;
              span{
                color:red;
              }
            }
          }
          .t_r_left_type{
            margin-top:20px;
            span{
              width:76px;
              height:28px;
              color:#2693d4;
              border:1px solid #2693d4;
              display:inline-block;
              text-align: center;
              line-height: 28px;
              cursor:pointer;
            }
          }
          .t_r_left_area{
            margin-top:20px;
          }
          .t_r_left_number{
            margin-top:20px;
            span{
              text-align: center;
              font-size:16px;
              display:inline-block;
              width:30px;
              height:24px;
              border:1px solid #cccccc;
            }
          }
          .t_r_left_buy{
            color:#fff;
            width:95px;
            height:27px;
            border:1px solid #2693d4;
            background:#2693d4;
            margin-left:60px;
            margin-top:20px;
            text-align: center;
            display:inline-block;
            line-height: 27px;
            cursor:pointer;
          }
          .t_r_left_car{
            color:#2693d4;
            width:95px;
            height:27px;
            border:1px solid #2693d4;
            margin-left:20px;
            margin-top:20px;
            text-align: center;
            display:inline-block;
            line-height: 27px;
            cursor:pointer;
          }

        }
        .t_r_right{
          width:197px;
          height:231px;
          border:1px solid #2693d4;
          float:right;
          margin-top:15px;
          text-align: center;
          p{
            margin:25px auto 0;
          }
          .t_r_right_center{
            font-size:14px;
          }
          .t_r_right_refer{
            width:88px;
            height:28px;
            line-height: 28px;
            border:1px solid #2693d4;
          }
          .t_r_right_serve{
            width:197px;
            height:75px;
            background: #bdddf2;
            margin-top:32px;
            display:flex;
            align-items: center;
            p{
              width:110px;
              height:30px;
              background: #2693d4;
              line-height: 30px; 
              margin:0 auto;
            }
          }

        }
     }
  }
  .center{
    width:1198px;
    height:98px;
    border:@border;
    margin:20px auto;
    img{
      width:1198px;   
      height:98px; 
    }
  }
  .bottom{
    width:1198px;
    height:850px;
    border:@border;
    .bottom_top{
      width:1198px;
      height:41px;
      border:@border;
      background: #f7f7f7;
      .b_t_serve{
        width:134px;
        height:41px;
        background: #2693d4;
        text-align: center;
        color: #fff;
        line-height: 41px;
        display:inline-block;
      }
      .b_t_goods{
        width:134px;
        height:41px;
        background: #f7f7f7;
        text-align: center;
        color: #3c3c3c;
        line-height: 41px;
        display:inline-block;
      }
    }
    .bottom_content{
      display:none;
      width:1198px;
      height:744px;
      font-size: 14px;
      div{
        margin:20px 24px;
        p{
          line-height:2;
        }
      }
    }
    .bottom_content2{
      width:1198px;
      height:744px;
      border:@border;
      .b_c_whole{
        width:1150px;
        height:400px;
        .b_c_w_top{
          width:1198px;
          height:120px;
            img{
              float:left;
            }
            .yinxiang{
              float:right;
              width:200px;
              height:100px;
              margin-top:10px;
              border-left:1px solid #000;
              p{
                  margin:10px 20px;
              }
            }

        }
        .b_c_w_center{
          width:1200px;
          height:41px;
          background: #f7f7f7;
          line-height: 40px;
          span{
             width:134px;
              height:41px;
              background: #f7f7f7;
              text-align: center;
              color: #000;
              line-height: 41px;
              display:inline-block;
          }
          span:hover{
            background: #2693d4;
            color:#fff;
          }

        }
        .b_c_w_bottom{
          width:1180px;
          height:400px;
          margin:10px 10px;
          border-left:2px solid #ccc;
          .b_c_bot_t{
            width:1170px;
            height:40px;
            margin-left:10px;
            border-bottom:2px solid #ccc;
            .assess{
              margin-left:100px;
            }
            .satusfied{
              margin-left:600px;
            }
            .people{
              margin-left:200px;
            }
          }
          .b_c_bot_con{
            ul{
                li{
                  list-style: none;
                  float:left;
                }
                .con_li1{
                  width:600px;
                  height:300px;
                  border:@border;
                }
                .con_li2{
                  text-align: center;
                  width:200px;
                  height:300px;
                  margin-left:70px;
                  border:@border;
                }
                .con_li3{
                  width:200px;
                  height:300px;
                  margin-left:50px;
                  border:@border;
                }

            }
            .con_bot{
              width:300px;
              height:40px;
              margin:0 auto;
              text-align: center;
              span{
                display:inline-block;
                font-size: 18px;
                border:1px solid #ccc;
              }
              .con_bot_s1{
                width:70px;
                height:30px;
                line-height: 30px;
              }
              .con_bot_s2{
                width:40px;
                height:30px;
                line-height: 30px;
              }
              .con_bot_s3{
                width:70px;
                height:30px;
                line-height: 30px;
              }
            }
          }
        }
      }
    }

  }
}


</style>
