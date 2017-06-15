<template>    
  <div>
    <Row type="flex" justify="center">
      <Col :xs="0" :sm="24" :md="24" >
        <div class="content">
          <p class="start">首页 / 财税服务</p>
          <div class="content_left">
            <div class="head">
              <div class="head1">
                <div class="head1_left">
                  <h3>服务分类</h3>
                </div>
                <Menu mode="horizontal" class="head1_right" active-name="1">
                  <Menu-item name="1"><span @click="getdata(1)">代理记账</span></Menu-item>
                  <Menu-item name="2"><span @click="getdata(2)">税务代办</span></Menu-item>
                  <Menu-item name="3"><span @click="getdata(3)">审计报告</span></Menu-item>
                </Menu>
              </div>
              <div class="head2">
                <div class="head2_left">
                  <h3>类型</h3>
                </div>
                <Menu mode="horizontal" class="head2_right" active-name="1">
                  <Menu-item name="1">分公司注册</Menu-item>
                  <Menu-item name="2">公司注册git 地址</Menu-item>
                  <Menu-item name="3">合伙企业注册</Menu-item>
                  <Menu-item name="4">外商独资公司注册</Menu-item>
                  <Menu-item name="5">公司注册</Menu-item>
                  <Menu-item name="6">公司注册</Menu-item>
                </Menu>
              </div>
              <div class="head3">
                <div class="head3_left">
                  <h3>服务区域</h3>
                </div>
                <!--三级联动，省市区-->
                <div class="head3_right">
                  <threeLinkage style='margin-top:10px;'></threeLinkage>
                </div>
              </div>
            </div>
            <div class="body">
              <div class="body_head">
                <span>综合排序</span>
                <span class="sortPrice" @click="sortPrice">价格
                  <img src="static/images/列表页_03.jpg">
                </span>
                <div>显示<input type="number" v-model='goodsNumPerPage' min="1" max="10" @input='changeGoodsNumPerPage'>件/页</div>
              </div>
              <div class="body_head2">
                <span>商品</span>
                <span>价格</span>
              </div>

              <!--商品列表生成-->
              <div class="body_body" v-for="(list_each,index) in curContent">
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
              </div>
              <div class="empty" v-if="list_page_ajax.length==0">
                没有数据
              </div>
            </div>
          </div>
        
          <div class="content_right">
            <img src="/static/images/u684.png">
          </div>  
        </div> 
      </Col>   
      <Col :xs="0" :sm="24" :md="24" style="margin-top:20px">     <!--这是分页的页码-->
        <div class="change">
          <span @click="showLast">跳至尾页</span>
          <span @click="minusPage">上一页</span>
          <span class="pageIndexes" v-for="pageIndex in pageList" v-bind:class="{'active': cur == pageIndex}" v-on:click="cur=pageIndex" @click="changListContent(pageIndex)">{{pageIndex}}</span>
          <span v-on:click="addPage">下一页</span>
          <span @click="showFirst">返回首页</span>
          <p>一共{{pageList.length}}页</p>
        </div>
      </Col>
      <Col :xs="6" :sm="0" :md="0" class="list_chosse1" style="margin:14px 0">
       <div  :class="{beActive:beActive}" @click="beActive=true">默认排序</div>
      </COl>
      <Col :xs="6" :sm="0" :md="0" class="list_chosse2" style="margin:14px 0">
        <div @click="sortPrice()" class="sortPrice" :class="{beActive:!beActive}">价格</div>
      </COl>
    </Row>
    <div style="margin-bottom:50px">
      <div  v-for="(list_each,index) in list_page_ajax" style="margin:0 12px 15px 12px">
      <Row>
        <Col :xs="6" :sm="0" :md="0" >
          <img src="static/images/logo.png" >
        </Col>
        <Col :xs="18" :sm="0" :md="0" >
            <h3 @click="toDetail(list_each.id)" class="sortPrice">{{list_each.serviceName}}</h3>
            <p class="texthidden">{{list_each.serviceInfo}}</p>
            <p>{{list_each.providerName}}</p>
            <div style="vertical-align:bottom">
            <span style="float:left">北京-北京市-朝阳区</span>
            <h3 style="float:right;color:#fc4145">￥{{list_each.price/100}}</h3>
            </div>
        </Col>
      </Row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import citysList from '../store/storageOfCitys.js'
import threeLinkage from './ProvinceCityAreaLinkage.vue'
export default {
  name: 'List_page',
  components: {
    threeLinkage
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list_page_ajax: [],//商品列表总信息，
      pageList: [],//用于统计要生成几个按钮
      goodsNum: 0,//统计商品总个数
      pagesNum: 1,//第几页的商品
      list: null,
      cur: 1, //当前页码  
      goodsNumPerPage: 5,//每页展示几件商品
      curContent: [],//当前页面的列表内容
      sortFlag: false,//商品排列顺序，FALSE为未排列，或倒叙，true为正序排列
      list_page_ajax: [],
      addstate: 0,
      sidd: '',
      beActive:true,
    }
  },
  created() {
      var a = this.$route.query.goodsCome;
      a = a?a:0;
      this.getdata(a);
      // console.log(/g/.test('tagname'));
  },
  computed: {
    ...mapGetters(['getCartNum'])
  },
  methods: {
    ...mapActions(['setCartNum','change_mengban']),
    //加入购物车
    addCartNum(index,callback) {
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
        if (res.data.status == 0) {
          _this.change_mengban(true)
        } else {
          _this.ajax.post("/xinda-api/cart/add", _this.qs.stringify({
            'id': _this.curContent[index].id,
            num: 1
          })).then(function (res) {
            if (res.data.status == 1) {
              _this.addstate = 1;
              _this.ajax.post("/xinda-api/cart/cart-num").then(function (res) {
                callback?callback():'';
                _this.setCartNum(res.data.data.cartNum)
              })
            }else{
              alert(res.data.msg);
            }
          })
        }
      })
    },
    changListContent(index) {//输入第几页，返回第几页的商品列表内容data
      var arr = [];
      let startNum = this.goodsNumPerPage * (index - 1);
      // console.log('goodsNumPerPage', this.goodsNumPerPage);
      let endNum = startNum + Math.round(this.goodsNumPerPage);
      // console.log('start=', startNum, 'end=', endNum);
      arr = this.list_page_ajax.slice(startNum, endNum);
      this.curContent = arr;
      this.pageList = this.indexs();
    },
    createPages(num) {//生成跳转商品页的按钮,输入每页商品的数量num
      let numofPages = Math.ceil(this.goodsNum / num);
      this.pagesNum = numofPages;
    },
    getdata(index=1,sid) {//这是商品列表接口
      console.log(index)
      let _this = this;
      let goodsNum;//商品数量
      this.ajax.post("/xinda-api/product/package/grid",this.qs.stringify({
        productTypeCode: index
      })).then(function (res) {
        var pages
        if(!_this.$route.query.search){
          _this.list_page_ajax = res.data.data;//列表页数据
          console.log("youmuyou",res.data.data)
        }else{
          _this.list_page_ajax = res.data.data.filter(function(value){
            var regExp = new RegExp(_this.$route.query.search,"gi");
            return regExp.test(value.serviceName);
          });
        }
        _this.goodsNum = Object.keys(_this.list_page_ajax).length;
        _this.createPages(_this.goodsNumPerPage);//每页5个商品，计算要多少页
        _this.pageList = _this.indexs();//生成页码列表
        _this.changListContent(_this.cur);//默认显示页面1内容
      });
    },
    showLast: function () { //跳转最后一页
      var num = this.pageList.length;
      this.changListContent(num);
      this.cur = num;
      this.pageList = this.indexs();
    },
    showFirst: function () {  //跳转第一页
      this.changListContent(1);
      this.cur = 1;
      this.pageList = this.indexs();
    },
    addPage: function () {//点击进入下一页的页码
      if (this.cur < this.pagesNum) {
        this.cur++;
        this.changListContent(this.cur);
      }
      this.pageList = this.indexs();
    },
    minusPage: function () {//点击进入上一页的页码
      if (this.cur > 1) {
        this.cur--;
        this.changListContent(this.cur);
      }
      this.pageList = this.indexs();
    },
    indexs: function () {  //生成选择页码按钮
      var left = 1;  //编号为1的选页按钮 
      var right = this.pagesNum;  //  最后一页的选页按钮 
      var ar = []; //   选页按钮 编码集合
      if (this.pagesNum >= 11) {
        if (this.cur > 5 && this.cur < this.pagesNum - 4) {
          left = this.cur - 5;
          right = this.cur + 4;
        } else {
          if (this.cur <= 5) {
            left = 1;
            right = 10;
          } else {
            right = this.pagesNum;
            left = this.pagesNum - 9;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    },
    changeGoodsNumPerPage() {//改变每页显示的商品数量，每次重新输入值就重新计算
      this.createPages(this.goodsNumPerPage);//重新计算生成页码按钮个数
      this.pageList = this.indexs();//生成页码列表
      this.cur = 1;//重置页面显示
      this.changListContent(this.cur);//默认显示页面1内容
    },
    sortPrice() {//排序价格
      this.beActive=false;
      var getPrice = function (obj) {
        return obj.price / 100.0;
      };
      if (this.sortFlag) {
        this.curContent.sort(function (a, b) {
          return a.price - b.price;
        });
        this.list_page_ajax.sort(function (a, b) {
          return a.price - b.price;
        });
        this.sortFlag = !this.sortFlag;
      } else {
        this.curContent.sort(function (b, a) {
          return a.price - b.price;
        });
        this.list_page_ajax.sort(function (b, a) {
        return a.price - b.price;
      });
        this.sortFlag = !this.sortFlag;
      }
    },
    //跳转商品详情
    toDetail(id) {
      this.$router.push({ path: '/details', query: { sid: id } });
    },
    //立即购买
    buy_now(index) {
      let _this = this;
      this.addCartNum(index,function(){
        _this.$router.push({ path: '/shopping_car' });
      });
    },


    // 微信
    shiyan(){
      console.log(1)
    }
  }
}
</script>


<style scoped lang="less">
//------------------- 这是公共部分
.mg {
  margin: 25px auto;
}

.bord {
  border: 1px solid #cccccc;
}

.bord_b {
  border-bottom: 1px solid #cccccc;
}

.body_hea {
  border-bottom: 1px solid #cccccc;
}

// ----------------这是公共部分结束
.content {
  width: 1200px;
  .mg;
  .start {
    width: 1200px;
    height: 20px;
  }
  .content_left {
    width: 949px;
    float: left;
    .ivu-menu-light{
      background: #f7f7f7;
    }
    .head {
      width: 949px;
      height: 162px;
      .bord;
      background: #f7f7f7;
      span:first-child {
        padding: 5px 5px;
        margin-left: 10px;
        border-radius: 3px;
      }
      span {
        margin-left: 10px;
        padding: 5px 5px;
        cursor: pointer;
      }
      .ivu-menu{
        display: flex;
        align-items: center;
      }
      .ivu-menu-item-active{
        background: #2693d4;
        border-radius: 3px;
        color: #fff;
      }
      .ivu-menu-item{
        padding: 0;
        margin: 0;
        border: 0;
        height: auto;
        position: static;
        z-index: 0;
      }
      .ivu-menu-item:hover{
        background: #2693d4;
        border:none;
        color: #fff;
      }
      .head1_right,.head2_right{
        .ivu-menu-item{
          height: 26px;
          line-height: 26px;
          padding: 0 10px;
          margin: 0 10px;
        }
      }
      .head1_left,
      .head1_right,
      .head2_left,
      .head2_right,
      .head3_left{
        float: left;
      }
      .head1_left,
      .head2_left,
      .head3_left {
        width: 98px;
        border-right: 1px solid #ccc;
        text-align: center;
      }
      .head1_left,
      .head3_left,
      .head1_right{
        line-height: 40px;
      }
      .head2_left,
      .head2_right {
        line-height: 80px;
      }
      .head1_right,
      .head2_right{
        width: 849px;
      }
      .head1_left,
      .head1_right,
      .head3_left {
        height: 40px;
      }
      .head2_left,
      .head2_right {
        height: 80px;
      }
      .head1,
      .head3 {
        width: 949px;
        height: 40px;
      }
      .head1 {
        .bord_b;
      }
      .head2 {
        width: 949px;
        height: 80px;
        .bord_b;
      }
    }
    .body {
      width: 949px;
      .body_head {
        height: 40px;
        .body_hea;
        background: #f7f7f7;
        div {
          float: right;
          font-size: 11px;
          font-family: '宋体';
          color: #000;
          input {
            width: 30px;
            margin: 0 2px;
            border-radius: 3px;
          }
        }
        span {
          display: block;
          float: left;
          width: 108px;
          height: 40px;
          margin-top:-10px;
          padding: 10px 20px;
          &:first-child {
            background: #2693d4;
            color: #fff;
          }
        }
        
      }
      .body_head2 {
        height: 41px;
        .body_hea;
        span {
          padding: 10px 40px;
          &:nth-child(2) {
            float: right;
          }
          &:first-child {
            float: left;
          }
        }
      }
      .body_body {
        height: 150px;
        .bord_b;
        .body_left,
        .body_middle {
          float: left;
          height: 95px;
          h2:hover{
            color: red;
          }
        }
        .body_left,
        .body_middle,
        .body_right {
          margin: 10px 20px;
        }

        .body_left {
          width: 110px;
          height: 110px;
          .bord;
          margin-top: 20px;
          text-align: center;
          img {
            line-height: 95px;
            padding: 20px 20px;
          }
        }
        .body_middle {
          width: 426px;
          line-height: 23px;
          h2 {
            height: 18px;
            cursor: pointer;
          }
          .body_middle_p {
            height: 46px;
            line-height: 23px;
            margin:18px 0 ;
          }
          .body_ads {
            //  line-height: 20px;
            p,
            span {
              float: left;
            }
            p {
              margin-right: 20px;
            }
          }
        }
        .body_right {
          width: 216px;
          text-align: center;
          margin-top: 10px;
          float: right;
          h1 {
            margin-top:10px;
            font-weight: 100;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            color: red;
          }
          span {
            display: inline-block;
            background: #2693d4;
            line-height: 30px;
            width: 90px;
            height: 30px;
            margin-top: 35px;
            margin-left: 10px;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
          }
          span:hover{
             font-size:16px;
            font-weight: bold;
          }
        }
      }
      .empty{
        width: 100%;
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        color: #ccc;
        text-align: center;
        letter-spacing: 10px;
      }
    }
  }
  .content_right {
    float: right;
    width: 237px;
    height: 657px;
    img {
      width: 237px;
      height: 657px;
    }
  }
}
 // 这是分页的页码样式
.change {
  height: 46px;
  width: 800px;
  margin: auto;
  span {
    border: 1px solid #ccc;
    text-align: center;
    float: left;
    cursor: pointer;
    margin-right: 6px;
    height: 36px;
    width: 68px;
    line-height: 34px;
    color: #ccc;
    font-size: 13px;
    &:hover {
      color: #2894d5;
      border: 1px solid #2894d5;
    }
  }

  p {
    color: #aaa;
    line-height: 34px;
    font-size: 13px;
  }

  .pageIndexes {
    width: 39px;
    height: 36px;
  }

  .active {
    color: #2894d5;
    border: 1px solid #2894d5;
  }
}




// 微信端样式
.list_chosse2,
.list_chosse1{
  border:1px solid #4eb5ba;
  border-radius: 5px 0 0 5px;
  text-align: center;
}
.list_chosse2{
  border-radius: 0 5px 5px 0;
}
.beActive{
  background: #4eb5ba;
  color: #fff;
}
.texthidden{
  width:100%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.sortPrice {
    cursor: pointer;
  }
</style>