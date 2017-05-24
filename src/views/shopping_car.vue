<template>
    <div class="shopping_content">
        <div class="fir_car">首页/购物车</div>
        <div class="all_comm">
            <div class="title">全部商品（1）</div>
            <ul class="clear">
                <li>公司
                    <br>店铺信达北京服务公司</li>
                <li>服务商品</li>
                <li>单价</li>
                <li>数量</li>
                <li>金额</li>
                <li>操作</li>
            </ul>
            <div class="subsidiary clear">
                <img src="../../images/logo.png" alt="">
                <div>
                    <p>注册分公司</p>
                    <p>￥800</p>
                    <p>
                        <a href="" hideforcs title="-1" @click.prevent="add($event)">-</a>
                        <input type="text" maxlength=2 title="请输入购买量" v-model="shop_car_num">
                        <a href="" hideforcs title="+1" @click.prevent="add($event)">+</a>
                    </p>
                    <p>￥800</p>
                    <p>删除</p>
                </div>
            </div>
            <div class="totle">
                <p>金额总计
                    <span>￥800.00</span>
                </p>
                <div>
                    <a>继续购物</a>
                    <a href="#/Order_info">去结算</a>
                </div>
            </div>
        </div>
        <div class="hot_serve">
            <div class="title">热门服务</div>
            <div class="ads">
                <p>商标快速注册通道（5个小时..</p>
                <div class="line"></div>
                <div class="pot"></div>
                <p class="span">工作日内五个小时提交，次日拿到
                    <br>销量:</p>
                <span>￥1400.00</span>
                <p style="text-decoration:line-through">8000.00</p>
                <a href="">查看详情>>></a>
            </div>
            <div class="ads">
                <p>商标快速注册通道（5个小时..</p>
                <div class="line"></div>
                <div class="pot"></div>
                <p class="span">工作日内五个小时提交，次日拿到
                    <br>销量:</p>
                <span>￥1400.00</span>
                <p style="text-decoration:line-through">8000.00</p>
                <a href="">查看详情>>></a>
            </div>
            <div class="ads">
                <p>商标快速注册通道（5个小时..</p>
                <div class="line"></div>
                <div class="pot"></div>
                <p class="span">工作日内五个小时提交，次日拿到
                    <br>销量:</p>
                <span>￥1400.00</span>
                <p style="text-decoration:line-through">8000.00</p>
                <a href="">查看详情>>></a>
            </div>
            <div class="ads">
                <p>商标快速注册通道（5个小时..</p>
                <div class="line"></div>
                <div class="pot"></div>
                <p class="span">工作日内五个小时提交，次日拿到
                    <br>销量:</p>
                <span>￥1400.00</span>
                <p style="text-decoration:line-through">8000.00</p>
                <a href="">查看详情>>></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shopping_car',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            shop_car_num: 1
        }
    },
    mounted() {
          this.$watch('shop_car_num',function(newval,old){
            console.log(newval,old);
        })
    },
    methods: {
        add: function add(e) {
            if (e.target.innerHTML == "+") {
                this.shop_car_num++;
            } else if (e.target.innerHTML == "-") {
                this.shop_car_num--;
            }
        }
    }
}
</script>


<style lang="less">
* {
    margin: 0px;
    padding: 0px;
}

.shopping_content {
    width: 1200px;
    margin: 15px auto;
    height: 737px;
    .fir_car {
        color: #696969;
        font-size: 13px;
        line-height: 39px;
    }
    .all_comm {
        .title {
            color: #9cc7ea;
            line-height: 31px;
            text-indent: 68px;
            border-bottom: 1px solid #bdbdbd;
        }
        ul {
            width: 1133px;
            height: 107px;
            margin-left: 68px;
            li {
                width: 188px;
                float: left;
                color: #686868;
                font-size: 13px;
                line-height: 67px;
            }
        }
        .subsidiary {
            width: 100%;
            height: 84px;
            background: #f7f7f7;
            img {
                width: 41px;
                height: 41px;
                margin-top: 21px;
                margin-left: 11px;
                float: left;
            }
            div {
                width: 1133px;
                margin-left: 255px;
                p {
                    width: 188px;
                    float: left;
                    color: #686868;
                    font-size: 13px;
                    line-height: 67px;
                }
            }
        }
        .totle {
            float: right;
            width: 255px;
            height: 74px;

            p {
                color: #686868;
                font-size: 12px;
                line-height: 47px;

                span {
                    color: #2793d3;
                    font-size: 19px;
                }
            }
            div {

                a {
                    float: left;
                    width: 102px;
                    height: 27px;
                    border: 1px solid #2793d3;
                    border-radius: 5px;
                    color: #2793d3;
                    line-height: 27px;
                    text-align: center;
                    margin-right: 10px;
                }
            }
        }
    }
    .hot_serve {
        margin: 64px 0;
        .title {
            color: #9cc7ea;
            line-height: 31px;
            text-indent: 68px;
            border-bottom: 1px solid #bdbdbd;
        }
        .ads {
            margin-top: 35px;
            width: 226px;
            height: 191px;
            border: 1px solid #bdbdbd;
            float: left;
            position: relative;
            margin-right: 74px;
            p {
                font-size: 15px;
                color: #3f3f3f;
                line-height: 48px;
                margin-left: 16px;
            }
            .span {
                font-size: 12px;
                color: #676767;
                line-height: 24px;
                margin: 16px 0 0 16px;
            }
            span {
                font-size: 30px;
                color: #2795d4;
                margin-left: 16px;
            }
            .line {
                width: 161px;
                height: 2px;
                background: linear-gradient(to right, #2693d4, #fff);
                margin-left: 16px;
            }
            .pot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #2693d4;
                position: absolute;
                left: 16px;
                top: 44px;
            }
            a {
                position: absolute;
                left: 111px;
                top: 168px;
                color: #2693d4;
            }
        }
    }
}
</style>