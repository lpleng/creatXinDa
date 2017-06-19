<template>
  <div>
    <!--这是微信端的头部-->
    <Row>
        <Col :xs="24" :sm="0" :md="0" class="mobile_top">
            <select>
              <option>北京市</option>
            </select>
            <div class="new_img">
               <img src="/static/images/logo.png"><h1>信达</h1>
            </div>
        </Col>
    </Row>
    <!---这是轮播部分-->
    <Row class="banner" type="flex" justify="center">
        <Col class="banner_right" :xs="24" :sm="24" :md="18">
          <swiper :options="swiperOption">
              <swiperSlide>
                <a href="javascript:void(0)">
                  <img src="static/images/timgB152J7C3.jpg" height="400px">
                </a>
               </swiperSlide>
               <swiperSlide>
                <a href="javascript:void(0)">
                  <img src="static/images/timg5YVY11Y8.jpg" height="400px">
                </a>
               </swiperSlide>
               <swiperSlide>
                <a href="javascript:void(0)">
                  <img src="static/images/timgT5PO032T.jpg" height="400px">
                </a>
               </swiperSlide>
               <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </Col>
    </Row>
   <!-------------------这是轮播结束部分--------------->
   <!--这是明星产品推荐部分-->
<Row type="flex" justify="center">
    <Col :xs="0" :sm="24" :md="18" class="star">
        <div class="star_item">
          明星产品推荐
        </div>
        <Row class="star_body" type="flex" justify="space-around">
          <Col class="star_body_nei" v-for="(sp,index) in start_product" :key="index" span="5">
            <div>
              <img :src="img_prev+sp.providerImg">
              <h3>{{sp.serviceName}}</h3>
              <p>{{sp.serviceInfo}}</p>
              <span>{{sp.price}}</span>元/人/月
            </div>
          </Col>
        </Row>
  </Col>  
</Row>

  <!-----------------------------这是明星产品推荐结束部分-->
<!----------------------------------------这是初创企业必备部分-->
<Row type="flex" justify="center">
  <Col :xs="0" :sm="24" :md="18">
   <div class="bussniess">
    <div class="bussniess_item">
      初创企业必备
    </div>
    <Row type="flex" justify="space-around"> 
        <Col class="bussniess_body" v-for="(list_each,index) in list_page_ajax" :key="index" span="5">
              <img :src="img_prev+list_each.providerImg">
              <h2>北京大光集团</h2>
              <h3>{{list_each.serviceName}}</h3>
              <p>{{list_each.serviceInfo}}</p>
              <span>{{list_each.price}}</span>元
              <a href="#">查看详情</a>
        </Col> 
    </Row>  
  </div>
  </Col>
</Row>
<!----------------------------这是初创企业必备结束部分-->
<!--这是微信端的首页新增加的部分-->
<Row type="flex" justify="center">
  <Col :xs="24" :md="0" :sm="0" class="mobile_li">
      <ul>
        <li @click="$router.push({name:'all_goods',query:{goBefore:index}})" v-for="(value,index) in mo_menu">
          <div>
            <img :src="'static/images/menu_' + index + '.jpg'">
            <p>{{value}}</p>
          </div>
        </li>
      </ul>
  </Col>
</Row>
<!--这是微信端的首页新增加的结束部分-->
<!----------------------------------------这是知识产权部分-->
<Row type="flex" justify="center">
  <Col class="known" :xs="24" :sm="24" :md="18">
    <Row>
      <Col class="known_item" :xs="0" :sm="24" :md="18">
          知识产权
      </Col>
    </Row>
    <Row>
      <Col class="new_known_item" :xs="24" :sm="0" :md="0">
          知识产权
      </Col>
    </Row>
    <div class="known_body">
      <Row>
        <Col :xs="0" :sm="8" :md="8">
            <img src="/static/images/u82.png" class="known_img1">
        </Col>
        <Col :xs="24" :sm="16" :md="16">
          <div class="known_img2">
              <img src="/static/images/u84.png" class="known_img3">
              <img src="/static/images/u86.png" class="known_img3">
              <img src="/static/images/u88.png" class="known_img4">
          </div>
        </Col>
      </Row>
    </div>
  </Col>
</Row>

<!----------------------------------------这是知识产权结束部分-->
<Row type="flex" justify="center">
  <Col class="middle" :xs="0" :sm="24" :md="18">
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
  </Col>
</Row>

<Row type="flex" justify="center">
    <Col class="sevice" :xs="0" :sm="24" :md="18">
        <div class="sevice_item">
            <span @click="sevice_show=true" :class="{sevice_active:sevice_show}">推荐服务商　　</span><span @click="sevice_show=false" :class="{sevice_active:!sevice_show}">推荐服务</span>
        </div>
        <Row class="sevice_wai" v-show="sevice_show" type="flex" justify="space-around">
          <Col class="sevice_body" span="5">
              <img src="/static/images/logo.png">
              <h2>北京大光集团</h2>
              <h3>商标快速注册通知栏</h3>
              <p>服务指数8.9分</p>提供的服务<br>
              <a href="">实用新。。</a>
              <a href="">实用新。。</a><br>
              <a href="">实用新。。</a>
              <a href="">实用新。。</a>
          </Col>
          <Col class="sevice_body" span="5">
            <img src="/static/images/logo.png">
            <h2>北京大光集团</h2>
            <h3>商标快速注册通知栏</h3>
            <p>服务指数8.9分</p>提供的服务<br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a><br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a>
          </Col>
          <Col class="sevice_body" span="5">
            <img src="/static/images/logo.png">
            <h2>北京大光集团</h2>
            <h3>商标快速注册通知栏</h3>
            <p>服务指数8.9分</p>提供的服务<br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a><br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a>
          </Col>
          <Col class="sevice_body" span="5">
            <img src="/static/images/logo.png">
            <h2>北京大光集团</h2>
            <h3>商标快速注册通知栏</h3>
            <p>服务指数8.9分</p>提供的服务<br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a><br>
            <a href="">实用新。。</a>
            <a href="">实用新。。</a>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" v-show="!sevice_show">
            <Col class="bussniess_body" v-for="list_each in list_page_ajax" :key="list_each.serviceName" span="5">
              <img :src="img_prev+list_each.providerImg">
              <h2>北京大光集团</h2>
              <h3>{{list_each.serviceName}}</h3>
              <p>{{list_each.serviceInfo}}</p>
              <span>{{list_each.price}}</span>元
              <a href="#">查看详情</a>
            </Col>
        </Row>
    </Col>
</Row>

<!--------------------------------这是推荐服务商结束部分-->
<!--------------------------------------这是合作伙伴部分-->
<Row type="flex" justfiy="center">
    <Col class="firends" :xs="0" :sm="24" :md="18">
      <div class="firends_item">
        合作伙伴
      </div>
      <Col class="firends_body" span="4"><img src="/static/images/首页_29.png"></Col>
      <Col class="firends_body" span="4"><img src="/static/images/首页_24.png"></Col>
      <Col class="firends_body" span="4"><img src="/static/images/首页_32.png"></Col>
      <Col class="firends_body" span="4"><img src="/static/images/首页_21.png"></Col>
      <Col class="firends_body" span="4"><img src="/static/images/首页_35.png"></Col>
      <Col class="firends_body" span="4"><img src="/static/images/首页_26.png"></Col>
  </Col>
</Row>
<!---------------------------------------这是合作伙伴结束部分-->
<!--这是手机端的初创企业部分-->
<Row class="new_bussniess_wai">
  <Col :xs="24" :sm="0" :md="0">
   <div class="new_bussniess">
    <div class="bussniess_item">
      初创企业必备
    </div>
    <div class="new_bussniess_body" v-for="list_each in list_page_ajax">
          <div class="new_bussniess_body_left">
              <img :src="img_prev+list_each.providerImg">
          </div>
          <div class="new_bussniess_body_right">
              <h3>{{list_each.serviceName}}</h3>
              <p>{{list_each.serviceInfo}}</p><br>
              <span>￥{{list_each.price}}</span>元
          </div>
    </div>   
  </div>
  </Col>
</Row>
<!--这是手机端的初创企业结束部分-->
<!--这是微信端底部logo 部分-->
<Row class="foot_logo_wai">
  <Col class="foot_logo" :xs="24" :sm="0" :md="0">
      <div>
          <img src="/static/images/logo.png">
          <h1>信达</h1>
      </div>
      <p>一站式交易中心</p>
  </Col>
</Row>
<!--这是微信端底部logo结束 部分-->
<!--这是微信端的底部部分-->
<Row>
    <Col>
      
    </Col>
</Row>
<!--这是微信端的底部结束部分-->

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
      img_prev:"http://115.182.107.203:8088/xinda/pic",
      list_page_ajax:[],
      sevice_show:true,
      swiperOption:{
        autoplay:3000,
        autoplayDisableOnInteraction:false,
        pagination:'.swiper-pagination',
        paginationClickable:true,
        loop: true,
      },
      mo_menu:["财税服务","开公司","公司变更","个人社保","公司社保","知识产权","全部服务"]
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
      }),
       this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid",this.qs.stringify({start:0,limit:8,searchName:'代理',sort:2})).then(function (ress) {
        _this.start_product=ress.data.data;
      }),
      this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/recommend/list").then(function(resss){
         _this.list_page_ajax=resss.data.data.hq;
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
     width: 100%;
     height: auto;
     border-bottom: 2px solid #2693d4;
  }
  // .bod{
  //    width: 1200px;
  // }
  .star_body{
    .im; 
    .mg
  }
// ----------------------------这是公共样式结束部分
 .mobile_top{
   padding: 2% 2%;
   select{
     border: none;
     margin-left: 5%; 
     float: left;
     margin-top: 20px;
     font-size: 17px;
   }
  .new_img{
    width: 150px;
    margin: 0 auto;
     img{
     float: left;
   }
   h1{
     float: left;
    margin-top: 10px;
   }
  }
 }
// --------------------------这是轮播部分---------------
  .banner{
    height: auto;
    color: #fff;
    // overflow: hidden;
    .tex;.mg;
    .banner_right {
       height: auto;
       overflow: hidden;
       img{
         width: 100%;
         height: auto;
       }
     }
    //  swiperSlide{
    //    float: left;
    //  }
  } 
  // --------------------------这是轮播结束部分-----------------
  //  ------------------------- 这是明星产品推荐部分-------------------------
  .star_body_nei{
        /*width: 270px;*/
        border: 1px solid #e8e8e8;
        /*float: left;*/
        &:hover{
             box-shadow: 0 0 8px #aaa;
        }  
  }
 .star{
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
        /*margin-left: 47px;*/
        .star_body_nei;
        height: 399px;
          div{
          /*width: 253px;*/
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
  // .bod;
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
     overflow: hidden;
     height: 480px;
    .star_body_nei;
    /*margin-left: 27px;*/
     .tex;
     .im;
     img{
       width: 114px;
       height: 86px;
       margin: 20px 0;
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
//  ------------------------- 这是手机端初创企业必备部分-------------------------
.new_bussniess_wai{
  margin-top: 50px;
  .new_bussniess{
  height:auto;
  .bussniess_item{
     .item;
     font-size:30px;
  }
  .new_bussniess_body{
    border-bottom: 1px solid #e3e3e3;
    width: 90%;
    height: 219px;
    margin: 10px auto;
      .new_bussniess_body_left{
        width: 25%;
        border: 1px solid #e3e3e3;
        float: left;
        margin-top: 3%;
        img{
          margin: 25% 20%;
          width: 50%;
        }
      }
     
  }
}
}
//  ------------------------- 这是手机端初创企业必备结束部分-------------------------
/*这是微信端的首页新增加的部分*/
.mobile_li{
  color: #000;
  margin-top: 20px;
  li{
    // display:inline-block;
    width: 16%;
    height: 16%;
    list-style: none;
    float: left;
    margin: 2% 4.5%;
    text-align: center;
    img{
      width: 95%;
      height: 95%;
    }
  }
}
/*这是微信端的首页新增加的部分*/
// ------------------------这是知识产权部分------------------------
@media screen and (min-width:750px) {
   .new_bussniess_body_right{
         width: 60%;
         height: 80%;
         float: right;
         margin-top: 3%;
         p{
           height: 65px;
           overflow: hidden;
           font-size: 20px;
         }
         h3{
            height: 35px;
            overflow: hidden;
            font-size: 25px;
         }
         span{
           color: red;
           font-weight: 800;
           font-size: 30px;
         }
      }
.known{
  .star_body; 
  height: 544px;
  // background: pink;
    .known_item{
      .item;
      // font-size: 0.1%;
    }
    .new_known_item{
      .item;
      font-size: 30px;
    }

    .known_body{
      width: 100%;
      height: 482px;
      .im;
        .known_img1{
          width: 100%;
          height: 482px;
          float: left;
        }
        .known_img2{
          width: 95%;
          height: 482px;
          float: right;
            .known_img3{
              width: 46%;
              height: 230px;
              margin-left: 8px;
            }
            .known_img4{
              width: 95%;
              height: 230px;
              margin-top: 20px;
            }
        }
    }
  }

}
@media screen and (max-width:750px) {
   .new_bussniess_body_right{
         width: 60%;
         height: 80%;
         float: right;
         margin-top: 3%;
         p{
           height: 65px;
           overflow: hidden;
         }
         h3{
            height: 55px;
            overflow: hidden;
         }
         span{
           color: red;
           font-weight: 800;
         }
      }
  .known{
  .star_body; 
  // background: pink;
    .known_item{
      .item;
      // font-size: 0.1%;
    }
    .new_known_item{
      .item;
      font-size: 30px;
    }
  .known{
  .star_body; 
  }
    .known_body{
      width: 100%;
      .im;
        .known_img2{
          width: 95%;
          float: right;
            .known_img3{
              width: 46%;
              margin-left: 8px;
            }
            .known_img4{
              width: 95%;
              margin-top: 20px;
            }
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
  overflow: hidden;
 .star_body;
 height: 214px;
 margin-bottom: 50px;
.firends_item{
  .item;
}
 .firends_body{
   height: 145px;
   border: 1px solid #ececec;
   .im;.tex;
   float: left;
    img{
      margin: 45px 2px;
    }
 }
}
.foot_logo_wai{
  margin-top: 20px;
  .foot_logo{
  height: 158px;
    div{
      width: 156px;
      height: 70px;
      margin: 0px auto;
        img{
          float: left;
         }
        h1{
           float: left;
          margin: 10px 0 0 13px;
         }
    }
    p{
      text-align: center;
      font-size: 20px;
    }
}
}

// ------------------------这是合作伙伴结束部分------------------------
</style>
