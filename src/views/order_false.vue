<template>
  <div class="div">
      <div class="fir_list">首页/支付</div>
      <div class="order_suc">
            <p class="p">支付失败</p>
            <div class="smileFace">
                <div class="div1">
                    <img src="/static/images/zhifushibai.jpg" alt="">
                    <div class="word">
                        <h1 class="h1">支付失败×</h1>
                        <h3 class="p1">支付未成功让我们再试一次吧！<a href="">返回支付页</a></h3><br>
                        <h4 class="p2">如有问题，请联系客服：<a href="">010-834567</a></h4>
                </div>
                 </div>
                
            </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store_list',
  data() {
    return {
     Store_list_ajax:[],
    }
  },
   created(){
     this.getdata();
  },
 methods:{
    getdata(){
      let _this = this;
      this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/provider/grid").then(function (res) {
        _this.Store_list_ajax=res.data.data;//列表页数据
    //    console.log(res)
        // console.log(_this.Store_list_ajax)
      })
    }
 }
}

</script>


<style scoped lang="less">
    .div{
        width:1200px;
        margin:27px auto;
        .fir_list{
            color: #696969;
            font-size: 13px;
            line-height: 39px;
         }
         .order_suc{
             p{
                color:#3d9bd9;
                line-height: 31px;
                border-bottom:1px solid #bdbdbd;
                 }
            .smileFace{
                width:100%;
                height:381px;
                background: #f7f7f7;
                margin: 12px 0 206px 0;
                overflow: hidden;
                .div1{
                    width:715px;
                    height:172px;
                    margin:102px auto;
                    img{
                        float:left;
                    }
                     .word{
                         float:left;
                         margin-left: 69px;
                        .h1{
                            color:#3d9bd9;
                            display: block;
                            font-size:29px;
                        }
                        .p1{
                            position: relative;
                            a{
                                font-size:14px;
                                color:#2693d4;
                                display:block;
                                width:123px;
                                height:33px;
                                line-height: 33px;
                                text-align: center;
                                border-radius: 5px;
                                border:1px solid #2693d4;
                                position: absolute;
                                top:-7px;
                                left:233px;
                            }
                        }
                        .p2{
                            a{
                                font-size:18px;
                            }
                        }
                    }
                }              
            }
         }
    }
</style>