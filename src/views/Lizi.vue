<template>
    <div>
        <div style="width: 200px; background: pink; height: 100px; margin: 50px auto; font-size: 48px; line-height: 100px;text-align:cwnter;">
            {{value}}
        </div>
        <div class="example">
            <div class="example_nei">
                <input type="text" v-model="searchh">
                <button @click="search(searchh)">搜索</button>
                <br>
                <span></span>
                <input type="text" v-model='name' placeholder="姓名">
                <span></span>
                <input type="text" v-model='age' placeholder="年纪">
                <span></span>
                <input type="text" v-model='sex' placeholder="性别">
                <button @click="add">新增</button>
                <table class="table">
                    <thead>
                        <tr>
                            <td>姓名</td>
                            <td>年纪</td>
                            <td>性别</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(person,index) in people" :class="{red:nowindex[index]}">
                            <td>{{person.name}}</td>
                            <!--30岁以上的年龄变红-->
                            <td :style="person.age>30?'color:red':''">{{person.age}}</td>
                            <td>{{person.sex}}</td>
                            <td>
                                <button class="btn  btn-danger" @click="del(index)">删除</button>
                                <button class="btn  btn-primary" @click="openTagModalCheck(index)">查看</button>
                                <button class="btn  btn-primary" @click="openTagModalUpdate(person, index)">编辑</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div :class="{box_shodow:box_show}"></div>
        </div>
        <!--弹出框-->
        <div class="box" v-show="box_show" @focus="blur">
            <span>姓名：</span>
            <div class="box1">{{box_name}}</div>
            <span>年龄：</span>
            <div class="box2">{{box_age}}</div>
            <span>性别：</span>
            <div class="box3">{{box_sex}}</div>
            <div class="box_top" v-show="box_show" @click="close">关闭</div>
        </div>
        <!--弹出框到此结束-->
        <!--弹出框-->
        <div class="box4" v-show="box_show1" @focus="blur">
            <span>姓名：</span>
            <input class="box1" v-model="box_name1">
            <br>
            <span>年龄：</span>
            <input class="box2" v-model="box_age1">
            <br>
            <span>性别：</span>
            <input class="box3" v-model="box_sex1">
            <br>
            <button class="box_top1" v-show="box_show1" @click="change(nowindex)">修改</button>
            <button class="box_top1" v-show="box_show1" @click="close">取消</button>
        </div>
        <!--弹出框到此结束-->
    
        <div @click="toLizi">
            点击跳转刘振鲁
        </div>
    
        <div v-for="lala in lizi">{{lala}}</div>
        <button @click="hehe">点击</button>
        <div v-show="modal">
            <p>您还未登录，请先登录</p>
        </div>
        <!--<button @click="touch">点击跳转</button>-->
    
        <!--<div v-for="new_list in Store_list_ajax">
                    <div>
                        <img :src="img_prove+new_list.providerImg" alt="">
                    </div>
                    <div @click="didi(new_list.id)">{{new_list.providerName}}</div>
                    <div @click="didi(new_list.id)">{{new_list.providerName}}</div>
                </div>-->
    
        <button @click="changee">点击变成2</button>
        <br>
        <!--<button @click="shop()">购物车</button>-->
    
        <!--<div class="body_body" v-for="(list_each,index) in curContent">
                    <div class="body_left">
                        <img src="static/images/logo.png">
                    </div>
                    <div class="body_middle">
                        <h2 @click="toDetail(list_each.id)">{{list_each.serviceName}}</h2>
                        <p class="body_middle_p">{{list_each.serviceInfo}}</p>
                        <div class="body_ads">
                            <p>{{list_each.providerName}}</p>
                            <span>北京-北京市-朝阳区</span>
                        </div>
                    </div>
                    <div class="body_right">
                        <h1>￥{{list_each.price/100}}</h1>
                        <span @click="buy_now(index)">立即购买</span>
                        <span @click="addCartNum(index)">加入购物车</span>
                    </div>
                </div>-->
        <a v-link="{name:'lizi_1'}">页面跳转</a>
        <!--<a href="lizi_1">页面跳转</a>-->
        <!--<a href="{path: '/lizi_1'}">Go to view-a</a>-->
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            curContent: [],
            addstate: 0,
            modal: false,
            Store_list_ajax: [],
            img_prove: "http://115.182.107.203:8088/xinda/pic",
            lala: '',
            box_show: false,  //弹出查看提示框框
            box_show1: false,
            box_name: '',
            box_age: '',
            box_sex: '',
            box_name1: '',
            box_age1: '',
            box_sex1: '',
            searchh: '',//搜索功能
            name: '',
            sex: '',
            age: '',
            nowindex: [],//编辑框
            people: [{
                name: 'Jack',
                age: 10,
                sex: '男'
            }, {
                name: 'Bill',
                age: 26,
                sex: '男'
            }, {
                name: 'Tracy',
                age: 22,
                sex: '女'
            }, {
                name: 'Chris',
                age: 36,
                sex: '男'
            }],

            lizi: [1, 2, 3, 4, 5],
            a: [{ a: 1, b: '第一件' }, { a: 3, b: '第二件' }]


        }
    },
    created() {
        //  console.log(this.$route.path)
    },
    computed: {
        value() {
            var value = this.$route.query.weight;
            if (isNaN(value)) {
                value = "not a num"
            } else {
                value = "is num"
            }
            return value
        },

    },
    created() {
        this.getdata()
        this.getdataa();
    },
    methods: {
        ...mapActions(['seta', 'setCartNum']),
        // touch(aa){
        //       this.$router.push({name: "Lizi_1",params:{b:'aa'}})
        //   },
        changee() {
            // this.seta('变成2')
            this.seta("2")
            this.$router.push({ name: "Lizi_1" })
        },
        success(value) {
            this.$Message.success({
                content: value,
                duration: 1
            });
        },
        error(value) {
            this.$Message.wrror({
                content: value,
                duration: 1
            });
        },


        getdataa() {
            let _this = this;
            this.ajax.post("/xinda-api/product/package/grid").then(function (res) {
                console.log(res)
                _this.curContent = res.data.data
            })
        },

        addCartNum(index, callback) {
            let _this = this;
            this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
                if (res.data.status == 0) {
                    //   _this.modal = true;
                    _this.success("您未登录");
                } else {
                    _this.ajax.post("/xinda-api/cart/add", _this.qs.stringify({
                        'id': _this.curContent[index].id,
                        num: 1
                    })).then(function (res) {
                        if (res.data.status == 1) {
                            _this.addstate = 1;
                            _this.success("加入购物车成功");
                            _this.ajax.post("/xinda-api/cart/cart-num").then(function (res) {
                                callback ? callback() : '';
                                _this.setCartNum(res.data.data.cartNum)
                            })
                        } else {
                            _this.error(res.data.msg);
                        }
                    })
                }
            })
        },
        didi(d) {
            // alert(d)  
            this.$router.push({ name: "Lizi_1", params: { id: d } })
            //  console.log(d)
        },
        getdata() {
            let _this = this;
            this.ajax.post("/xinda-api/product/package/grid").then(function (res) {
                _this.Store_list_ajax = res.data.data
                // console.log(res)
            })
        },
        //新增
        add() {
            this.people.push({
                name: this.name,
                age: this.age,
                sex: this.sex
            })
            this.name = ''
            this.age = ''
            this.sex = ''
            //避免重复添加,重置新的默认对象
            //  this.newPerson = {name:'阿三',sex:'男',age:50};
        },
        //删除
        del(index) {
            this.people.splice(index, 1); //每次删除一个
        },
        openTagModalCheck(index) {
            this.box_show = true;
            this.box_name = this.people[index].name
            this.box_age = this.people[index].age
            this.box_sex = this.people[index].sex
            //console.log(this.people[index].name)
        },
        close() {
            this.box_show = false;
        },
        blur() {
            document.getElementsByClassName('box').blur()
        },
        openTagModalUpdate(value, index) {
            this.box_show1 = true;
            this.nowindex = index;
            this.box_name1 = this.people[index].name
            this.box_age1 = this.people[index].age
            this.box_sex1 = this.people[index].sex
        },
        change(nowindex) {
            this.people[nowindex].name = this.box_name1;
            this.people[nowindex].age = this.box_age1;
            this.people[nowindex].sex = this.box_sex1;
            this.box_show1 = false;
        },
        close() {
            this.box_show1 = false;
            this.box_show = false;
        },
        search(value) {
            var _this = this;
            if (value) {
                this.people.forEach(function (item, index) {//for (var index;<<;index++) var item= people[index]
                    var reg = new RegExp(value, "gi")
                    if (reg.test(JSON.stringify(item))) {  //将对象转化为字符串
                        _this.$set(_this.nowindex, index, true); //找到要改变的那个数组  找到那个数组要改变的位置  变成成什么东西
                        // console.log(_this.nowindex)
                    } else {
                        _this.$set(_this.nowindex, index, false);
                    }
                })
            }
        },
        hehe() {
            this.lizi[1] = 6
            //    this.$set(this.lizi,1,6)
            //    console.log( this.lizi[1])
        },
        toLizi() {
            let that = this

            this.$router.push({
                path: "/Lizi_1",
                query: {
                    lzl: that.$route.path
                }
            })
        }
    }
}
</script>
<style scoped lang = less>
.tiao {
    float: left;
    margin-left: 20px;
}

.box_shodow {
    position: absolute;
    background: rgba(0, 0, 0, .6);
    top: 0%;
    width: 1000px;
    min-height: 300px;
}

.example {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    min-height: 300px;
    button {
        background: #5353ca;
        width: 50px;
        height: 30px;
        border: 1px solid #5353ca;
        color: #fff;
        cursor: pointer;
    }
    input {
        width: 200px;
        height: 28px;
        border: 1px solid #5353ca;
    }
    table {
        min-width: 300px;
        height: auto;
        border: 1px solid #5353ca;
        text-align: center;
        tr {
            &.red {
                background: #5353ca;
                color: #fff;
            }
        }
        td {
            min-width: 40px;
            min-height: 30px;
            border: 1px solid #5353ca;
            &:last-child {
                width: 185px;
            }
        }
    }
}

.example_nei {
    position: absolute;
}

.box,
.box4 {
    width: 300px;
    height: 250px;
    border: 1px solid #000;
    position: absolute;
    top: 50%;
    left: 40%;
    transition: height 0.4s;
    background: rgba(222, 111, 111, .6);
    span {
        font-size: 16px;
    }
    .box_top,
    .box_top1,
    {
        width: 55px;
        height: 30px;
        background: #749baf;
        text-align: center;
        margin: 10px auto;
        line-height: 30px;
        cursor: pointer;
        color: #fff;
    }
    .box1,
    .box2,
    .box3 {
        width: 90%;
        height: 35px;
        line-height: 35px;
        background: #a3bcc7;
        margin: 5px 0;
    }
}
</style>
