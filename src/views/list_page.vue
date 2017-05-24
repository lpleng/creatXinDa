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
                
              </div>
            </div>
          </div>
          <div class="content_right">
            <img src="../../images/u684.png">
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'List_page',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
     .mg;.bord

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
</style>
