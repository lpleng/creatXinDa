<template >
    <div>
        <input type="text" placeholder="请输入手机号" v-model="mobile">
        <br>
        <input type="text" placeholder="请输入密码" v-model="password">
        <br>
        <input type="text" placeholder="请输入验证码" v-model="yanzhengma">
        <br>
        <img :src="imgCodeUrl" @click="change">
        <button @click="center">确认登陆</button>
    
        <div v-for="Details_ajax1 in Details_ajax1_ajax">
            <h2>{{Details_ajax1.providerName}}</h2>
            <p>{{Details_ajax1.providerInfo}}</p>
        </div>
    
        <div>{{geta}}</div>
        <!--让index.js中的a显示出来-->
        <div>购物车数量：{{getcartNum}}件</div>
    
        <!--<button @click="toLizi">跳回去</button>-->
    
        <!--layout布局-->
        <!--<el-row>
		   <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content1 bg-purple">123</div></el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content2 bg-purple-light">123</div></el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content3 bg-purple">123</div></el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content4 bg-purple">123</div></el-col>
        </el-row>-->
        <div style="width:50px;height:30px;background:Light Blue;">hahah</div>
        <el-button type="primary">点击这里</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button :plain="true" type="danger">点击这里</el-button>
        <el-button type="danger" icon="edit"></el-button>
        <el-button type="danger">点击这里
            <i class="el-icon-upload"></i>
        </el-button>
        <el-button-group>
            <el-button type="primary" icon="arrow-left">上一页</el-button>
            <el-button type="primary">下一页
                <i class="el-icon-arrow-right"></i>
            </el-button>
        </el-button-group>
        <el-radio class="radio" v-model="radio" label="1" @click="bei">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2" @click="xaun">备选项</el-radio>
        <div v-show="beixuan">123</div>
         <div v-show="beixuan1">456</div>
        <el-checkbox-group v-model="lala">
            <el-checkbox label="复选框A"></el-checkbox>
            <el-checkbox label="复选框B"></el-checkbox>
            <el-checkbox label="复选框C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="复选框d" disabled></el-checkbox>
        </el-checkbox-group>
    
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    
        <el-input placeholder="请输入内容" v-model="input3">
            <template slot="prepend">Http://</template>
        </el-input>
        <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>

        <el-select v-model="value" placeholder="请选择">
            
        </el-select>
    </div>
</template>
<script>
// import {mapGetters} from 'vuex' //让index.js中的a显示出来;
const cityOptions = ['上海', '北京', '广州', '深圳'];
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['geta', 'getcartNum'])

    },
    data() {
        return {
             num1: 1,
            checkAll: true,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            beixuan:false,
            beixuan1:false,

            lala: ['复选框A', '复选框d'],
            radio: '1',
            Details_ajax1_ajax: [],
            mobile: '',
            password: '',
            yanzhengma: '',
            imgCodeUrl: '/xinda-api/ajaxAuthcode',
            sidd: ''
        }
    },
    //  create(){
    //      this.bb(this.$route.query.b)
    //  },

    created() {
        this.getdata(this.$route.params.id)
    },


    methods: {
        bei(){
            this.beixuan = true;
             this.beixuan1 = false;
        },
        xuan(){
            this.beixuan = false;
            this.beixuan1 = true;
        },
        getdata(d) {
            // this.sidd = d;
            console.log(d)
            let _this = this
            this.ajax.post("/xinda-api/product/package/detail", this.qs.stringify({
                sId: d
            })).then(function (res) {
                _this.Details_ajax1_ajax = res.data.data;
                console.log('....', res)
            })
        },

        change() {
            this.imgCodeUrl = '/xinda-api/ajaxAuthcode?' + Math.random()
        },
        a(value) {
            return /^1[3|4|5|7|8][0-9]{9}$/.test(value)
        },
        b(value) {
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)
        },
        toLizi() {
            this.$router.push({ path: this.$route.query.lzl })
        },
        center() {
            console.log("1111", this.$route.query.lzl)
            if (this.a(this.mobile)) {
                if (this.b(this.password)) {
                    this.ajax.post('/xinda-api/sso/login', this.qs.stringify({
                        loginId: this.mobile,
                        password: this.md5(this.password),
                        imgCode: this.imgCode
                    })).then(function () {
                        this.status = this.data.status;
                        if (res.data.status == 1) {//登陆成功
                            _this.setusername();
                            _this.setCartNum();
                            setTimeout(function () {
                                _this.$router.push({ path: "_this.$route.query.lzl", query: { 'username': _this.userNumber } })
                            }, 1000);
                        } else {
                            console.log('验证码错误')
                            _this.b() //图片验证码发生改变
                        }
                    })
                } else {
                    console.log('密码格式错误')
                }
            } else {
                console.log('手机号格式错误')
            }

        }
    }
}
</script>
<style scoped lang = less>
.grid-content1 {
    background: pink;
}

.grid-content2 {
    background: yellow;
}

.grid-content3 {
    background: pink;
}

.grid-content4 {
    background: pink;
}
</style>
