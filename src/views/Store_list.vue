<template>
  <div class="div">
      <div class="fir_list">首页/店铺列表</div>
      <div class="server_style">
          <div class="s_s_top">
            <div class="left">服务区域</div>
             <div class="right">
              <select  id=""><option value="">省</option><option value="">山东</option></select>
              <select name="" id=""><option value="">市</option></select>
              <select name="" id=""><option value="">区</option></select>
             </div>

          </div>
          <div class="s_s_bottom">
            <div class="left">产品类型</div>
             <div class="right">
                 <a id="all">所有</a>
                 <a>专利申请</a>
                 <a>版权保护</a>
                 <a>商标注册</a>
                 <a>代理记账</a>
                 <a>公司注册</a>
                 <a>企业社保</a>
                 <a>公司变更</a>
                 <a>税务代办</a>
                 <a>个人社保</a>
                 <a>审计报告</a>
             </div>
            
          </div>
      </div>
      <div class="selector">
          <div class="s1">综合排序
            <p></p>
          </div>
          <div class="s2">评价↑↑<p></p></div>
          <div class="s2">接单数↓↓<p></p></div>
      </div>
      <div class="content">
          <div class="ads">
            <div class="ads1">
                <img src="/static/images/logo.png" alt="">
                <p>金牌服务商</p>
            </div>
            <div class="ads2">
                <div class="list1">信客北京服务中心</div>
                <div class="list2">信誉：</div>
                <div class="list2">北京-北京市-朝阳区</div>
                <div class="list4">累计服务客户次数：1300 | 好评率： 100%</div>
                <div class="list5">
                  <div class="blue">代理记账</div>
                  <div class="blue">公司变更</div>
                  <div class="blue">个人社保</div>
                  <div class="blue">审计报告</div>
                </div>
                <div class="list6"><a >进入店铺</a></div>
            </div>
          </div>
         <div class="ads">
            <div class="ads1">
                <img src="/static/images/logo.png" alt="">
                <p>金牌服务商</p>
            </div>
            <div class="ads2">
                <div class="list1">信客北京服务中心</div>
                <div class="list2">信誉：</div>
                <div class="list2">北京-北京市-朝阳区</div>
                <div class="list4">累计服务客户次数：1300 | 好评率： 100%</div>
                <div class="list5">
                  <div class="blue">代理记账</div>
                  <div class="blue">公司变更</div>
                  <div class="blue">个人社保</div>
                  <div class="blue">审计报告</div>
                </div>
                <div class="list6"><a >进入店铺</a></div>
            </div>
          </div>
      </div>
      <div class="page">
        <div href="">上一页</div>
        <div class="num">1</div>
        <div href="">下一页</div>

      </div>



  </div>
</template>

<script>
export default {
  name: 'Store_list',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      // Store_list_ajax:[],
    }
  } 

}

</script>


<style scoped lang="less">
    .div{
      width:1200px;
      margin:27px auto;
      .fir_list{
        color: #696969;
        font-size: 13px;
        line-height: 39px;
      }
      .server_style{
        height:86px;
        width:100%;
        border:1px solid #bcbcbc;
        background: #f2f2f2;
        div{
          height:50%;
           border-bottom:1px solid #bcbcbc;
           font-size:13px;
           font-weight: 7;
           text-align: center;
           .left{
              width:88px;
              height:100%;
              border-right:1px solid #bcbcbc;
              float:left;
              line-height: 43px;
           }
           .right{
             width:1110px;
             height:42px;
             float:right;
             line-height: 43px;
             select{
               width:120px;
               height:33px;
              }
                a{
                  float:left;
                  width:9.09%;
                  cursor:pointer;
                }
                 a:hover{
                    color:#fff;
                    border-radius: 10px;
                    background: #169bd5;
                  }
                #all{
                  color:#fff;
                  border-radius: 10px;
                  background: #169bd5;
                }
           }
          
        }

      }
       .selector{
        height:43px;
        width:100%;
        border:1px solid #bcbcbc;
        background: #f2f2f2;
        margin-top:16px;
        div{
          float:left;
          width:99px;
          border-right:1px solid #bcbcbc;
          height:42px;
          line-height: 42px;
          text-align: center;
        }
        .s1{
          background: #4eb5ba;
          border-radius: 5px;
          position:relative;
          color:#fff;
          p{
             width: 0;
              height: 0;
              border:10px solid transparent;
              border-top: 6px solid #4eb5ba;
              position:absolute;
              left:50%;
              top:42px;
              margin-left: -10px; 
          }

        }
        .s2:hover{
           background: #4eb5ba;
          border-radius: 5px;
          position:relative;
          color:#fff;
           p{
             width: 0;
              height: 0;
              border:10px solid transparent;
              border-top: 6px solid #4eb5ba;
              position:absolute;
              left:50%;
              top:42px;
              margin-left: -10px; 
          }

        }
      }
      .content{
        height:290px;
        border:1px solid #bcbcbc;
        .ads{
          width:565px;
          height:250px;
          border:1px solid #f2f2f2;
          margin:19px 17px;;
          float:left;
          .ads1{
            width:202px;
            height:202px;
            float:left;
            margin:25px 0 25px 25px;
            img{
              margin:60px;
            }
           
            p{
              width:90px;
              height:30px;
              margin:0 auto;

            }
          }
          .ads2{
            float:left;
            width:300px;
            height:202px;
             margin:25px 0;
             .list1{
               font-size:18px;
             }
              .list2{
               font-size:13px;
               color:#999999;
            }
            .list4{
               font-size:14px;
               color:#999999;
             }
             .list5{
               width:200px;
               height:80px;
               .blue{
                 width:70px;
                 height:27px;
                 margin:3px 10px;
                 background: #6ec7d5;
                 border-radius: 5px;
                 float:left;
                 text-align: center;
                 line-height: 27px;
                 color:#fff;
               }

             }
             .list6{
               width:117px;
               height:42px;
               text-align: center;
               line-height: 38px;
               background: #ff591b;
               margin:10px;
                border-radius: 5px;
                cursor:pointer;
                color:#fff;

             }
          }
        }
        
      }
      .page{
        width:240px;
        height:50px;
        margin:20px auto 146px;
        div{
          width:83px;
          height:43px;
          margin:4px;
          border:1px solid #bcbcbc;
          float:left;
          line-height: 43px;
          text-align: center;
          color:#bcbcbc;
          cursor:pointer;
         }
         .num{
           width:47px;
         }
      }
    }
</style>
