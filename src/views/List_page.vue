<template>
  <div>
      <div class="content">
         <p class="start">首页 / 财税服务</p>
          <div class="content_left">
            <div class="head">
              <div class="head1">
                <div class="head1_left">
                  <h3>服务分类</h3>
                </div>
                <div class="head1_right">
                 <span>公司注册</span><span>公司变更</span>
                </div>
              </div>
              <div class="head2">
                <div class="head2_left">
                  <h3>类型</h3>
                </div>
                <div class="head2_right">
                   <span>分公司注册</span><span>公司注册地址</span><span>合伙企业注册</span><span>外商独资公司注册</span><span>公司注册</span><span>公司注册</span>
                </div>
              </div>
              <div class="head3">
                <div class="head3_left">
                  <h3>服务区域</h3>
                </div>
                <div class="head3_right">
                  <select class="select">
                    <option>省</option>
                    <option>山东省</option>
                    <option>江苏省</option>
                  </select>
                  <select class="select">
                    <option>市</option>
                    <option>青岛市</option>
                    <option>济南市</option>
                  </select>
                  <select class="select">
                    <option>区</option>
                    <option>市南区</option>
                    <option>市北区</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="body">
              <div class="body_head">
                   <span>综合排序</span><span class="sortPrice" @click="sortPrice">价格<img src="static/images/列表页_03.jpg"></span>
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
                      <p>{{list_each.providerName}}</p><span>北京-北京市-朝阳区</span>
                  </div>
                </div>
                <div class="body_right">
                  <h1>¥{{list_each.price/100}}.00</h1>
                  <span @click="buy_now(index)">立即购买</span>
                  <span @click="addCartNum(index)">加入购物车</span>
                </div>
              </div>

            </div>
          </div>
          <div class="content_right">
            <img src="/static/images/u684.png">
          </div>
      </div>
      <!--这是分页的页码-->
      <div class="change">
        <span @click="showLast">跳至尾页</span>
        <span v-on:click="minusPage">上一页</span>
        <span class="pageIndexes" v-for="pageIndex in pageList" v-bind:class="{'active': cur == pageIndex}" v-on:click="cur=pageIndex" @click="changListContent(pageIndex)">{{pageIndex}}</span>
        <span v-on:click="addPage">下一页</span>
        <span @click="showFirst">返回首页</span>
      </div>
  </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'List_page',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list_page_ajax:[],//商品列表总信息，
      pageList:[],//用于统计要生成几个按钮
      goodsNum:0,//统计商品总个数
      pagesNum:1,//第几页的商品
      list: null,  
      cur: 1, //当前页码  
      goodsNumPerPage:4,//每页展示几件商品
      curContent:[],//当前页面的列表内容
      sortFlag:false,//商品排列顺序，FALSE为未排列，或倒叙，true为正序排列
      list_page_ajax:[],
      addstate:0
    }
  },
  created(){
     this.getdata();
  },
  computed:{
    ...mapGetters(['getCartNum']),

  },
  methods:{
    ...mapActions(['setCartNum']),
    addCartNum(index){
     let _this  = this;
     this.ajax.post("/xinda-api/sso/login-info").then(function(res){
      if(res.data.status == 0){
          alert("未登录，请先登录");
          _this.$router.push({name:"Register"})
      }else{
        _this.ajax.post("/xinda-api/cart/add",_this.qs.stringify({
          'id':_this.list_page_ajax[index].id,
          num:1
          })).then(function (res) {      
          if(res.data.status==1){
              _this.addstate = 1;
              _this.ajax.post("/xinda-api/cart/cart-num").then(function(res){
                  _this.setCartNum(res.data.data.cartNum) 
              })
            }
          })
        }
      })
    },
    changListContent(index){//输入第几页，返回第几页的商品列表内容data
       var arr=[];
       let startNum= this.goodsNumPerPage*(index-1);
       let endNum=startNum+this.goodsNumPerPage;
       arr=this.list_page_ajax.slice(startNum,endNum);
       this.curContent=arr;
      },
    createPages(num){//生成跳转商品页的按钮,输入每页商品的数量num
      let numofPages=Math.ceil(this.goodsNum/num);
      this.pagesNum=numofPages;
    }
    ,
    getdata(){//这是商品列表接口
      let _this = this;
      let goodsNum;//商品数量
      this.ajax.post("/xinda-api/product/package/grid").then(function (res) {
        var pages
          _this.list_page_ajax=res.data.data;//列表页数据
          _this.goodsNum=Object.keys(_this.list_page_ajax).length;
          _this.createPages(_this.goodsNumPerPage);//每页5个商品，计算要多少页
          _this.pageList=_this.indexs();//生成页码列表
          _this.changListContent(_this.cur);//默认显示页面1内容
      });
    } ,
      showLast: function() { 
        var num=this.pageList.length;
        this.changListContent(num);
        this.cur=num;
      },  
      showFirst: function() {  
        this.changListContent(1);
        this.cur=1;

      }  ,
      addPage: function() {//点击进入下一页的页码
        if(this.cur<this.pagesNum){
          this.cur++;
          this.changListContent(this.cur);
        }
      },
      minusPage: function() {//点击进入上一页的页码
         if(this.cur>1){
          this.cur--;
          this.changListContent(this.cur);
        }
      },
      indexs: function() {  //生成选择页码按钮
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
      sortPrice(){//排序价格
        var getPrice=function(obj){
          return obj.price/100.0;
        };
        if(this.sortFlag){
            this.curContent.sort(function(a,b){
              return a.price-b.price;
            });
            this.sortFlag=!this.sortFlag;
        }else{
           this.curContent.sort(function(b,a){
              return a.price-b.price;
            });
            this.sortFlag=!this.sortFlag;
        }
      },
      changeCitys(){//省市区切换

      },
      getProvince(){
        
      },
    toDetail(id){
      this.$router.push({path:'/details',query:{sid:id}});
    },
    buy_now(index){
      this.addCartNum(index);
      this.$router.push({path:'/Order_info',query:{id: this.list_page_ajax[index].id}});
    }
      }
}
</script>


<style scoped lang="less">
//------------------- 这是公共部分
.mg{
  margin: 25px auto;
}
.bord{
  border:1px solid #cccccc;
}
.bord_b{
  border-bottom:1px solid #cccccc;
}
.body_hea{
   width: 947px;
   height: 40px;
   border-bottom:1px solid #cccccc;
}
// ----------------这是公共部分结束
.content{
  width: 1200px;
  .mg;
  .start{
    width: 1200px;
    height: 20px;
  }
  .content_left{
   width: 949px;
   float: left;
   .head{
     width: 949px;
     height: 162px;
     .bord;
    background: #f7f7f7;
    span:first-child{
      background: #2693d4;
      padding: 5px 5px;
      margin-left: 10px;
      border-radius: 3px;
      color: #fff;
    }
    span{
       margin-left: 10px;
        padding: 5px 5px;
        cursor:pointer;
    }
    span:hover{
       background: #2693d4;
      border-radius: 3px;
      color: #fff;
    }
    select{
      width: 86px;
      height: 20px;
       margin-left: 10px;
    }
    .head1_left,.head1_right,.head2_left,.head2_right,.head3_left,.head3_right{
        float: left;
    }
    .head1_left,.head2_left,.head3_left{
      width: 98px;
      border-right: 1px solid #ccc;
      text-align: center;
    }
    .head1_left,.head3_left,.head1_right,.head3_right{
      line-height: 40px;
    }
    .head2_left,.head2_right{
      line-height: 80px;
    }
    .head1_right,.head2_right,.head3_right{
      width: 849px;
    }
    .head1_left,.head1_right,.head3_left,.head3_right{
        height: 40px;
    }
    .head2_left,.head2_right{
      height: 80px;
    }
    .head1,
   .head3{
      width: 949px;
      height: 40px;
    }
     .head1{
      .bord_b;
     }
    .head2{
      width: 949px;
      height: 80px;
      .bord_b;
    }
   }
   .body{
     width: 949px;
     .mg;.bord;
     .body_head{
       .body_hea;
       background: #f7f7f7;
       span{
         display: block;
         float: left;
         width: 108px;
         height: 40px;
         padding: 10px 20px;
         &:first-child{
           background: #2693d4;
           color: #fff;
         }
       }
       .sortPrice{
         cursor:pointer;
       }
     }
     .body_head2{
       .body_hea;
       span{
          padding: 10px 40px;
         &:nth-child(2){
         float: right;
       }
       &:first-child{
         float: left;
       }
       }
     }
     .body_body{
       width: 949px;
       height: 150px;
       .bord_b;
       .body_left,.body_middle{
         float: left;
         height: 95px;
       }
       .body_left,.body_middle,.body_right{
          margin: 10px 20px;
       }
       .body_left{
         width: 110px;
         height: 110px;
         .bord;
         margin-top: 20px;
         text-align: center;
         img{
           line-height: 95px;
           padding: 20px 20px;
         }
       }
       .body_middle{
         width: 426px; 
         line-height: 23px;
         h2{
           height: 18px;
           cursor: pointer;
         }
         .body_middle_p{
           height: 46px;
         }
         .body_ads{
          //  line-height: 20px;
           p,span{
             float: left;
           }
           p{
             margin-right: 20px;
           }
         }
       }
       .body_right{
         width: 216px;
         text-align: center; 
         height: 95px;
         margin-top: 10px;
        float: right;
        h1{
          color:red;
        }
        span{
          display: inline-block;
          background: #2693d4;
          line-height: 30px;
          width: 90px;
          height: 30px;
          margin-top: 15px;
          margin-left: 10px;
          color: #fff;
          cursor: pointer;

        }
       }
     }
   }
  }
  .content_right{
    float: right;
    width: 237px;
    height: 657px;
    img{
     width: 237px;
    height: 657px;
    }
  }
}
// 这是分页的页码样式
.change{
  height: 46px;
  width:800px;
  margin:auto;
  span{
    border: 1px solid #ccc;
    text-align: center;
    float:left;
    cursor: pointer;
    margin-right:6px;
   height:36px;
   width:68px;
   line-height: 34px;
   color:#ccc;
   font-size: 13px;
   &:hover{
     color:#2894d5;
     border:1px solid #2894d5;
   }
  }
  .pageIndexes{
    width:39px;
    height:36px;
  }
  .active{
    color:#2894d5;
    border:1px solid #2894d5;
  }
}
</style>
