<template>
    <div class="shopping_content">
        <div class="fir_car">首页/购物车</div>
        <div class="all_comm">
            <div class="title">全部商品(<span>{{getCartNum}}</span>)</div>
            <ul class="clear">
                <li>公司</li>
                <li>服务商品</li>
                <li>单价</li>
                <li>数量</li>
                <li>金额</li>
                <li>操作</li>
            </ul>
            <div class="subsidiary clear" v-for="(shoppinglist,index) in shoppingresult_ajax">
                <div class="shoper">店铺：<span>{{shoppinglist.providerName}}</span></div>
                <ul class="list_shop">
                   <li> <img :src="shopping_picture+shoppinglist.providerImg" alt=""></li>
                    <li>{{shoppinglist.serviceName}}</li>
                    <li>¥ {{shoppinglist.unitPrice}}</li>
                    <li>
                        <div class="li_box">
                            <div href="" hideforcs title="-1" @click.prevent="del(index)">-</div>
                            <input type="text"  title="请输入购买量" v-model="shoppinglist.buyNum">
                            <div href="" hideforcs title="+1" @click.prevent="add(index)">+</div>
                        </div>
                    </li>
                    <li>{{shoppinglist.totalPrice}}</li>
                    <li @click.prevent="shoppingremove(index)"><span class="dele">删除</span></li>
                </ul>
            </div>
            <div class="totle">
                <p>金额总计
                    <span></span>
                </p>
                <div>
                    <a>继续购物</a>
                    <!--<a href="#/Order_info" @click="submit()">去结算</a>-->
                    <a  @click="submit()">去结算</a>
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
import {mapActions,mapGetters} from 'vuex'
export default {
    name: 'shopping_car',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            shop_car_num: 1,
            dataKind: [],//存放数据种类，验证存在0，1，2，3，4哪几种           
            shopping_picture:"http://115.182.107.203:8088/xinda/pic",
            shoppingresult_ajax:[],//购买商品数量详情
            allprice:0
        }
    },
    created(){          
        this.getdata()
    },
     computed:{
      ...mapGetters(['getCartNum','getusername'])
     },
    mounted() {
        this.$watch('shop_car_num',function(newval,oldval){
             if(newval>99 || newval<1) this.shop_car_num = oldval
        })
    },
    methods: {
        ...mapActions(['setCartNum']),
       //添加数量
        add(index) {
            console.log(this.shoppingresult_ajax[index].providerId)
            let _this = this;
            this.ajax.post("/xinda-api/cart/add",this.qs.stringify({"id":this.shoppingresult_ajax[index].serviceId,"num":1})).then(function(res){
                _this.ajax.post("/xinda-api/cart/list").then(function (res) {
                _this.shoppingresult_ajax = res.data.data                
            });
            })           
        },
        //减少数量
        del(index) {
            let _this = this;
            console.log(this.shoppingresult_ajax[index].buyNum)
            if(this.shoppingresult_ajax[index].buyNum>=1){
                this.ajax.post("/xinda-api/cart/add",this.qs.stringify({"id":this.shoppingresult_ajax[index].serviceId,"num":-1})).then(function(res){                
                    _this.ajax.post("/xinda-api/cart/list").then(function (res) {
                    _this.shoppingresult_ajax = res.data.data             
                    });
                })  
            }
            else{
                this.shoppingresult_ajax[index].buyNum=0
            }         
        },
        getdata(){
            //购物车列表请求
            let _this = this;
            this.ajax.post("/xinda-api/cart/list").then(function (res) {
                 _this.shoppingresult_ajax = res.data.data                
            });
        },
        shoppingremove(index){
            let _this = this;            
             this.ajax.post("/xinda-api/cart/del",this.qs.stringify({"id":this.shoppingresult_ajax[index].serviceId})).then(function (res) {
                 _this.shoppingresult_ajax.splice(index,1)
                 console.log(res)
            if(res.data.status==1){
                _this.setCartNum();
            }
            });
        },
        //总价和商品总件数
        //结算方法
        submit(){
            let _this = this;
            this.ajax.post("/xinda-api/cart/submit").then(function(res){
                console.log(res)
            })
        }
    }
}
</script>


<style lang="less" scoped>
 ul {
      width: 100%;
      height: 65px;
      .dele{
          width: 20px;
          height: 20px;
          cursor: pointer;
         }
        li{
            width: 16%;
            float: left;
            color: #686868;
            font-size: 13px;
            line-height:78px;
            text-align: center;
            display:inline-block;
            height: 100%;
            white-space: nowrap;
            .li_box{
                width: 72px;
                height: 24px;
                margin: 25px auto;
                    input{
                        outline: none;
                        border: none;
                        width: 30px;
                        text-align: center;
                        /*display: inline-block;*/
                        height: 20px;
                        float: left;
                     }
                     div{
                        width: 18px;
                        background: #bcbebd;
                        opacity: 0.5;
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
    margin: 20px auto;
    min-height:600px;
    .all_comm {
        width: 1200px;
        min-height:416px;
        .title {
            color: #9cc7ea;
            line-height: 31px;
            text-indent: 68px;
            border-bottom: 1px solid #bdbdbd;
        }
      
        .subsidiary {
            width: 100%;
            .shoper{
                color:#686868;
                line-height:37px;
            }
            .list_shop{
                background: #f7f7f7;
                height:78px;
                img{
                    margin-top:12px;
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