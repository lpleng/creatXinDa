<template>
  <div>
        <div class="whole">
            <div class="banner"><img src="./images/banner.png" alt=""></div>
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
                        <div class="r_content">
                            <div>
                                <p>商标快速注册通道(5个小时就办完)</p>
                                <p><img src="./images/beijingdianheng.png" alt=""></p>
                                <p>工作日内五小时提交申报，次日拿到</p>
                                <p>销量：</p>
                                <p class="r_c_price">￥1400.00</p>
                                <p><span  class="r_c_price2">原价：￥2000.00</span><a href="#/details"><span class="r_c_look">查看详情>>></span></a></p>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                      <div class="page">
                            <img src="./images/beijingheng.png" alt="">
                      </div>
                    </div>
                    <div class="change2" v-show = "chang2">
                        <p>工作时间：{{Shopfrontpage_ajax.workTime}}</p>
                        <p>QQ咨询：<img src="./images/u4644.png" alt="">{{Shopfrontpage_ajax.qq}}</p>
                    </div>
                    <div class="change3" v-show ="chang3">
                        <img src="">
                    </div>
                </div>

            </div>
            
        </div>
        
  </div>
</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      img_src: 'http://115.182.107.203:8088/xinda/pic',
      chang1:true,
      chang2:false,
      chang3:false,
      Shopfrontpage_ajax:[],
    }
  },
  created(){
    this.getdata();
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
    getdata(){
    let _this = this;
    this.ajax.post("/xinda-api/provider/detail",
    this.qs.stringify({
      id:"9080f0c120a64eb3831d50ba93c33e78"
    })).then(function(res){
      console.log(res.data.data)
      _this.Shopfrontpage_ajax=res.data.data;
    })
  }

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
          width:1196px;
          height:179px;
          border:@border;
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
          height:630px;
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
                  height:189px;
                  border:1px solid red;
                  margin:20px 10px;
                  float:left;
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
              .page{
                  img{
                    margin-left:100px;
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
                width:400px;
                height:500px;
                margin-left:40px;
                margin-top:20px;
              }
           }
        }
    }
    
}





</style>