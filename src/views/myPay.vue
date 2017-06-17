<template>
    <div class="Mine_center">
        <transition name="fade">
             <Modal v-model="modal3"  @on-ok="delete_sure">
                <p style="font-size: 0.2rem">确认删除此订单？</p>
            </Modal>
        </transition>
        <Row type="flex" justify="center" align="middle">
            <Col span="24" class="headerName" >
            <span @click="name1"><Icon type="chevron-left" class="payLeft"></Icon></span>我的订单</Col>
            <div class="payInfor" v-for="(businessinfo,index) in businesslist_ajax">
                <div class="topName">
                    <Row type="flex" align="middle" justify="center">
                        <Col class="payNum" span="15" offset="1">订单号：{{businessinfo.businessNo}}</Col>
                        <Col class="waitPay" span="8">{{businessinfo.status==1?"等待买家付款":"已付款"}}</Col>
                    </Row>
                </div>
                <Row class="middleName" type="flex" align="middle" justify="center" v-for="(serviceinfo,serviceindex) in businessinfo.serviceList" :key="serviceindex">
                    <Col class="leftImg" span="6">
                    <img src="/static/images/logo.png" alt="">
                    </Col>
                    <Col class="rightWord" span="12" offset="1">
                    <p>{{serviceinfo.serviceName}}</p>
                    <span>下单时间：{{make_time(businessinfo.createTime)}}</span>
                    </br>
                    <div>
                        <a>￥{{serviceinfo.totalPrice}}</a>元
                        <span>×{{serviceinfo.buyNum}}</span>
                    </div>
    
                    </Col>
                </Row>
                <div class="bottomName">
                    <Row>
                        <Col class="sum" span="12" push="2">合计：￥
                        <span class="unitprice">{{businessinfo.totalPrice}}</span>
                        </Col>
                        <Col class="delete" span="6" v-if="businessinfo.status==1">
                        <span @click="removelist(index)" style="cursor:pointer">删除订单</span>
                        </Col>
                        <Col class="pay" span="6" pull="1">
                        <Button type="primary" style="width:80%" v-if="businessinfo.status==1">付款</Button>
                        </Col>
                        <Col class="finish" span="6" push="2" v-if="businessinfo.status!=1">完成订单</Col>
                    </Row>
                </div>
            </div>
            <div v-show="businesslist_ajax.length==0" class="none_order">
                暂无数据.............
            </div>
        </Row>
    </div>
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
            payStatus: 1,
            show_confirm: false,
            modal3: false
        }
    },
    created() {
        this.businesslist();//总数据请求
        // this.menu();
    },
    computed: {
        ...mapGetters(["show_mengban"])
    },
    methods: {
        ...mapActions(['change_mengban']),
        businesslist() {
            let that = this;
            this.ajax.post("/xinda-api/business-order/grid").then(function (res) {
                that.businesslist_ajax = res.data.data
                console.log(that.businesslist_ajax)
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
        removelist(index) {
            this.modal3 = true;
            this.nowindex = index;
        },
        delete_sure() {//确认删除 点击确认
            let index = this.nowindex;
            let _this = this
            this.ajax.post("/xinda-api/ business-order/del", _this.qs.stringify({
                id: this.businesslist_ajax[index].id
            })).then(function (res) {
                if (res.data.status == 1) {
                _this.businesslist_ajax.splice(index, 1)
                }
            })
        },
        name1(){
           this.$router.push({name:"Mine"})
        }
    },
    

}
</script>

<style lang="less" scoped>
.none_order{
    width: 100%;
    font-size: 24px;
    color: #ccc;
    text-align: center;
    line-height: 50px;
    height: 50px;
}
.Mine_center {
    margin-bottom: 50px;
}
.headerName {
    height: 0.77rem;
    background: #e5e5e5;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.77rem;
    position: relative;
    .payLeft {
        position: absolute;
        top: 0.5rem;
        left: 0.1rem;
        margin-top: -0.19rem;
    }
}

.payInfor {
    background: #f8f8f8;
    width: 100%;
    padding-bottom: .25rem;
    .topName {
        font-size: 0.16rem;
        line-height: 0.68rem;
        background: #fff;
    }
    .middleName {

        height: 2.6rem;
        .leftImg {
            height: 1.6rem;
            border: 0.01rem solid #e3e3e3;
            img {
                width: 1.6rem;
                height: 1.6rem;
            }
        }
        .rightWord {
            height: 1.6rem;
            line-height: 0.4rem;
            p {
                font-size: 0.2rem;
                font-weight: 700;
            }
            span {
                font-size: 0.16rem;
            }
            a {
                color: red;
                font-size: 0.23rem;
            }
            div {
                span {
                    font-size: 0.24rem;
                    margin-left: 0.36rem;
                } //    h2{
                //         position: absolute;
                //         top:10px;
                // left:10px;
                //    }
            }
        }
    }
    .bottomName {
        height: 0.68rem;
        font-size: 0.16rem;
        line-height: 0.68rem;
        background: #fff;
        .unitprice {
            color: red;
        }
        .delete {
            color: red;
            font-size: 0.16rem;
        }
        .pay {
            position: relative;
            .pay {
                text-align: center;
                border-radius: 10%;
                button {
                    padding: 0;
                    font-size: 0.16rem;
                }
            }
        }
        .finish {
            text-align: center;
            border-radius: 10%;
        }
    }
}
</style>   