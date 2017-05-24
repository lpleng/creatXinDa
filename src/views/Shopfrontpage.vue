<template>
  <div>
        <div class="whole">
            <div class="banner"><img src="./images/banner.png" alt=""></div>
            <div class="bottom clear"> 
                <div class="left_side">
                    <p class="l_p1">公司介绍</p>
                    <p class="l_p2">为客户提供更加标准的体验，信达北京服务中心采用自营模式，打造一站式企业服务平台</p>
                    <div class="l_d1"><img src="./images/left_side_bottom.png" alt=""></div>
                </div>
                <div class="right_side">
                    <div class="r_top">
                        <span class="product" v-on:click="pro()">服务产品</span>
                        <span class="telphone" v-on:click="tel()">客服</span>
                        <span class="bookshu" v-on:click="book()">资质证书</span>
                    </div>
                    <div class="change1" v-show = "chang1">
                        <p class="r_serve">服务内容</p>
                        <div class="r_content">
                            <div>
                                <p>商标快速注册通道(5个小时就办完)</p>
                                <p><img src="./images/beijingdianheng.png" alt=""></p>
                                <p>工作日内五小时提交申报，次日拿到</p>
                                <p>销量：</p>
                                <p class="r_c_price">￥1400.00</p>
                                <p><span  class="r_c_price2">原价：￥2000.00</span> <span class="r_c_look">查看详情>>></span></p>
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
                        <p>工作时间：周一到周五</p>
                        <p>QQ咨询：<img src="./images/u4644.png" alt=""></p>
                    </div>
                    <div class="change3" v-show ="chang3">
                        <img src="./images/u4652.png">
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
      chang1:true,
      chang2:false,
      chang3:false,
    }
  },
  methods: {
    pro:function(){
      this.chang1 = true;
      this.chang2 = false;
      this.chang3 = false;
      var product = window.document.getElementsByClassName('product')[0];
      var telphone = window.document.getElementsByClassName('telphone')[0];
      var bookshu = window.document.getElementsByClassName('bookshu')[0];
      product.style.color = '#298fd1';
      telphone.style.color = 'black';
      bookshu.style.color = 'black';
      telphone.style.borderBottom= '0px solid #298fd1';
      product.style.borderBottom= '1px solid #298fd1';
      bookshu.style.borderBottom= '0px solid #298fd1';
    },
    tel:function(){
      this.chang1 = false;
      this.chang2 = true;
      this.chang3 = false;
      var product = window.document.getElementsByClassName('product')[0];
      var telphone = window.document.getElementsByClassName('telphone')[0];
      var bookshu = window.document.getElementsByClassName('bookshu')[0];
      product.style.color = 'black';
      telphone.style.color = '#298fd1';
      bookshu.style.color = 'black';
      telphone.style.borderBottom= '1px solid #298fd1';
      product.style.borderBottom= '0px solid #298fd1';
      bookshu.style.borderBottom= '0px solid #298fd1';
    },
    book:function(){
      this.chang1 = false;
      this.chang2 = false;
      this.chang3 = true;
      var product = window.document.getElementsByClassName('product')[0];
      var telphone = window.document.getElementsByClassName('telphone')[0];
      var bookshu = window.document.getElementsByClassName('bookshu')[0];
      product.style.color = 'black';
      telphone.style.color = 'black';
      bookshu.style.color = '#298fd1';
       telphone.style.borderBottom= '0px solid #298fd1';
      product.style.borderBottom= '0px solid #298fd1';
      bookshu.style.borderBottom= '1px solid #298fd1';
    },
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
              span:first-child{
                border-bottom:1px solid #298fd1;
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