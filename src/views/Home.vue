<template>
  <div>
    <!---这是轮播部分-->
    <div class="banner">
        <div class="banner_right">
          <swiper :options="swiperOption">
              <swiperSlide>
                <a href="javascript:void(0)">
                  <img src="static/images/untitled.png" height="400px">
                </a>
               </swiperSlide>
               <swiperSlide>
                <a href="javascript:void(0)">
                  <img src="static/images/untitled1.png" height="400px">
                </a>
               </swiperSlide>
               <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
    </div>
   <!-------------------这是轮播结束部分--------------->
   <!--这是明星产品推荐部分-->
<div class="star">
    <div class="star_item">
      明星产品推荐
    </div>
    <div class="star_body">
      <div class="star_body_nei" v-for="sp in start_product">
        <div>
          <img src="/static/images/logo.png">
          <h3>{{sp.serviceName}}</h3>
          <p>{{sp.serviceInfo}}</p>
          <span>{{sp.price}}</span>元/人/月
        </div>
      </div>
    </div>
</div>
  <!-----------------------------这是明星产品推荐结束部分-->
<!----------------------------------------这是初创企业必备部分-->
   <div class="bussniess">
    <div class="bussniess_item">
      初创企业必备
    </div>
    <div class="bussniess_body" v-for="list_each in list_page_ajax">
          <img src="/static/images/logo.png">
          <h2>北京大光集团</h2>
          <h3>{{list_each.serviceName}}</h3>
          <p>{{list_each.serviceInfo}}</p>
          <span>{{list_each.price}}</span>元
          <a href="#">查看详情</a>
    </div>   
  </div>
<!----------------------------这是初创企业必备结束部分-->
<!----------------------------------------这是知识产权部分-->
<div class="known">
  <div class="known_item">
      知识产权
  </div>
  <div class="known_body">
      <img src="/static/images/u82.png" class="known_img1">
      <div class="known_img2">
           <img src="/static/images/u84.png" class="known_img3">
           <img src="/static/images/u86.png" class="known_img3">
           <img src="/static/images/u88.png" class="known_img4">
      </div>
  </div>
</div>
<!----------------------------------------这是知识产权结束部分-->
  <div class="middle">
      <div class="middle_nei">
        <img src="/static/images/首页_09.png">
        <div>
          <h2>资质认证</h2>
          <p>服务商100%服务认证</p>
        </div>
      </div>
      <div class="middle_nei">
        <img src="/static/images/首页_11.png">
        <div>
          <h2>支付安全</h2>
          <p>明码标价支付</p>
        </div>
      </div>
      <div class="middle_nei">
        <img src="/static/images/首页_03.png">
        <div>
          <h2>保险赔偿</h2>
          <p>出现问题平台赔付</p>
        </div>
      </div>
      <div class="middle_nei">
        <img src="/static/images/首页_06.png">
        <div>
          <h2>售后无忧</h2>
          <p>客服经理全程跟进</p>
        </div>
      </div>
  </div>

<div class="sevice">
  <div class="sevice_item">
      <span @click="sevice_show=true" :class="{sevice_active:sevice_show}">推荐服务商　　</span><span @click="sevice_show=false" :class="{sevice_active:!sevice_show}">推荐服务</span>
  </div>
  <div class="sevice_wai" v-show="sevice_show">
  <div class="sevice_body">
      <img src="/static/images/logo.png">
      <h2>北京大光集团</h2>
      <h3>商标快速注册通知栏</h3>
      <p>服务指数8.9分</p>提供的服务<br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a><br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a>
  </div>
    <div class="sevice_body">
      <img src="/static/images/logo.png">
      <h2>北京大光集团</h2>
      <h3>商标快速注册通知栏</h3>
      <p>服务指数8.9分</p>提供的服务<br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a><br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a>
  </div>
    <div class="sevice_body">
      <img src="/static/images/logo.png">
      <h2>北京大光集团</h2>
      <h3>商标快速注册通知栏</h3>
      <p>服务指数8.9分</p>提供的服务<br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a><br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a>
  </div>
    <div class="sevice_body">
      <img src="/static/images/logo.png">
      <h2>北京大光集团</h2>
      <h3>商标快速注册通知栏</h3>
      <p>服务指数8.9分</p>提供的服务<br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a><br>
      <a href="">实用新。。</a>
      <a href="">实用新。。</a>
  </div>
  </div>
    <div class="haha"  v-show="!sevice_show">
      <div class="bussniess_body" v-for="list_each in list_page_ajax">
          <img src="/static/images/logo.png">
          <h2>北京大光集团</h2>
          <h3>{{list_each.serviceName}}</h3>
          <p>{{list_each.serviceInfo}}</p>
          <span>{{list_each.price}}</span>元
          <a href="#">查看详情</a>
      </div>
    </div>
</div>
<!--------------------------------这是推荐服务商结束部分-->
<!--------------------------------------这是合作伙伴部分-->
  <div class="firends">
    <div class="firends_item">
      合作伙伴
   </div>
    <div class="firends_body"><img src="/static/images/首页_29.png"></div>
    <div class="firends_body"><img src="/static/images/首页_24.png"></div>
    <div class="firends_body"><img src="/static/images/首页_32.png"></div>
    <div class="firends_body"><img src="/static/images/首页_21.png"></div>
    <div class="firends_body"><img src="/static/images/首页_35.png"></div>
    <div class="firends_body"><img src="/static/images/首页_26.png"></div>
  </div>
<!---------------------------------------这是合作伙伴结束部分-->
  </div>
</template>
<script>
import{
    swiper,
    swiperSlide
  }from 'vue-awesome-swiper'
export default {
  components:{swiper,swiperSlide},
  name: 'hello',
  data() {
    return {
      start_product: [],
      list_page_ajax:[],
      sevice_show:true,
      swiperOption:{
        autoplay:3000,
        autoplayDisableOnInteraction:false,
        pagination:'.swiper-pagination',
        paginationClickable:true,
        loop: true,
      }
    }
  },
  created(){
   this.getdata();
  },
  methods:{
    getdata(){
      let _this = this;
      this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/recommend/list").then(function (res) {
        _this.list_page_ajax=res.data.data.hq;
        // console.log( _this.list_page_ajax)
        console.log(res)
      }),
       this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid",this.qs.stringify({start:0,limit:8,searchName:'代理',sort:2})).then(function (ress) {
        _this.start_product=ress.data.data;
        console.log(ress)
      })
    }
  }
}
</script>
<style scoped  lang="less">
// ----------------------------这是公共样式部分

 .mg{
      margin :0 auto;
  } 
 .tex{
    text-align: center;
  }
  .im{
     margin-top: 50px!important;
  }
  .item{
    width: 1200px;
     height: 23px;
     border-bottom: 2px solid #2693d4;
  }
  .bod{
     width: 1200px;
  }
  .star_body{
    width: 1200px;
    .im; 
    .mg
  }
// ----------------------------这是公共样式结束部分
// --------------------------这是轮播部分---------------
  .banner{
    width: 1200px;
    height: 401px;
    color: #fff;
    // overflow: hidden;
    .tex;.mg;
    .banner_right {
       width: 1200px;
       height: 401px;
       background: #636363;
       overflow: hidden;
       img{
         width: 1200px;
       }
     }
    //  swiperSlide{
    //    float: left;
    //  }
  } 
  // --------------------------这是轮播结束部分-----------------
  //  ------------------------- 这是明星产品推荐部分-------------------------
  .star_body_nei{
        width: 270px;
        border: 1px solid #e8e8e8;
        float: left;
        margin-left: 23px;
        &:hover{
             box-shadow: 0 0 8px #aaa;
        }  
  }
 .star{
  .bod;
  .im;
  .mg;
  overflow: hidden;
  height: 473px;
   .star_item{
     .item
   }
   .star_body{
    .star_body;
    height: 398px;
      .star_body_nei{
        .star_body_nei;
        height: 399px;
          div{
          width: 253px;
          height: 382px;
          background: #fafafa;
          margin-top: 5px!important; 
          .mg;.tex;
          line-height: 45px;
          img{
            width: 124px;
            height: 124px;
            margin-top: 50px;
          }
          p{
            // margin-bottom: 20px; 
            height: 55px;
            line-height: 15px;
          }
          span{
            font-size: 23px;
            color: #2792d6;
          }
      }
      }
      
   }
 }
// ------------------------这是明星产品推荐结束部分------------------------
//  ------------------------- 这是初创企业必备部分-------------------------
.bussniess{
  .bod;
  .im;
  .mg;
  height: 537px;
   .bussniess_item{
     .item
   }
    a{
       width: 157px;
       height: 44px;
       border: 2px solid #2792d6;
       border-radius: 10px;
       .tex;.mg;.im;
       line-height: 44px;
      display: block;
      font-size: 17px;
     }
  }
   .bussniess_body,
   .sevice_body{
     height: 480px;
    .star_body_nei;
     .tex;
     .im;
     img{
       width: 114px;
       height: 86px;
       margin-top: 20px;
     }
     h2,span,a{
        color: #2792d6;
     }
     h3{
       .im;
       margin-bottom: 20px;
       height: 36px;
       font-size:13px;
     }
     p{
       margin: 20px 0px 35px 0px;
       height: 38px;
     }
     span{
       font-size:24px;
     }
    
   }

// ------------------------这是初创企业必备结束部分------------------------
// ------------------------这是知识产权部分------------------------
.known{
  .star_body; 
  height: 544px;
  // background: pink;
    .known_item{
      .item
    }
    .known_body{
      width: 1200px;
      height: 482px;
      .im;
        .known_img1{
          width: 327px;
          height: 482px;
          float: left;
        }
        .known_img2{
          width: 851px;
          height: 482px;
          float: right;
            .known_img3{
              width: 415px;
              height: 230px;
              margin-left: 8px;
            }
            .known_img4{
              width: 851px;
              height: 230px;
              margin-top: 20px;
            }
        }
    }
}
// ------------------------这是知识产权结束部分------------------------
.middle{
  .star_body;
  height: 154px;
  background: #f7f7f7;
  overflow: hidden;
  .middle_nei{
    width: 256px;
    height: 86px;
    float: left;
    margin: 35px 20px;
      img{
        float: left;
        // margin-right: 10px;
        // margin-top: 13px;
        margin: 13px 20px;
      }
      div{
        float: left;
        line-height: 15px;
        p{
          line-height: 25px;
        }
        h2{
          line-height: 40px;
        }
      }
  }
}
// ------------------------这是推荐服务商部分------------------------
.sevice{
    .sevice_active{
      color: #2393d3;
    }
   .star_body;
   height: 500px;
   .sevice_item{
     .item;
   }
   span{
     cursor: pointer;
   }
   .sevice_body{
     height: 430px;
     p{
       margin: 20px 0 3px 0;
     }
     a{
       display: inline-block;
       width: 75px;
       height: 29px;
       background: #feedb9;
       font-size: 14px;
       color: #000;
       margin: 13px 13px;
       .tex;
       line-height: 27px;
     }
   }
   .bussniess_body{
     a{
       width: 157px;
       height: 44px;
       border: 2px solid #2792d6;
       border-radius: 10px;
       .tex;.mg;.im;
       line-height: 44px;
      display: block;
      font-size: 17px;
     }
   }
}
// ------------------------这是荐服务商结束部分------------------------
// ------------------------这是合作伙伴部分------------------------
.firends{
 .star_body;
 height: 214px;
 margin-bottom: 50px;
.firends_item{
  .item;
}
 .firends_body{
   width: 200px;
   height: 145px;
   border: 1px solid #ececec;
   .im;.tex;
   float: left;
    img{
      margin: 45px 2px;
    }
 }
}
// ------------------------这是合作伙伴结束部分------------------------
</style>
