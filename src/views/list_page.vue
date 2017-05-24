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
                   <span>综合排序</span><span>价格<img src="static/images/列表页_03.jpg"></span>
              </div>
              <div class="body_head2">
                  <span>商品</span>
                  <span>价格</span>
              </div>
              <div class="body_body" v-for="list_each in list_page_ajax">
                <div class="body_left">
                  <img src="static/images/logo.png">
                </div>
                <div class="body_middle">
                  <h2>{{list_each.serviceName}}</h2>
                  <div class="body_ads">
                      <p>{{list_each.serviceInfo}}</p>
                      <p>{{list_each.providerName}}</p><span>北京-北京市-朝阳区</span>
                  </div>
                </div>
                <div class="body_right">
                  <h1>¥{{list_each.price/100}}.00</h1>
                  <span>立即购买</span><span>加入购物车</span>
                </div>
              </div>
            </div>
          </div>
          <div class="content_right">
            <img src="/static/images/u684.png">
          </div>
      </div>
      <div class="change">
        <span>上一页</span>
        <span>1</span>
        <span>下一页</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'List_page',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list_page_ajax:[]
    }
  },
  created(){
     this.getdata();
  },
  methods:{
    getdata(){
      let _this = this;
      this.$http.post("http://115.182.107.203:8088/xinda/xinda-api/recommend/list").then(function (res) {
        _this.list_page_ajax=res.data.data.hq;//列表页数据
        console.log(_this.list_page_ajax)
      })
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
  height: 678px;
  .mg;
  .start{
    width: 1200px;
    height: 20px;
  }
  .content_left{
   width: 949px;
   height: 657px;
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
     height: 468px;
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
         &:hover{
            background: #2693d4;
            color: #fff;
         }
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
       height: 124px;
       .bord_b;
       .body_left,.body_middle{
         float: left;
         height: 95px;
       }
       .body_left,.body_middle,.body_right{
          margin: 10px 20px;
       }
       .body_left{
         width: 95px;
         .bord;
         text-align: center;
         img{
           padding: 20px 20px;
         }
       }
       .body_middle{
         width: 426px; 
         line-height: 23px;
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
          // width: 89px;
          // height: 29px;
          background: #2693d4;
          padding: 9px 15px;
          margin-top: 15px;
          margin-left: 10px;
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
.change{
  width: 200px;
  height: 46px;
  .mg;
  span{
    border: 1px solid #cccccc;
    padding: 5px 5px;
    cursor: pointer;
  }
}
</style>
