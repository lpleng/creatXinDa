<template>
  <div>
    <Row>
      <Col :xs="0" :sm="0" :md="24" :lg="24">
      <div class="whole">
        <div class="top clear">
          <p class="font-top">首页/公司注册</p>
          <img src="/static/images/u1182.png">
          <!--注册分公司-->
          <div class="top_right clear">
            <div class="t_r_left">
              <h2 id="head">{{Details_ajax1.serviceName}}</h2>
              <p class="t_r_left_seal">{{Details_ajax1.serviceInfo}}</p>
              <div class="t_r_left_price">
                <p class="prise_p">市场价：
                  <span>{{Details_ajax2.marketPrice}}</span>
                </p>
                <p class="prise_p2">价格：
                  <span>{{Details_ajax1.price}}</span>{{Details_ajax2.unit}}</p>
              </div>
              <p class="t_r_left_type">类型：
                <span>{{Details_ajax1.serviceName}}</span>
              </p>
              <p class="t_r_left_area">地区：{{Details_ajax.providerRegionText}}</p>
              <p class="t_r_left_number" id="num">购买数量：
                <span v-on:click="min()">-</span>
                <input class="numb" v-model="counter">
                <span v-on:click="add()">+</span>
              </p>
              <span class="t_r_left_buy" v-on:click="buys">立即购买</span>
              <span class="t_r_left_car" @click="addCartNum">加入购物车</span>
            </div>
            <!--右侧顶级服务商-->
            <div class="t_r_right">
              <h3 style="margin-top:10px;">顶级服务商</h3>
              <p class="t_r_right_center">北京信达服务中心</p>
              <p class="t_r_right_refer" v-on:click="advice()">马上咨询</p>
              <div class="t_r_right_serve">
                <p>
                  <a href="/#/Shopfrontpage?id=9080f0c120a64eb3831d50ba93c33e78">查看服务商</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <img src="/static/images/u1225.png">
        </div>
        <div class="bottom">
          <!--导航-->
          <div class="bottom_top">
            <span class="b_t_serve" v-on:click="serve()" :class="{active:ser}">服务内容</span>
            <span class="b_t_goods" v-on:click="Product()" :class="{active:con}">商品评价</span>
          </div>
          <!--服务内容-->
          <div class="bottom_content" v-show="ser">
            <div v-html="Details_ajax1.serviceContent">
            </div>
          </div>
          <!--商品评价-->
          <div class="bottom_content2" v-show="con">
            <div class="b_c_whole clear">
              <div class="b_c_w_top">
                <img src="/static/images/pingjiaxx.png">
                <div class="yinxiang">
                  <p>客户印象</p>
                  <p style="color:#2693d4">满意</p>
                  <p style="color:#2693d4">非常好</p>
                </div>
              </div>
              <div class="b_c_w_center">
                <span>全部评价(3)</span>
                <span v-on:click="hao()" :class="{active:pingjia}">好评(1)</span>
                <span v-on:click="zhong()" :class="{active:pingjia2}">中评(1)</span>
                <span v-on:click="cha()" :class="{active:pingjia3}">差评(1)</span>
              </div>
              <div class="b_c_w_bottom">
                <div class="b_c_bot_t">
                  <span class="assess">评价</span>
                  <span class="satusfied">满意度</span>
                  <span class="people">用户</span>
                </div>
                <div class="b_c_bot_con" v-show="pingjia">
                  <ul class="clear">
                    <li class="con_li1">发货速度快，客服服务态度好，产品也特别好并且产品也特别全，符合客户的需求</li>
                    <li class="con_li2">
                      <img src="/static/images/u8176.png">
                    </li>
                    <li class="con_li3">
                      <img src="/static/images/join_us/u3632.png">
                    </li>
                  </ul>
                  <div class="con_bot">
                    <span class="con_bot_s1">上一页</span>
                    <span class="con_bot_s2">1</span>
                    <span class="con_bot_s3">下一页</span>
                  </div>
                </div>
                <div class="b_c_bot_con" v-show="pingjia2">
                  <ul class="clear">
                    <li class="con_li1">还可以吧，发货速度一般，客服服务态度还行，产品也一般，符合一般客户的需求</li>
                    <li class="con_li2">
                      <img src="/static/images/u8176midlle.png">
                    </li>
                    <li class="con_li3">
                      <img src="/static/images/join_us/u3634.png">
                    </li>
                  </ul>
                  <div class="con_bot">
                    <span class="con_bot_s1">上一页</span>
                    <span class="con_bot_s2">1</span>
                    <span class="con_bot_s3">下一页</span>
                  </div>
                </div>
  
                <div class="b_c_bot_con" v-show="pingjia3">
                  <ul class="clear">
                    <li class="con_li1">非常不满意的一次购物，发货速度满，客服服务态度不行，产品也不好</li>
                    <li class="con_li2">
                      <img src="/static/images/u8176cha.png">
                    </li>
                    <li class="con_li3">
                      <img src="/static/images/join_us/u3636.png">
                    </li>
                  </ul>
                  <div class="con_bot">
                    <span class="con_bot_s1">上一页</span>
                    <span class="con_bot_s2">1</span>
                    <span class="con_bot_s3">下一页</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--电话咨询-->
      <div class="consult" v-if="consul">
        <div class="consult_top">
          <span class="free">免费电话咨询</span>
          <span class="cha" v-on:click="x()">X</span>
        </div>
        <div class="one" v-show="on">
          <div class="phonezixun">
            <img src="/static/images/phonezixun.png">
          </div>
          <div class="consult_content">
            <div class="warning_div" v-show="msg?true:false" :class="status<0?'falid_div':'success_div'">{{msg}}</div>
            <input class="tel" placeholder="请输入手机号码" id="mobile" v-model="userNumber">
            <input class="im" placeholder="请输入图形验证码" v-model="imgCode">
            <span>
              <img :src="code_url" alt="" @click="change_code">
            </span>
            <input type="password" class="pswd" placeholder="请输入密码" v-model="mobile_code">
            <input class="yzm" type="button" value="获取验证码" @click="click_getCode">
            <input type="button" class="beg" value="开始免费查询" @click="begin">
            <p class="con_p">本次电话查询完全免费，我们将对您的电话号码严格保密，请放心使用！</p>
          </div>
        </div>
        <!--验证通过后-->
        <div class="two" v-if="tw">
          <p class="pp1">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用!</p>
          <p class="pp2">正在为您接听电话</p>
          <p class="pp3">请您注意接听电话</p>
        </div>
      </div>
      </br>
      </br>
      </Col>
    </Row>
  
    <!--  手机端  -->
    <Row class="phone">
      <!--图片-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_top">
              <img style="width:100%" src="/static/images/u1182.png">
              <div class="ph_det_intro">
                <div class="ph_det_intro1">
                  <h2>{{Details_ajax1.serviceName}}</h2>
                    <p class="t_r_left_seal">{{Details_ajax1.serviceInfo}}</p>
                  </div>
              </div>
            </div>
            </Col>
          </Row>
      <!--地区价格-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_place">
              <p class="t_r_left_area">地区：{{Details_ajax.providerRegionText}}</p>
            </div>
            </Col>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_price">
              <span class="ph_det_place_span1">价格：
                <span>{{Details_ajax1.price}}</span>{{Details_ajax2.unit}}</span>
              <span class="ph_det_place_span2">
                <span> {{Details_ajax2.marketPrice}} </span>
              </span>
            </div>
            </Col>
          </Row>
      <!--灰色背景-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_bg_gray"></div>
            </Col>
          </Row>
      <!--服务商家-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_intro_serhome">
              <p>服务商家</p>
            </div>
            </Col>
          </Row>
          <Row>
            <Col :xs="8" :sm="8" :md="0" :lg="0">
            <img class="ph_det_intro_serhome_img" src="/static/images/dianputupian.png">
            </Col>
            <Col class="ph_det_intro_serhome_content" :xs="16" :sm="16" :md="0" :lg="0">
            <p class="ph_det_intro_serhome_content_p">{{Details_ajax3.name}}</p>
            <p class="ph_det_intro_serhome_content_p2">信誉：★★☆ </p>
            <p class="ph_det_intro_serhome_content_p2">{{Details_ajax.providerRegionText}}</p>
            <p class="ph_det_intro_serhome_content_p">累计服务客户数量：{{Store_list_ajax.orderNum}}</p>
            <a href="#/store_list">
              <p class="ph_det_intro_serhome_content_p3">进入店铺</p>
            </a>
            </Col>
          </Row>
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <p class="jinpai2">
              <img class="jinpai1" src="/static/images/jinpai.png">金牌服务商</p>
            </Col>
          </Row>
      <!--服务介绍-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_intro_serintrol">
              <p>服务介绍</p>
            </div>
            </Col>
          </Row>
      <!--具体服务内容-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div style="width:95%;margin:0 auto;" v-html="Details_ajax1.serviceContent">
            </div>
            </Col>
          </Row>
      <!--用户评价-->
          <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_det_intro_peoplepingjia">
              <p>用户评价</p>
            </div>
            </Col>
          </Row>
          <Row>
            <Col :xs="6" :sm="6" :md="0" :lg="0">
            <img class=" ph_det_intro_peoplepingjia_img1" src="/static/images/join_us/u3632.png">
            </Col>
            <Col :xs="18" :sm="18" :md="0" :lg="0"> 满意度：
            <img class=" ph_det_intro_peoplepingjia_img2" src="/static/images/u8176.png">
            </col>
            <Col :xs="18" :sm="18" :md="0" :lg="0"> 评价:
            <span class=" ph_det_intro_peoplepingjia_span">发货速度快，客服服务态度好，产品也特别好并且产品也特别全，符合客户的需求</span>
            </Col>
          </Row>
      <!--分页-->
          <Row class="ph_page">
            <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="con_bot">
              <span class="con_bot_s1">上一页</span>
              <span class="con_bot_s2">1</span>
              <span class="con_bot_s3">下一页</span>
            </div>
            </Col>
          </Row>
  
      <!--联系购物车购买-->
          <Row>
            <Col class="ph_det_lianxi" :xs="8" :sm="8" :md="0" :lg="0">
            <p v-on:click="advice()">联系我们</p>
            </Col>
            <Col :xs="8" :sm="8" :md="0" :lg="0">
            <p class="ph_det_gouwu" @click="addCartNum">加入购物车</p>
            </Col>
            <Col :xs="8" :sm="8" :md="0" :lg="0">
            <p class="ph_det_goubuy" v-on:click="buys">立即购买</p>
            </Col>
          </Row>
      <!--联系跳转-->
        <Row>
            <Col :xs="24" :sm="24" :md="0" :lg="0">
              <div class="ph_zixun" v-if="consul">
                  <Row>
                    <Col class="ph_zixun_top" :xs="24" :sm="24" :md="0" :lg="0">
                    <div>
                      <span class="mianfeizixun">免费电话咨询</span>
                      <span class="chacha" v-on:click="x()">X</span>
                    </div>
                    </Col>
                  </Row>
      
                  <Row>
                    <Col :xs="24" :sm="24" :md="0" :lg="0">
                    <div v-show="on">
          
                      <Row>
                        <Col :xs="24" :sm="24" :md="0" :lg="0">
                        <div>
                          <img style="width:100%" src="/static/images/phonezixun.png">
                        </div>
                        </Col>
                      </Row>
          
                      <Row>
                        <Col :xs="24" :sm="24" :md="0" :lg="0">
                        <div class="ph_zixun_all">
                          <Row>
          
                            <Col :xs="24" :sm="24" :md="0" :lg="0">
                                <div v-show="msg?true:false" :class="status<0?'falid_div':'success_div'">{{msg}}</div>
                            </Col>
                            <Col class="ph_tel" :xs="24" :sm="24" :md="0" :lg="0">
                                <input placeholder="请输入手机号码" id="mobile" v-model="userNumber">
                            </Col>
                            <Col class="ph_tel_yanzhengma" :xs="18" :sm="16" :md="0" :lg="0">
                              <input placeholder="请输入图形验证码" v-model="imgCode">
                            </Col>
                            <Col :xs="6" :sm="8" :md="0" :lg="0">
                                <span class="shoujiyanzhengma">
                                  <img :src="code_url" alt="" @click="change_code">
                                </span>
                            </Col>
                            <Col :xs="18" :sm="16" :md="0" :lg="0">
                              <input type="password" class="pswd" placeholder="请输入密码" v-model="mobile_code">
                            </Col>
                            <Col class="huoquyanzheng" :xs="6" :sm="8" :md="0" :lg="0">
                              <input type="button" value="获取验证码" @click="click_getCode">
                            </Col>
                            <Col class="ph_beg" :xs="24" :sm="24" :md="0" :lg="0">
                              <input type="button" value="开始免费查询" @click="begin">
                            </Col>
                            <Col class="ph_mianfei" :xs="24" :sm="24" :md="0" :lg="0">
                              <p>本次电话查询完全免费，我们将对您的电话号码严格保密，请放心使用！</p>
                            </Col>
                          </Row>
                        </div>
                        </Col>
                      </Row>
                    </div>
                    </Col>
                  </Row>
              <!--验证通过后-->
                  <Row>
                      <Col :xs="24" :sm="24" :md="0" :lg="0">
                        <div class="two" v-if="tw">
                          <p class="pp1">本次电话咨询完全免费，我们将对您的号码严格保密，请放心使用!</p>
                          <p class="pp2">正在为您接听电话</p>
                          <p class="pp3">请您注意接听电话</p>
                        </div>
                      </Col>
                  </Row>

            </div>

          </Col>

        </Row>

    </Row>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'hello',
  data() {
    return {
      counter: 1,
      ser: true,
      con: false,
      consul: false,
      on: true,
      tw: false,
      pingjia: true,
      pingjia2: false,
      pingjia3: false,
      sidd: '',
      Store_list_ajax: [],
      Details_ajax: [],
      Details_ajax1: [],
      Details_ajax2: [],
      Details_ajax3: [],
      Pingjia_ajax: [],
      Pingjialist_ajax: [],
      list_page_ajax: [],
      msg: '',//错误提示信息
      status: -999,//判断信息的status，以决定提示信息的颜色属性
      imgCode: '',//验证码的输入信息
      userNumber: '',//手机号码的输入信息
      mobile_code: '',//手机验证码输入信息
      userpassword: '',//密码设置
      code_url: '/xinda-api/ajaxAuthcode'
    }
  },
  computed: {
    ...mapGetters(['getCartNum']),
  },
  created() {
    this.getdata(this.$route.query.sid);
    this.Pingjiadata();
    this.Pingjialistq();
    this.menu();
    this.getdatax();
  },
  methods: {
    ...mapActions(['setCartNum']),
    change_code() {
      this.code_url = '/xinda-api/ajaxAuthcode?' + Math.random();
    },
    click_getCode() {
      //发送短信接口
      let _this = this;
      this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({
        //数据传输
        cellphone: this.userNumber,
        smsType: 1,
        imgCode: this.imgCode
      })).then(function (data) {//数据返回成功的回调函数
        _this.msg = data.data.msg;
        _this.status = data.data.status;
        if (data.data.status == -1) {
          _this.change_code()
        }
      }, function (err) {//数据返回 失败 的回调函数
        _this.msg = "网络连接超时"
      })
    },//click_getCode 方法结束
    begin() {
      let _this = this;
      //注册验证接口
      this.ajax.post("/xinda-api/register/valid-sms", this.qs.stringify({
        //数据传输
        cellphone: this.userNumber,
        smsType: 1,
        validCode: this.mobile_code
      })).then(function (res) {//数据返回成功的回调函数
        // console.log(res)
        _this.msg = res.data.msg;
        _this.status = res.data.status;
        //注册提交验证
        if (res.data.status == 1) {//验证注册通过，通过 发送后台数据
          _this.ajax.post("/xinda-api/register/register", _this.qs.stringify({
            //数据传输
            cellphone: _this.userNumber,
            smsType: 1,
            validCode: _this.mobile_code,
            password: _this.userpassword,
            regionId: 110010
          })).then(function (res) {//数据返回 成功 的回调函数
            _this.msg = res.data.msg;
            if (res.data.status == 1) {
              _this.on = false;
              _this.tw = true;
            }
          }, function (err) {//数据返回 失败 的回调函数
            _this.msg = "网络连接超时"
          })
        }//if 判断结束
      }, function (err) {//数据返回 失败 的回调函数
        _this.msg = "网络连接超时"
      }
        )
    },//begin 方法结束
    // 立即购买
    buys() {
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
        console.log(res)
        if (res.data.status == 0) {
          alert("未登录，请先登录");
          _this.$router.push({ name: "Register" })
        } else {
          // console.log(_this.sidd);
          _this.ajax.post("/xinda-api/cart/add", _this.qs.stringify({ 'id': _this.sidd, num: _this.counter })).then(function (res) {
            if (res.data.status == 1) {
              _this.ajax.post("/xinda-api/cart/cart-num").then(function (res) {
                _this.setCartNum(res.data.data.cartNum);
                // console.log('一次添加数量===',_this.counter);
                _this.$router.push({ name: "shopping_car" })
              })
            } else {
              alert(res.data.msg)
            }
          })
        }
      })
    },
    // 立即购买
    // buys(){
    //   let _this = this;
    //   this.ajax.post("/xinda-api/sso/login-info").then(function(res){
    //     if(res.data.status == 0){
    //       alert('请先登录');
    //       _this.$router.push({name:'register'})
    //     }else{
    //       _this.ajax.post("/xinda-api/cart/add",_this.qs.stringfiy({'id':this.sidd},num: _this.counter})).then(function(res){
    //         _this.setCartNum(res.data.data.cartNum)
    //         _this.$router.push({name:'shopping_car'})
    //         }else{
    //           alert(res.data.msg)
    //         }
    //       })
    //     }
    //   })
    // },



    // 加入购物车
    addCartNum() {
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
        if (res.data.status == 0) {
          alert("未登录，请先登录");
          _this.$router.push({ name: "Register" })
        } else {
          // console.log(_this.sidd);
          _this.ajax.post("/xinda-api/cart/add", _this.qs.stringify({ 'id': _this.sidd, num: _this.counter })).then(function (res) {
            if (res.data.status == 1) {
              _this.ajax.post("/xinda-api/cart/cart-num").then(function (res) {
                _this.setCartNum(res.data.data.cartNum);
                // console.log('一次添加数量===',_this.counter);
                
              })
            }
          })
        }
      })
    },
    // 手机端累计服务数量接口
    getdatax() {
      let _this = this;
      this.ajax.post("/xinda-api/provider/grid", {
        start: 0,
        limit: 6,
        productTypeCode: 10,
        regionId: 110102,
        sort: 1,
      }).then(function (res) {
        _this.Store_list_ajax = res.data.data[1];//列表页数据
        _this.productTypes = res.data.data.map(function (value) {
          return value.productTypes.split(",")
        });
        // console.log(_this.productTypes)
        // console.log(res.data.data)
      })
    },
    // 商品数量的加减
    add: function () {
      this.counter = parseInt(this.counter) + 1;
    },
    min: function () {
      if (this.counter > 0) {
        this.counter = parseInt(this.counter) - 1;
      }
    },
    serve: function () {
      this.ser = true;
      this.con = false;
    },
    Product: function () {
      this.ser = false;
      this.con = true;
    },
    advice: function () {
      this.consul = true;
    },
    x: function () {
      this.consul = false;
    },
    // 评价：v-show
    hao: function () {
      this.pingjia = true;
      this.pingjia2 = false;
      this.pingjia3 = false;
    },
    zhong: function () {
      this.pingjia = false;
      this.pingjia2 = true;
      this.pingjia3 = false;
    },
    cha: function () {
      this.pingjia = false;
      this.pingjia2 = false;
      this.pingjia3 = true;
    },
    getdata(sid) {
      this.sidd = sid;
      // console.log('run in getdata',sid);
      let _this = this;
      this.ajax.post("/xinda-api/product/package/detail", this.qs.stringify({
        sId: sid//"0cb85ec6b63b41fc8aa07133b6144ea3"
      })).then(function (res) {
        // console.log(res)
        _this.Details_ajax = res.data.data;
        //  console.log(res.data.data)
        _this.Details_ajax1 = res.data.data.providerProduct;
        _this.Details_ajax2 = res.data.data.product;
        _this.Details_ajax3 = res.data.data.provider
      })
    },
    //评价接口：数量
    Pingjiadata() {
      let _this = this;
      this.ajax.post("/xinda-api/product/judge/detail", this.qs.stringify({
        serviceId: "efddc8a338944e998ff2a7142246362b"
      })).then(function (res) {
        // console.log(res.data.data)
        _this.Pingjia_ajax = res.data.data;
      })
    },
    //评价接口：内容
    Pingjialistq() {
      let _this = this;
      this.ajax.post("/xinda-api/product/judge/grid", this.qs.stringify({
        serviceId: "efddc8a338944e998ff2a7142246362b",
      })).then(function (res) {
        // console.log(res.data.data)
        _this.Pingjialist_ajax = res.data.data;
      })
    },
    // 跳转过来定位
    menu() {
      window.scrollTo(0, 0);
    }
  },
}

</script>

<style scoped lang=less>
.bg-blue {
  background: #2693d4;
}
.bg-gray {
  background: #f7f7f7;
}
@border: 0px solid red;
/*清除浮动*/
.clear:after {
  content: "";
  display: block;
  clear: both;
}
/*whole整体div*/
.whole {
  width: 1200px;
  min-height: 200px;
  border: @border;
  margin: 10px auto;
  position: relative;
  .top {
    .font_top {
      font-size: 15px;
      color: #2a2a2a;
    }
    img {
      width: 43.8%px;
      height: 393px;
      border: @border;
      margin-top: 10px;
    }
    .top_right {
      float: right;
      width: 53.5%;
      height: 393px;
      border: @border;
      margin-top: 10px;
      .t_r_left {
        width: 60%;
        height: 393px;
        border: @border;
        float: left;
        font-size: 14px;
        .t_r_left_seal {
          margin-top: 20px;
        }
        /*市场价格*/
        .t_r_left_price {
          width: 100%;
          height: 75px;
          margin-top: 20px;
          border: @border;
          background: #f7f7f7;
          font-size: 14px;
          overflow: hidden;
          /*市场价*/
          .prise_p {
            margin: 16px 12px 0;
            span {
              text-decoration: line-through;
            }
          }
          /*价格*/
          .prise_p2 {
            margin: 6px 12px 0;
            span {
              color: red;
            }
          }
        }
        .t_r_left_type {
          margin-top: 20px;
          span {
            color: #2693d4;
            border: 1px solid #2693d4;
            display: inline-block;
            text-align: center;
            line-height: 28px;
            cursor: pointer;
          }
          span:hover {
            font-size: 16px;
          }
        }
        .t_r_left_area {
          margin-top: 20px;
        }
        .t_r_left_number {
          margin-top: 20px;
          /*购买数量 加 减*/
          span {
            text-align: center;
            font-size: 16px;
            display: inline-block;
            width: 8%;
            height: 27px;
            border: 1px solid #cccccc;
            cursor: pointer;
            line-height: 24px;
          }
          .numb {
            width: 8%;
            height: 27px;
            text-align: center;
           }
        }
        /*立即购买*/
        .t_r_left_buy {
          color: #fff;
          width: 25%;
          height: 37px;
          border: 1px solid #2693d4;
          background: #2693d4;
          margin-left: 60px;
          margin-top: 20px;
          text-align: center;
          display: inline-block;
          line-height: 37px;
          cursor: pointer;
        }
        .t_r_left_buy:hover {
          font-size: 16px;
        }
        /*购物车*/
        .t_r_left_car {
          color: #2693d4;
          width: 25%;
          height: 37px;
          border: 1px solid #2693d4;
          margin-left: 20px;
          margin-top: 20px;
          text-align: center;
          display: inline-block;
          line-height: 37px;
          cursor: pointer;
        }
        .t_r_left_car:hover {
          font-size: 16px;
        }
      }
      /*顶级服务商*/
      .t_r_right {
        width: 31%;
        height: 231px;
        border: 1px solid #2693d4;
        float: right;
        margin-top: 15px;
        text-align: center;
        p {
          margin: 25px auto 0;
        }
        .t_r_right_center {
          font-size: 14px;
        }
        /*马上咨询*/
        .t_r_right_refer {
          width: 88px;
          height: 28px;
          line-height: 28px;
          border: 1px solid #2693d4;
          cursor: pointer;
          border-radius: 6px;
          color: #2693d4;
        }
        .t_r_right_refer:hover {
          font-size: 16px;
        }
        /*查看服务商*/
        .t_r_right_serve {
          width: 195px;
          height: 69px;
          background: #bdddf2;
          margin-top: 21px;
          display: flex;
          align-items: center;
          p {
            width: 110px;
            height: 30px;
            background: #2693d4;
            line-height: 30px;
            margin: 0 auto;
            cursor: pointer;
            border-radius: 6px;
          }
          a {
            color: #fff;
          }
          p:hover {
            font-size: 16px;
          }
        }
      }
    }
  }
  /*中间图片*/
  .center {
    width: 1198px;
    height: 98px;
    border: @border;
    margin: 20px auto;
    img {
      width: 1198px;
      height: 98px;
    }
  }
  /*服务内容 商品评价*/
  .bottom {
    width: 1198px;
    min-height: 200px;
    border: @border;
    /*导航部分*/
    .bottom_top {
      width: 1198px;
      height: 41px;
      border: @border;
      background: #f7f7f7;
      /*导航，服务内容*/
      .active {
        color: #fff;
        background: #2693d4;
      }
      .b_t_serve {
        width: 134px;
        height: 41px;
        text-align: center;
        line-height: 41px;
        cursor: pointer;
        display: inline-block;
      }
      /*导航，商品评价*/
      .b_t_goods {
        width: 134px;
        height: 41px;
        text-align: center;
        line-height: 41px;
        cursor: pointer;
        display: inline-block;
      }
    }
    /*服务内容*/
    .bottom_content {
      float: left;
      width: 1198px;
      font-size: 14px;
    }
    /*商品评价*/
    .bottom_content2 {
      width: 1198px;
      height: 744px;
      border: @border;
      .b_c_whole {
        width: 1150px;
        height: 400px;
        .b_c_w_top {
          width: 1198px;
          height: 120px;
          img {
            float: left;
          }
          .yinxiang {
            float: right;
            width: 200px;
            height: 100px;
            margin-top: 10px;
            border-left: 1px solid #000;
            p {
              margin: 10px 20px;
            }
          }
        }
        .b_c_w_center {
          width: 1200px;
          height: 41px;
          background: #f7f7f7;
          line-height: 40px;
          .active {
            background: #2693d4;
            color: #fff;
          }
          span {
            width: 134px;
            height: 41px;
            background: #f7f7f7;
            text-align: center;
            color: #000;
            line-height: 41px;
            display: inline-block;
            cursor: pointer;
          }
          span:first-child {
            background: #2693d4;
            color: #fff;
          }
        }
        .b_c_w_bottom {
          width: 1180px;
          height: 400px;
          margin: 10px 10px;
          border-left: 2px solid #ccc;
          .b_c_bot_t {
            width: 1170px;
            height: 40px;
            margin-left: 10px;
            border-bottom: 2px solid #ccc;
            .assess {
              margin-left: 100px;
            }
            .satusfied {
              margin-left: 600px;
            }
            .people {
              margin-left: 200px;
            }
          }
          .b_c_bot_con {
            ul {
              li {
                list-style: none;
                float: left;
              }
              .con_li1 {
                width: 600px;
                height: 300px;
                border: @border;
                margin-left: 20px;
                margin-top: 20px;
                font-size: 16px;
              }
              .con_li2 {
                text-align: center;
                width: 200px;
                height: 300px;
                margin-left: 50px;
                border: @border;
                margin-top: 20px;
                font-size: 16px;
              }
              .con_li3 {
                width: 200px;
                height: 300px;
                margin-left: 30px;
                border: @border;
                margin-top: 20px;
                font-size: 16px;
                img {
                  margin: 0px 75px;
                  width: 60px;
                  height: 60px;
                }
              }
            }
            .con_bot {
              width: 300px;
              height: 40px;
              margin: 0 auto;
              text-align: center;
              span {
                display: inline-block;
                font-size: 18px;
                border: 1px solid #ccc;
              }
              span:hover {
                cursor: pointer;
              }
              .con_bot_s1 {
                width: 70px;
                height: 30px;
                line-height: 30px;
                color: #ccc;
              }
              .con_bot_s2 {
                width: 40px;
                height: 30px;
                line-height: 30px;
                color: #ccc;
              }
              .con_bot_s3 {
                width: 70px;
                height: 30px;
                line-height: 30px;
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
.consult {
  width: 40%;
  height: 430px;
  position: absolute;
  top: 280px;
  right: 400px;
  background: #fff;
  border-right: 1px solid #3c3c3c;
  border-bottom: 1px solid #3c3c3c;
  .consult_top {
    width: 100%;
    height: 40px;
    background: #f7f7f7;
    .free {
      font-size: 16px;
      line-height: 40px;
      margin-left: 20px;
    }
    .cha {
      font-size: 20px;
      margin-left: 490px;
      cursor: pointer;
    }
    .cha:hover {
      color: #ccc;
    }
  }
  .one {
    width: 100%;

    .phonezixun {
      width: 100%;
      ;
      height: 90px;
      img {
        width: 99%;
      }
    }
    .consult_content {
      width: 480px;
      height: 250px;
      text-align: center;
      margin: 0 auto;
      overflow: hidden;
      img {
        width: 100px;
        height: 35px;
        border-radius: 4px;
        background: #e5e4e4;
        border: 0;
        cursor: pointer;
      }
      input {
        margin-top: 10px;
        font-size: 16px;
      }
      span {
        margin-left: 10px;
        display: inline-block;
        vertical-align: middle;
      }
      .tel {
        width: 300px;
        height: 33px;
        border-radius: 4px;
      }
      .im {
        width: 189px;
        height: 33px;
        border-radius: 4px;
      }
      .pswd {
        width: 189px;
        height: 33px;
        border-radius: 4px;
      }
      .yzm {
        width: 100px;
        height: 35px;
        border-radius: 4px;
        margin-left: 10px;
        background: #e5e4e4;
        border: 0;
        cursor: pointer;
      }
      .beg {
        width: 304px;
        height: 38px;
        background: #26c7cd;
        border-radius: 4px;
        border: 0;
        color: #fff;
        cursor: pointer;
      }
      .con_p {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
  .two {
    width: 639px;
    height: 340px;
    .pp1 {
      font-size: 30px;
      width: 560px;
      margin: 20px auto;
      line-height: 40px;
      color: #ccc;
    }
    .pp2 {
      text-align: center;
      margin-top: 80px;
      font-size: 20px;
      color: #26c7cd
    }
    .pp3 {
      text-align: center;
      margin-top: 20px;
      font-size: 20px;
      color: #26c7cd
    }
  }
}

                    /*phone微信端*/
.phone {
  margin-bottom: 100px;
  position: relative;
  .ph_det_top {
    position: relative;
      .ph_det_intro {
        background: black;
        opacity: .5;
        color: #fff;
        position: absolute;
        bottom: 8px;
        width: 100%;
        .ph_det_intro1{
          width:95%;
          margin:0 auto;
        }
        .t_r_left_seal {
          font-size: 14px;
        }
    }
 }
  /*地区*/
  .ph_det_place {
    margin: 0 auto;
    width: 95%;
    border-bottom: 1px solid #ccc;
  }
  /*价格*/
  .ph_det_price {
    margin: 0 auto;
    width: 95%;
    .ph_det_place_span1 {
      color: red;
    }
    .ph_det_place_span2 {
      span {
        text-decoration: line-through;
      }
    }
  }
  /*灰色背景*/
  .ph_bg_gray {
    width: 100%;
    height: 10px;
    background: #ccc;
    border-top: 2px solid #ccc;
  }
  /*服务商家*/
  .ph_det_intro_serhome {
    margin: 10px auto;
    width: 95%;
    border-bottom: 1px solid #2693d4;
    p {
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .ph_det_intro_serhome_img {
    margin: 32px 32px;
  }
  .ph_det_intro_serhome_content {
    .ph_det_intro_serhome_content_p {
      font-size: 16px;
    }
    .ph_det_intro_serhome_content_p2 {
      color: #000;
    }
    .ph_det_intro_serhome_content_p3 {
      width: 30%;
      border: 1px solid #2693d4;
      margin: 10px 30px;
      color: #2693d4;
      text-align: center;
    }
  }
  .jinpai1 {
    margin: -10px 10px;
  }
  .jinpai2 {
    margin: 0 10px;
  }
  /*服务介绍*/
  .ph_det_intro_serintrol {
    margin: 10px auto;
    width: 95%;
    border-bottom: 1px solid #2693d4;
    p {
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .ph_det_intro_peoplepingjia {
    margin: 5px auto;
    width: 95%;
    border-bottom: 1px solid #2693d4;
    p {
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .ph_det_intro_peoplepingjia_img1 {
    width: 50%;
    margin: 20px 20px;
  }
  .ph_det_intro_peoplepingjia_img2 {
    margin: 0 20px;
  }
  .ph_det_intro_peoplepingjia_span {
    margin-left: 20px;
  }

  .ph_page {
    .con_bot {
      width: 300px;
      height: 40px;
      margin: 10px auto;
      text-align: center;
      span {
        display: inline-block;
        font-size: 18px;
        border: 1px solid #ccc;
      }
      span:hover {
        cursor: pointer;
      }
      .con_bot_s1 {
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #ccc;
      }
      .con_bot_s2 {
        width: 40px;
        height: 30px;
        line-height: 30px;
        color: #ccc;
      }
      .con_bot_s3 {
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #ccc;
      }
    }
  }
  .ph_det_lianxi {
    background: #ccc;
    text-align: center;
    border: 1px solid #fff;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
  }
  .ph_det_gouwu {
    cursor: pointer;
    text-align: center;
    background: #2693d4;
    border: 1px solid #fff;
    line-height: 50px;
    color: #fff;
    font-size:16px;
  }
  .ph_det_goubuy {
    cursor: pointer;
    text-align: center;
    background: red;
    border: 1px solid #fff;
    line-height: 50px;
    color: #fff;
    font-size: 16px; 
  }
  .ph_zixun {
    width: 95%;
    margin: 0px auto;
    position: absolute;
    bottom: 55px;
    left: 10px;
    background: #fff;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    .ph_zixun_top {
      background: #2693d4;
      .mianfeizixun {
        color: #fff;
        margin-left: 10px;
      }
      .chacha {
        margin-left: 68%;
        color: #fff;
      }
    }
    .ph_zixun_all {
      width: 90%;
      margin: 0 auto;
    }
    .ph_tel {
      margin: 10px 0px;
    }
    .shoujiyanzhengma{
      img{
        width:70%;
        border-radius: 5px;
      }
    }
    .huoquyanzheng{
        input{
          background: #2693d4;
          color:#fff;
          border-radius: 5px;
      } 
    }
    .ph_beg {
      margin: 10px auto;
        input{
          background: #2693d4;
          color:#fff;
          border-radius: 5px;
       }
    }
    .ph_mianfei {
      margin: 20px auto;
    }
    /*验证通过*/
    .two {
      width: 90%;
      margin: 0 auto;
        .pp1 {
          margin: 20px auto;
          line-height: 40px;
          color: #ccc;
        }
        .pp2 {
          text-align: center;
          color: #26c7cd;
          margin-top: 50px
        }
        .pp3 {
          text-align: center;
          color: #26c7cd;
          margin-bottom: 90px;
        }
    }
  }
}
</style>