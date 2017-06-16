<template>
    <div>
        <transition name="fade">
            <div class="confirm" v-show="show_confirm">
                <p>
                    <span @click="close_confirm">&times;</span>
                </p>
                <div class="confirm_cont">
                    您确定要删除此商品吗？
                </div>
                <div class="click">
                    <div class="button" @click="delete_sure">确认</div>
                    <div class="button" @click="cancle_confirm">取消</div>
                </div>
            </div>
        </transition>
        <Row>
            <Col :xs="0" :sm="24" :md="24">
            <div class="shopping_content">
                <div class="fir_car">首页/购物车</div>
                <div class="all_comm">
                    <div class="title">全部商品(
                        <span>{{getCartNum}}</span>)</div>
                    <ul class="clear">
                        <li>公司</li>
                        <li>服务商品</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>金额</li>
                        <li>操作</li>
                    </ul>
                    <div class="subsidiary clear" v-for="(shoppinglist,index) in shoppingresult_ajax">
                        <div class="shoper">店铺：
                            <span>{{shoppinglist.providerName}}</span>
                        </div>
                        <ul class="list_shop">
                            <li>
                                <img :src="shopping_picture+shoppinglist.providerImg" alt="">
                            </li>
                            <li>{{shoppinglist.serviceName}}</li>
                            <li>¥ {{shoppinglist.unitPrice}}</li>
                            <li>
                                <div class="li_box">
                                    <div href="" hideforcs title="-1" @click.prevent="del_num(index)">-</div>
                                    <input type="number" title="请输入购买量" v-model="shoppinglist.buyNum" @blur="input_blur(index)" @input="watch_num(index)" @focus="input_focus(index)">
                                    <div href="" hideforcs title="+1" @click.prevent="add_num(index)">+</div>
                                </div>
                            </li>
                            <li>{{shoppinglist.unitPrice*shoppinglist.buyNum}}</li>
                            <li @click.prevent="delete_one(index)">
                                <span class="dele">删除</span>
                            </li>
                        </ul>
                    </div>
                    <div class="none_goods" v-show="shoppingresult_ajax.length==0">暂无数据...........
                        <span>
                            <router-link to="/list_page">立即去买</router-link>
                        </span>
                    </div>
                    <div class="totle" v-show="shoppingresult_ajax.length!=0">
                        <p>金额总计
                            <span class="pri_blue">{{make_price(total_price)}}</span>
                        </p>
                        <div>
                            <a href="#/List_page">继续购物</a>
                            <!--<a href="#/Order_info" @click="submit()">去结算</a>-->
                            <a @click="submit()">去结算</a>
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
            </Col>
        </Row>
        <!------------------------------这是微信端的样式-->
        <Row>
            <Col :xs="24" :sm="0" :md="0" class="col">
            <div class="new_head" v-show="shoppingresult_ajax.length!=0">
                <p>购物车里有
                    <span>{{getCartNum}}</span>件商品</p>
            </div>
            <div class="new_body" v-for="(shoppinglist,index) in shoppingresult_ajax" v-show="shoppingresult_ajax.length!=0">
                <h2> {{shoppinglist.providerName}}</h2>
                <div class="new_body_main">
                    <div class="new_body_main_left">
                        <div class="new_body_main_left_img">
                            <img :src="shopping_picture+shoppinglist.providerImg">
                        </div>
                        <div class="new_body_main_left_word">
                            <h2>{{shoppinglist.serviceName}}</h2>
                            <span>￥ {{shoppinglist.unitPrice}}</span>元
                            <div class="button">
                                <p>购买数量：</p>
                                <div class="button_box">
                                    <div href="" hideforcs title="-1" @click.prevent="del_num(index)">-</div>
                                    <input type="number" title="请输入购买量" v-model="shoppinglist.buyNum" @blur="input_blur(index)" @input="watch_num(index)" @focus="input_focus(index)">
                                    <div href="" hideforcs title="+1" @click.prevent="add_num(index)">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new_body_main_right" @click.prevent="delete_one(index)">
                        删除订单
                    </div>
                </div>
            </div>
            <div class="foot" v-show="shoppingresult_ajax.length!=0">
                <p>共
                    <span>{{getCartNum}}</span>
                    件　　商品小计:
                    <span>￥{{make_price(total_price)}}</span>
                    元
                </p>
                    <i style="clear:both"></i>
            </div>
            <div class="last" v-show="shoppingresult_ajax.length!=0">
                <p class="last_p1">合计：<span>￥{{make_price(total_price)}}</span>元</p>
                <p class="last_p2" @click="last_()">去结算</p>
            </div>
            <div class="new_none_goods" v-show="shoppingresult_ajax.length==0">
                <img src="static/images/购物车-空_03.jpg">
                <span>
                    <p>购物车空空如也，去首页逛逛吧</p>
                    <router-link to="/list_page" class="new_button">去首页</router-link>
                </span>
            </div>
            <!--弹出框-->
            <div class="jump" v-show = "jumpp">
                <p @click="jump_p">×</p>
                <p>目前仅支持微信支付，请在微信端的ie浏览器中打开</p>
            </div>
            </Col>
        </Row>
        <!-------------------------------这是微信端的样式结束部分-->
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'shopping_car',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            jumpp:false,
            show_confirm: false,
            nowindex: -100,
            shopping_picture: "http://115.182.107.203:8088/xinda/pic",//图片的链接前缀
            shoppingresult_ajax: [],//购买商品数量详情的数据储存变量
            prev_set: 0//输入框修改之前的价格
        }
    },
    created() {
        this.getdata();//总数据请求
        this.menu();
    },
    computed: {
        ...mapGetters(['getCartNum', 'getusername',]),
        total_price() {
            var value = this.shoppingresult_ajax;
            var length = this.shoppingresult_ajax.length;
            var total_price = 0;
            for (var i = 0; i < length; i++) {
                total_price += value[i].buyNum * value[i].unitPrice
            }
            return total_price
        }
    },
    methods: {
        ...mapActions(['setCartNum', 'change_mengban']),
        post_product_num(index) {//发送产品数量，并更新页面数据，数量变化时请求的方法
            let _this = this;
            this.ajax.post("/xinda-api/cart/set", this.qs.stringify({
                "id": _this.shoppingresult_ajax[index].serviceId,
                "num": _this.shoppingresult_ajax[index].buyNum
            })).then(function (res) {
                if (res.data.status == 1) {
                    // _this.getdata();//页面数据更新，总数据请求
                } else {
                    _this.shoppingresult_ajax[index].buyNum = _this.prev_set;
                }
            })
        },
        add_num(index) {//点击 添加数量
            let _this = this;
            if (this.shoppingresult_ajax[index].buyNum < 100) {
                this.ajax.post("/xinda-api/cart/add", this.qs.stringify({
                    id: _this.shoppingresult_ajax[index].serviceId,
                    num: 1
                })).then(function (res) {
                    if (res.data.status == 1) {
                        _this.shoppingresult_ajax[index].buyNum++;
                    }
                })
            }
        },
        del_num(index) {//点击 减少产品数量
            let _this = this
            if (this.shoppingresult_ajax[index].buyNum > 2) {
                this.ajax.post("/xinda-api/cart/add", this.qs.stringify({
                    id: _this.shoppingresult_ajax[index].serviceId,
                    num: -1
                })).then(function (res) {
                    if (res.data.status == 1) {
                        _this.shoppingresult_ajax[index].buyNum--;
                    }
                })

            } else {
                this.shoppingresult_ajax[index].buyNum = 1;
            }
        },
        watch_num(index) {//检测 输入的 数字大小的变化，限制数据的大小
            let value = this.shoppingresult_ajax[index].buyNum;
            if (value > 100) {
                this.shoppingresult_ajax[index].buyNum = 100;
            } else if (value < 1) {
                this.shoppingresult_ajax[index].buyNum = 1;
            }
        },
        input_blur(index) {//输入框的失去焦点的事件，发送输入的数量，返回新的数据
            this.post_product_num(index);
        },
        input_focus(index) {
            this.prev_set = this.shoppingresult_ajax[index].buyNum
        },
        getdata() {//购物车列表请求
            let _this = this;
            this.ajax.post("/xinda-api/cart/list").then(function (res) {
                _this.shoppingresult_ajax = res.data.data
            });
        },
        delete_one(index) {//购物车 删除订单 提示框显示
            this.show_confirm = true;
            this.change_mengban(true)
            this.nowindex = index;
        },
        cancle_confirm() {
            this.show_confirm = false;
            this.change_mengban(false)
        },
        delete_sure() {//确认删除 点击确认
            this.show_confirm = false;
            this.change_mengban(false)
            let index = this.nowindex;
            let _this = this;
            this.ajax.post("/xinda-api/cart/del", this.qs.stringify({
                "id": this.shoppingresult_ajax[index].serviceId
            })).then(function (res) {
                if (res.data.status == 1) {
                    _this.shoppingresult_ajax.splice(index, 1)
                    _this.setCartNum();
                }
            });
        },
        close_confirm() {
            this.cancle_confirm()
        },
        //结算方法
        submit() {
            let _this = this;
            this.ajax.post("/xinda-api/cart/submit").then(function (res) {
                // console.log(res)
                if (res.data.status == 1) {
                    _this.shoppingresult_ajax = [];
                    _this.setCartNum();
                    _this.$router.push({ path: "/Order_info", query: { order_num: res.data.data } })
                } else {
                    alert(res.data.msg)
                }
            })
        },
        // 别的页面跳转过来定位到最上边
        menu() {
            window.scrollTo(0, 0);
        },
        last_(){
            this.jumpp = true;
        },
        jump_p(){
            this.jumpp = false;
        }
    }
}
</script>
<style lang="less" scoped>
/*-------------------------------这是微信端的样式部分-->*/
.new_none_goods{
    width:95%;
    height: 70%;
    margin: 0 auto;
    padding: 20% 5%;
    text-align: center;
    img{
        width: 70%;
    }
    p{
        color: #2693d4;
        font-size: 24px;
    }
    .new_button{
        width: 33%;
        height: 12%;
        background:  #2693d4;
        color: #fff;
        display: block;
        margin: 10% 35%;
        border-radius: 5px;
        line-height: 38px;
    }
}
.new_head {
    p {
        padding: 2% 5%;
        background: #e5e5e5;
    }
    span {
        color: red;
    }
}

.new_body {
    padding: 2% 3%;
    height: 258px;
    border-bottom: 1px solid #cfcfcf;
    h2 {
        padding: 1% 2%;
    }
    
            .new_body_main_left_img {
                float: left;
                width: 30%;
                border: 1px solid #cfcfcf;
                padding: 12% 3%;
                img {
                    width: 90%;
                    height: 35%;
                }
            }
            .new_body_main_left_word {
                width: 65%;
                float: left;
                margin-left: 5%;
                span {
                    color: red;
                    font-size: 21px;
                }
                .button {
                    width: 100%;
                    height: 50px;
                    padding: 4% 2%;
                    p {
                        float: left;
                        // font-size: 15px;
                    }
                    .button_box {
                        width: 50%;
                        float: left;
                        div,
                        input {
                            float: left;
                            width: 1rem;
                            height: 1remx;
                            border: 1px solid #cfcfcf;
                            text-align: center;
                            line-height: 20px;
                        }
                        div {
                            background: #ededed;
                            cursor: pointer;
                            font-size: 20px;
                        }
                    }
                }
            }
        // }
        .new_body_main_right {
            width: 20%;
            float: right;
            color: red;
            // font-size: 20px;
            cursor: pointer;
            // padding: 2% 2%;
        }
    // }
}
@media screen and (min-width:451px) {
    .new_body_main_left {
            width: 70%;
            float: left;
            height: 200px;
        }
        .new_body_main {
        height: 200px;
    } 
}
@media screen and (max-width:450px) {
    .new_body {
        height: auto;
        h2 {
            
            font-size: 17px;
        }
    }
    .new_body_main_left_word {
        h2 {
            font-size: 13px;
        }
        p{
            font-size: 11px;
        }
    }
    .new_body_main_right{
        font-size: 13px;
    }
    .new_body_main_left{
        width: 70%;
        height: auto;
    }
    .new_body_main{
        height: 110px;
    }
}

.foot {
    overflow: hidden;
    p{
         margin-left: 30%;
    }
    span {
        color: red;
        font-size: 21px;
    }
}
.last{
    width: 100%;
    height: 50px;
    background: pink;
    font-size: 23px;
    line-height: 50px;
    margin-bottom: 50px;
    position: fixed;
    bottom: 40px;
    .last_p1{
        float: left;
        width: 70%;
        background: #e5e5e5;
        height: 50px;
        padding: 0 2%;
    }
    .last_p2{
        float: right;
        width: 30%;
        background: #fb2d2d;
        height: 50px;
        color: #fff;
         text-align: center;
         cursor: pointer;
    }
    span{
        color: red;
    }
}
.jump{
    width: 48%;
    height: 98px;
    background:#4e4949;
    color: #fff;
    font-size: 14px;
    opacity: .3;
    text-align: center;
    p:first-child{
        margin-left: 80%;
        background: #000;
        cursor: pointer;
    }
}
.col{
    position: relative;
    .jump{
        position: absolute;
        top:60%;
        left:35%;
    }
}


/*-------------------------------这是微信端的样式结束部分-->   */

.confirm {
    width: 340px;
    height: 140px;
    background: #fff;
    padding: 0px 7px 0px 7px;
    border: 2px solid #ccc;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    top: 30%;
    left: 50%;
    margin-left: -200px;
    p {
        height: 30px;
        border-bottom: 1px dotted #ccc;
        span {
            display: block;
            width: 30px;
            height: 30px;
            float: right;
            font-size: 30px;
            cursor: pointer;
            text-align: center;
            color: #ccc;
            &:hover {
                color: #000;
            }
        }
    }
    .confirm_cont {
        height: 45px;
        font-size: 17px;
        background: #fff;
        text-indent: 30.5px;
        line-height: 45px;
    }
    .click {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        .button {
            width: 100px;
            height: 30px;
            background: #fff;
            text-align: center;
            line-height: 30px;
            margin: 0 auto;
            cursor: pointer;
            &:first-child {
                background: #2693d4;
                color: #fff;
                &:hover {
                    text-decoration: underline;
                }
            }
            &:last-child {
                border: 1px solid #ccc;
                &:hover {
                    color: red;
                }
            }
        }
    }
}

.confirm.fade-enter {
    height: 0;
}

.confirm.fade-enter-active {
    transition: height 0.4s;
}

ul {
    width: 100%;
    height: 65px;
    .dele {
        padding: 5px;
        border: 1px solid #f00;
        border-radius: 5px;
        color: #f00;
        cursor: pointer;
    }
    li {
        width: 16%;
        float: left;
        color: #686868;
        font-size: 13px;
        line-height: 78px;
        text-align: center;
        display: inline-block;
        height: 100%;
        white-space: nowrap;
        .li_box {
            width: 72px;
            height: 24px;
            margin: 25px auto;
            input {
                outline: none;
                border: none;
                width: 30px;
                text-align: center;
                height: 20px;
                float: left;
                -moz-appearance: textfield;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0;
                }
            }
            div {
                width: 18px;
                background: #dfe4e1;
                height: 20px;
                line-height: 20px;
                vertical-align: middle;
                float: left;
                cursor: pointer;
            }
        }
    }
}

.shopping_content {
    width: 1200px;
    margin: 0 auto;
    min-height: 600px;
    .all_comm {
        width: 1200px;
        min-height: 416px;
        .title {
            color: #9cc7ea;
            line-height: 31px;
            text-indent: 68px;
            border-bottom: 1px solid #bdbdbd;
        }

        .subsidiary {
            width: 100%;
            .shoper {
                color: #686868;
                line-height: 37px;
            }
            .list_shop {
                background: #f7f7f7;
                height: 78px;
                img {
                    margin-top: 12px;
                }
            }
        }
        .none_goods {
            width: 100%;
            height: 50px;
            font-size: 24px;
            line-height: 50px;
            text-align: center;
            color: #ccc;
            a {
                color: #2693d4;
                padding: 2px;
                font-size: 16px;
                border: 1px solid transparent;
                &:hover {
                    border: 1px solid #2693d4;
                    border-radius: 4px;
                }
            }
        }
        .totle {
            float: right;
            width: 255px;
            height: 74px;
            a {
                cursor: pointer;
            }
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
        height: 284px;
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