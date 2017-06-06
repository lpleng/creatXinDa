<template>
    <div>
        <!--会员中心右侧订单部分-->
        <div class="right_side">
            <div class="r_top">
                <p>我的订单</p>
            </div>
            <div class="r_ordernum">
              订单号：<input class="order_ser" type="text" placeholder="请输入订单号搜索" v-model="businessNumber" >
              <input class="serc" type="button" value="搜索" @click="searchlist()">
            </div>
            <div class="r_time">
              创建时间：<input type="text" v-model="stratTime"><input type="text"  v-model="endTime">
            </div>
            <ul>
                <li class="item1">商品名称</li>
                <li class="item2">单价</li>
                <li class="item3">数量</li>
                <li class="item4">总金额</li>
                <li class="item5">订单状态</li>
                <li class="item6">订单操作</li>
            </ul>
            <div class="r_ordertime" v-for="(businessinfo,index) in businesslist_ajax">
              <table border="1px solid #f7f7f7 " cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td colspan="4"><span class="order_sp">订单:<span>{{businessinfo.businessNo}}</span></span><span class="time_sp"> 时间:<span>{{businessinfo.createTime}}</span></span></td></tr>
                  </thead>
                  <tbody>
                      <tr v-for="(serviceinfo,serviceindex) in service_ajax[index]">
                          <td class="t_d1">
                            <img src="s" alt=""><p>{{serviceinfo.providerName}}<br>{{serviceinfo.serviceName}}</p>
                            <span class="t_sp">{{serviceinfo.totalPrice}}</span>
                            <span class="t_sp2">{{serviceinfo.buyNum}}</span>
                          </td>
                          <td class="t_d2">{{serviceinfo.unitPrice}}</td>
                          <td class="t_d3">等待买家付款</td>
                          <td class="t_d4" :rowspan="service_ajax[index].length" v-if='serviceindex == 0'>
                            <p  class="t_d4_p1">付款</p>
                            <p  class="t_d4_p2">删除订单</p>
                          </td>
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
      msg: 'Welcome to Your Vue.js App',
      stratTime:"",
      endTime:"",
      businessNumber:"",
      businesslist_ajax:[],
      service_ajax:[],
      servicelist_ajax:[]
      
    }
  },
   created(){
       this.businesslist();
      //  this.servicelist();
      //  this.memeberview();
      //  this.dingdanmingxi();
  },
  methods:{
     //获取业务订单列表
    businesslist(){
      let that =this;
      this.ajax.post("/xinda-api/business-order/grid",this.qs.stringify({
        businessNo:this.businessNumber,
        stratTime:this.stratTime,
        endTime:this.endTime
      })).then(function(res){
        that.businesslist_ajax=res.data.data
        that.servicelist_ajax = that.businesslist_ajax.map(function(value){
          return value.businessNo         
        })
        that.servicelist_ajax.forEach(function(value){
          that.ajax.post("/xinda-api/service-order/grid",that.qs.stringify(
            {businessNo:value,
             stratTime:that.stratTime,
             endTime:that.endTime
            }
          )).then(function(res){
            that.service_ajax.push(res.data.data)
            
          })
        })
        // if(res.data.data.status==1){
        //   that.ajax.post("/xinda-api/business-order/detail",that.qs.stringify({
        //    businessNo:that.businesslist_ajax.businessNo
        //   })).then(function(res){
        //     console.log("明细",res)
        //   })
        // }
      })
    },
    //搜索订单
    searchlist(){
      let that=this;
      console.log(1)
      console.log(this.businessNumber)
      this.ajax.post("/xinda-api/business-order/grid",this.qs.stringify({
        businessNo:this.businessNumber,
        stratTime:this.stratTime,
        endTime:this.endTime
      })).then(function(res){
        that.businesslist_ajax=res.data.data
      })
    }
    //获取服务订单列表
    // servicelist(){
    //   let that = this;
      
    //   this.ajax.post("/xinda-api/service-order/grid",this.qs.stringify(
    //    { "businessNo":"S1706050109044338040"})).then(function(res){
    //     console.log("服务订单",res)
    //   })
    // }
    // memeberview(){
    //    let that =this;
    //   this.ajax.post("/xinda-api/service/judge/submit",this.qs.stringify(
    //   {
    //     id:"93d5f0e774ea4718b1576a292256feb3",
    //     type:1,
    //     score:2	,
    //     content:"呵呵",
    //     tags:""
    //     }
    //   )).then(function(res){
    //     console.log("提交评价",res)
    //   })
    // },
    // dingdanmingxi(){
    //   let _this = this;
    //   console.log(this.businesslist_ajax)
    //   this.ajax.post("/xinda-api/business-order/detail",this.qs.stringify({
    //      businessNo:this.businesslist_ajax.businessNo
    //   })).then(function(res){
    //     console.log("明细",res)
    //   })
    // }
  }
}
</script>

<style scoped lang =less>
    .right_side{
        width:934px;
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
            cursor:pointer;
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
            border:1px solid #f7f7f7;
            margin-top:20px;
          }
          thead{
            background: #f7f7f7;
            tr{
              height:40px;
            }
          }
          .order_sp{
              margin-left:10px;
          }


          tbody{          
          .t_d1{
            width:550px;
            height:70px;
            position:relative;
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
                position:absolute;
                left:350px;
                line-height: 70px;
              }
              .t_sp2{
                 position:absolute;
                 right:80px;
                 line-height: 70px;
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
    }


</style>