<template>
  <div>
     <Row>
        <Col :xs="0" :sm="0" :md="24" :lg="24">

        <div class="whole">
            <div class="banner"><img :src="img_src+Shopfrontpage_ajax.providerImg"><div class="xx"><h1>{{Shopfrontpage_ajax.name}}</h1><p>{{Shopfrontpage_ajax.regionName}}</p></div></div>
            <div class="bottom clear"> 
                <div class="left_side">
                    <p class="l_p1">公司介绍</p>
                    <p class="l_p2">{{Shopfrontpage_ajax.providerInfo}}</p>
                    <div class="l_d1"><img src="./images/left_side_bottom.png" alt=""></div>
                </div>
                <div class="right_side">
                    <div class="r_top">
                        <span class="product" v-on:click="pro()" :class="{active:chang1}">服务产品</span>
                        <span class="telphone" v-on:click="tel()" :class="{active:chang2}">客服</span>
                        <span class="bookshu" v-on:click="book()" :class="{active:chang3}">资质证书</span>
                    </div>
                    <div class="change1" v-show = "chang1">
                        <!--<p class="r_serve">服务内容</p>-->
                        <div class="r_content" >
                            <div  v-for="(list_each,index) in curContent">
                                <p>{{list_each.serviceName}}</p>
                                <p><img src="./images/beijingdianheng.png" alt=""></p>
                                <p>{{list_each.serviceInfo}}</p>
                                <p>销量：</p>
                                <p class="r_c_price">￥{{list_each.price}}</p>
                                <p><span  class="r_c_price2">原价：{{list_each.marketPrice}}0</span><a :href="details+curContent[index].id"><span class="r_c_look">查看详情>>></span></a></p>
                            </div>  
                        </div>
                        <!--分页-->
                              <div class="change clear">
                                <span @click="showFirst">首页</span>
                                <span v-on:click="minusPage">上一页</span>
                                <span class="pageIndexes" v-for="pageIndex in pageList" v-bind:class="{'active': cur == pageIndex}" v-on:click="cur=pageIndex" @click="changListContent(pageIndex)">{{pageIndex}}</span>
                                <span v-on:click="addPage">下一页</span>
                                <span @click="showLast">跳至尾页</span> 
                              </div>
                        <!--分页-->
                    </div>
                    <div class="change2" v-show = "chang2">
                        <p>工作时间：{{Shopfrontpage_ajax.workTime}}</p>
                        <p>QQ咨询：<img src="./images/u4644.png" alt="">{{Shopfrontpage_ajax.qq}}</p>
                    </div>
                    <div class="change3" v-show ="chang3">
                        <img :src="img_src+Shopfrontpage_ajax.providerImg">
                    </div>
                </div>
            </div>   
        </div> 

        </Col>   
     </Row>
        <!--手机phone-->
<template>
     <Row  class="phone">
  <!--头部-->
    <Row class="ph_shop_top">
        <Col :xs="8" :sm="8" :md="0" :lg="0">
            <img class="ph_shop_top_img" :src="img_src+Shopfrontpage_ajax.providerImg">
        </Col>
         <Col :xs="16" :sm="16" :md="0" :lg="0">
            <div class="ph_shop_top_div">
              <h3>{{Shopfrontpage_ajax.name}}</h3>
              <h3>公司介绍:</h3>
              <p>{{Shopfrontpage_ajax.providerInfo}}</p>
              <p class="ph_shop_top_div_dizhi">{{Shopfrontpage_ajax.regionName}}</p>
           </div>
        </Col>
    </Row>
    <!--灰色背景-->
    <Row>
          <Col :xs="24" :sm="24" :md="0" :lg="0">
            <div class="ph_shop_gray"></div>
          </Col>
     </Row>
    <!--所有服务-->
     <Row>
          <Col :xs="24" :sm="24" :md="0" :lg="0">
              <div class="ph_shop_ser">
                  <p>所有服务</p>
              </div>
          </Col>
     </Row>
     <!--服务内容-->
     <Row class="ph_serve">
        <Col :xs="24" :sm="24" :md="0" :lg="0">
             <div class="ph_shop_content_right clear"  v-for="(list_each,index) in curContent">
                    <img :src="img_src+list_each.productImg"  onerror="this.src='/static/images/moren.png';" >
                        <div class="ph_shop_content_ri">
                              <a class="ph_shop_content_ri_a" :href="details+curContent[index].id"> <h3>{{list_each.serviceName}}</h3> </a>
                              <span>{{list_each.serviceInfo}}</span>
                              <span class="ph_shop_content_ri_red">￥{{list_each.price}}</span>
                              <p class="ph_shop_content_ri_dizhi">{{Shopfrontpage_ajax.regionName}}</p>
                        </div>
              </div>     
        </Col>
     </Row>
  </Row>    
</template>
  </div>
</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      img_src: 'http://115.182.107.203:8088/xinda/pic',
      details: 'http://localhost:8080/#/details?sid=',
      chang1:true,
      chang2:false,
      chang3:false,
      Shopfrontpage_ajax:[],
      Shop_ajax:[],
      // 分页、
      pageList: [],//用于统计要生成几个按钮
      goodsNum: 0,//统计商品总个数
      pagesNum: 1,//第几页的商品
      list: null,
      cur: 1, //当前页码  
      goodsNumPerPage: 6,//每页展示几件商品
      curContent: [],//当前页面的列表内容
      // 分页 
    }
  },
 
  created(){
    this.getdata(this.$route.query.id);
    this.tuijian();
  },
  methods: {
    pro:function(){
      this.chang1 = true;
      this.chang2 = false;
      this.chang3 = false;
    },  
    tel:function(){
      this.chang1 = false;
      this.chang2 = true;
      this.chang3 = false;
    },
    book:function(){
      this.chang1 = false;
      this.chang2 = false;
      this.chang3 = true;
    },
    // 分页
    changListContent(index) {//输入第几页，返回第几页的商品列表内容data
      var arr = [];
      let startNum = this.goodsNumPerPage * (index - 1);
      // console.log('goodsNumPerPage', this.goodsNumPerPage);
      let endNum = startNum + Math.round(this.goodsNumPerPage);
      // console.log('start=', startNum, 'end=', endNum);
      arr = this.Shop_ajax.slice(startNum, endNum);
      this.curContent = arr;
      this.pageList = this.indexs();
    },
    createPages(num) {//生成跳转商品页的按钮,输入每页商品的数量num
      let numofPages = Math.ceil(this.goodsNum / num);
      this.pagesNum = numofPages;
    },
    // 分页
    getdata(id){
      // console.log('asdasd====',id);
      this.sid = id;
    let _this = this;
    this.ajax.post("/xinda-api/provider/detail",
    this.qs.stringify({
      id:id
    })).then(function(res){
      console.log(res.data.data)
      _this.Shopfrontpage_ajax=res.data.data;
    })
  },
    tuijian(){
         let _this = this;
         this.ajax.post("/xinda-api/product/package/grid",
    this.qs.stringify({
       limit: 18,
    })).then(function(res){
      // console.log(res.data.data)
      _this.Shop_ajax=res.data.data;  
      // console.log(res.data.data)
      // 分页
       var pages
        _this.Shop_ajax= res.data.data;//列表页数据
        _this.goodsNum = Object.keys(_this.Shop_ajax).length;
        _this.createPages(_this.goodsNumPerPage);//每页5个商品，计算要多少页
        _this.pageList = _this.indexs();//生成页码列表
        _this.changListContent(_this.cur);//默认显示页面1内容
        // 分页
    })
    },
    // 分页
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
    // 分页
  }
}
</script>
<style scoped lang=less>
*{
  margin:0;
	padding:0;
}
/*清除浮动*/
.clear:after{
	content:"";
	display:block;
	clear:both;
}
@border:0px solid #11bcd0;
/*整个页面框架*/
.whole{
    width:1198px;
    height:945px;
    border:@border;
    margin:10px auto;
    /*最上边banner图片*/
    .banner{
      width:1198px;
      height:179px;
        img{
          width:180px;
          height:83px;
          border:@border;
          margin-left:20px;
          margin-top:42px;
          margin-right:20px;
          float:left;
        }
        .xx{
          float:left;
          width:400px;
          height:83px;
          margin-top:42px;
          p{
            margin-top:10px;
          }
        }
    }
    /*下半部分内容*/
    .bottom{
      width:1198px;
      height:583px;

        /*内容左侧*/
        .left_side{
          width:299px;
          height:583px;
          border-bottom:2px solid #eaeaea;
          float:left;
            .l_p1{
              font-size:24px;
              margin:10px 10px;
            }
            .l_p2{
              font-size:14px;
              width:256px;
              height:250px;
              margin:20px 25px 0;
            }
            .l_d1{
              width:256px;
              height:252px;
              margin:0 auto;
              img{
                width:256px;
                height:252px;

              }
            }
        }
        /*内容右侧*/
        .right_side{
          width:875px;
          border:@border;
          margin-left:20px;
          float:right;  
          .r_top{
              width:875px;
              height:40px;
              border-bottom: 1px solid #e9e9e9;
             
              span{
                  text-align: center;
                  line-height: 40px;
                  display: inline-block;
                  font-size:14px;
                  margin-left:20px;
                  width:114px;
                  height:40px;
                  cursor: pointer;
              }
              .active{
                  border-bottom:1px solid #298fd1;
                  color:#298fd1; 
              }
          }
          .change1{
              .r_serve{
                font-size:30px;
                color:#298fd1;
                text-align: center;
                margin-top:30px;
              }
              .r_content{
                width:875px;
                height:448px;
                border:@border;
                margin-top:10px;
                div{
                  width:265px;
                  height:236px;
                  margin:20px 10px;
                  float:left;
                  border:1px solid #ccc;
                  p{
                    margin:8px 10px; 
                  }
                  .r_c_price{
                      font-size:24px;
                      color:#298fd1;
                    }
                  .r_c_price2{
                    text-decoration:line-through; 
                  }
                  .r_c_look{
                    margin-left:40px;
                    color:#298fd1;
                    cursor: pointer;
                  }
                }
              }
              /*分页 */
    .change {
        margin-left:200px;
        margin-top:20px;
        span {
          border: 1px solid #ccc;
          text-align: center;
          float: left;
          cursor: pointer;
          margin-right: 6px;
          height: 36px;
          width: 68px;
          line-height: 36px;
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

}
          .change2{
                p{
                  font-size:26px;
                  margin:20px 20px;
                }
                img{
                  cursor: pointer;
                }
           }
           .change3{
              img{
                width:180px;
                height:100px;
                margin-left:40px;
                margin-top:20px;
              }
           }
        }
    }   
}
/*手机样式*/
.phone{
    margin-bottom:100px;
   /*头部样式*/
    .ph_shop_top{
      .ph_shop_top_img{
        width:70%;
        margin:80px 20px;
      }
      .ph_shop_top_div{
        width:95%;
        h3{
          margin-top:10px;
        }
        .ph_shop_top_div_dizhi{
          margin:10px 0;
        }
      }
    }
    /*灰色背景样式*/
    .ph_shop_gray{    
        width:100%;
        height:10px;
        background: #ccc;
        border:2px solid #ccc;
    }
    .ph_shop_ser{
      margin:10px auto;
      width:95%;
      border-bottom:1px solid #2693d4;
      p{
        font-weight: bold;
      }
    }
    /*服务内容*/
    .ph_serve{
      width:90%;
      margin:0 auto;
    }
    .ph_shop_content_right{
      width:100%;
      img{
        width:25%;
        float:left;
        margin:20px 0;
      }
      .ph_shop_content_ri{
        width:70%;
        float:right;
        .ph_shop_content_ri_a{
           color:#000;
        }
        h3{
          margin-top:10px;
        }
        .ph_shop_content_ri_red{
          color:red;
        }
        .ph_shop_content_ri_dizhi{
          margin-top:5px;
        }
      }
    }
}
</style>