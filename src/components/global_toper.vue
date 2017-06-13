<template>
    <Row class="empty_height">
        <Col :xs="0" :sm="24" :md="24">
        <transition name="slide">
            <div class="confirm" v-show="show_mengban">
                <p>
                    <span @click="close_confirm">&times;</span>
                </p>
                <div class="confirm_cont" v-if="confirm_choose == 1">
                    您还没有登录，是否立即登录？
                </div>
                <div class="confirm_cont" v-else>
                    您确定要退出吗？
                </div>
                <div class="click" v-if="confirm_choose == 1">
                    <div class="button" @click="go(1)">确认</div>
                    <div class="button" @click="go(2)">取消</div>
                </div>
                <div class="click" v-else>
                    <div class="button" @click="out(1)">确认</div>
                    <div class="button" @click="out(2)">取消</div>
                </div>
            </div>
        </transition>
        <Row class="toper" id="toper" type="flex" justify="center">
            <Col :md="18" :sm="24">
            <Row class="toper_content">
                <Col class="toper_left" id="toper_left" span="12">
                <span id="user_name" @click="toMember()">{{getusername}}</span>
                欢迎来到信达!
                <span v-if="getusername==''?true:false">
                    <a href="#/Register">登录</a>
                    <a href="#/Enroll">快速注册</a>
                </span>
                <span class="exit" v-show="getusername==''?false:true" @click="reback()">【退出】</span>
                </Col>
                <Col class="toper_right" span="12">
                <a href="#/join_us" class="toper_right_right">服务商入口</a>
                <div class="toper_right_middle" v-if="getusername==''?false:true">
                    <a href="#/member">
                        我的订单
                    </a>
                </div>
                <div class="toper_right_left" @click="top_car_click">
                    购物车
                    <span class="car_number">{{getCartNum}}</span>件
                </div>
                </Col>
            </Row>
            </Col>
        </Row>
        </Col>
    </Row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'global_toper',
    created() {
        this.setCartNum();
        this.setusername();
    },
    data() {
        return {
            usernamestatus: 0,
            confirm_choose: 1
        }
    },
    computed: {
        ...mapGetters(['getCartNum', 'getusername', 'show_mengban'])
    },
    methods: {
        ...mapActions(['setCartNum', 'setusername', 'change_mengban']),
        reback() {//退出登录
            this.change_mengban(true)
            this.confirm_choose = 2;
        },
        out(value) {//退出登录
            if (value == 2) {
                this.change_mengban(false)
            } else {
                this.change_mengban(false)
                let _this = this
                this.ajax.post("/xinda-api/sso/logout").then(function (res) {
                    _this.setusername();
                    _this.setCartNum();
                    _this.$router.push({ path: "/" })
                })
            }
        },
        go(value) {//进入
            this.change_mengban(false)
            if (value == 1) {
                this.$router.push({ name: "Register" })
            }
        },
        close_confirm() {
            this.change_mengban(false)
        },
        top_car_click() {
            let _this = this;
            this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
                if (res.data.status == 0) {
                    _this.confirm_choose = 1;
                    _this.change_mengban(true)
                } else {
                    _this.$router.push({ name: "shopping_car" })
                }
            })
        },
        //跳转到会员中心页面
        toMember() {
            this.$router.push({ name: "Member" })
        }
    }
}
</script>

<style scoped lang="less">
div {
    box-sizing: border-box;
}

.confirm.slide-enter {
    height: 0;
}

.confirm.slide-enter-active {
    transition: height 0.4s;
}

.confirm {
    width: 340px;
    height: 140px;
    background: #fff;
    padding: 0px 7px 0px 7px;
    border: 2px solid #ccc;
    position: fixed;
    z-index: 999;
    top: 30%;
    left: 50%;
    margin-left: -200px;
    overflow: hidden;
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

.toper {
    height: 35px;
    width: 100%;
    background: #f2f2f2;
    position: fixed;
    z-index: 10;
    top: 0;
    &_content {
        height: 35px;
        line-height: 35px;
        a {
            color: #2693d4;
            margin: 0 13px;
            vertical-align: middle;
        }
    }
    &_right {
        float: right;
        height: 35px;
        .car_number {
            color: #2693d4;
            padding: 0 5px;
        }
        div {
            margin: 0 10px;
        }
        &_right {
            float: right;
        }
        &_middle {
            float: right;
            padding-left: 25px;
            background: url("/static/images/my_order_logo.png")no-repeat 0 4px;
            a {
                color: #000;
                margin: 0;
            }
        }
        &_left {
            float: right;
            cursor: pointer;
            padding-left: 25px;
            background: url("/static/icon/buy_car.png")no-repeat 0 8px;
        }
    }
    &_left {
        float: left;
        #user_name {
            padding: 0 10px;
            color: #2693d4;
            cursor: pointer;
        }
        .exit {
            cursor: pointer;
        }
    }
}
</style>