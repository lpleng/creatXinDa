<template> 
    <Row type="flex" justify="center" align="middle">
        <Col span="24" class="headerName"><Icon type="chevron-left" class="payLeft"></Icon>我的订单</Col>
        <div class="payInfor" v-for="(businessinfo,index) in businesslist_ajax">
            <div class="topName">
                <Row>
                    <Col class="payNum" span="11" offset="1">订单号：{{businessinfo.businessNo}}</Col>
                    <Col class="waitPay" span="10"  push="2">{{businessinfo.status==1?"等待买家付款":"已付款"}}</Col>
                </Row>
            </div>
            <Row class="middleName" type="flex" align="middle" justify="center"  v-for="(serviceinfo,serviceindex) in businessinfo.serviceList" :key="serviceindex">
                    <Col class="leftImg" span="6"> <img src="/static/images/logo.png" alt=""></Col>
                    <Col class="rightWord" span="12" offset="1">
                        <p>{{serviceinfo.serviceName}}</p>
                        <span>下单时间：{{make_time(businessinfo.createTime)}}</span></br>
                        <div><a>￥{{serviceinfo.totalPrice}}</a>元
                            <span>×{{serviceinfo.buyNum}}</span>
                        </div>

                    </Col>
            </Row>
            <div class="bottomName">
                <Row>
                    <Col class="sum" span="12" push="2">合计：<span>:$1400</span></Col>
                    <Col class="delete" span="6">删除订单</Col>
                    <Col class="pay" span="6" pull="1" ><Button type="primary" style="width:80%">付款</Button></Col>
                </Row>
            </div>
        </div>
    </Row>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'myPay',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            businesslist_ajax: [],//购买商品数量详情的数据储存变量
            //输入框修改之前的价格
             payStatus: 1
        }
    },
    created() {
        this.businesslist();//总数据请求
        // this.menu();
    },
     computed: {
    ...mapGetters(["show_mengban"])
  },
    methods:{
        businesslist() {
            let that = this;
            this.ajax.post("/xinda-api/business-order/grid", this.qs.stringify({
                businessNo: this.businessNumber,
                stratTime: this.change_time(this.stratTime),
                endTime: this.change_time(this.endTime)
            })).then(function (res) {
                that.businesslist_ajax = res.data.data
                that.businesslist_ajax.forEach(function (value, index) {
                that.ajax.post("/xinda-api/service-order/grid", that.qs.stringify({
                    businessNo: value.businessNo,
                    stratTime: that.stratTime,
                    endTime: that.endTime
                })).then(function (res) {
                    that.$set(value, 'serviceList', res.data.data);
                })
                })
            })
        },
    //      payStatusSet(obj) {//獲取支付狀態
    //   obj.payStatus = obj.status;
    //   let list = obj.serviceList;
    //   let price = 0;
    //   let num = list.length;
    //   for (let i = 0; i < num; i++) {
    //     price += list[i].buyNum * list[i].unitPrice;
    //   }
    //   obj.totalPri = price/100;
    // }
    },
    
}
</script>

<style lang="less" scoped>
    .headerName{
        height:0.77rem;
        background: #e5e5e5;
        font-size:0.2rem;
        text-align: center;
        line-height: 0.77rem;
        position: relative;
        .payLeft{
            position: absolute;
            top:0.5rem;
            left:0.1rem;
            margin-top:-0.19rem;
        }
    }
     .payInfor{
            width:100%; 
            .topName{
                font-size:0.16rem;
                line-height: 0.68rem;
            }
            .middleName{
                background: #f8f8f8;
                height:2.6rem;
               .leftImg{
                   height:1.6rem;
                   border:0.01rem solid #e3e3e3;
                   img{
                       width:1.6rem;
                       height:1.6rem;
                   }
               }
               .rightWord{
                   height:1.6rem;
                   line-height: 0.4rem;
                   p{
                       font-size:0.2rem;
                       font-weight: 700;
                   }
                   span{
                       font-size:0.16rem;
                   }
                   a{
                      color:red;
                     font-size:0.23rem; 
                   }
                  div{
                     span{
                         font-size:0.24rem;
                         margin-left:0.36rem;
                     }
                    //    h2{
                    //         position: absolute;
                    //         top:10px;
                            // left:10px;
                //    }
                  }
               }
            }
            .bottomName{
                height:0.68rem;
                font-size:0.16rem;
                line-height: 0.68rem;
                .delete{
                    color:red;
                    font-size:0.16rem;  
                }
                .pay{
                    position:relative;
                    .pay{
                        text-align:center;
                        border-radius: 10%;  
                        button{
                            padding: 0;
                            font-size:0.16rem;  
                        }
                    }
                   
                }
            }
        }
</style>   