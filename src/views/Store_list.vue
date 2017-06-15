<template>
  <div class="div7">
    <Row type="flex" justify="center">
      <Col :xs="0" :sm="20" :md="20">
      <div class="fir_list">首页/店铺列表</div>
      <div class="server_style">
        <div class="s_s_top">
          <div class="left">服务区域</div>
          <div class="right">
            <threeLinkage hs='storelistStyle' style='border:none;float:left;'></threeLinkage>
          </div>
        </div>
        <div class="s_s_bottom">
          <div class="left">产品类型</div>
          <div class="right">
            <a id="all">所有</a>
            <a>专利申请</a>
            <a>版权保护</a>
            <a>商标注册</a>
            <a>代理记账</a>
            <a>公司注册</a>
            <a>企业社保</a>
            <a>公司变更</a>
            <a>税务代办</a>
            <a>个人社保</a>
            <a>审计报告</a>
          </div>
  
        </div>
      </div>
      <div class="selector">
        <div class="s1">综合排序
          <p></p>
        </div>
        <div class="s2">评价↑↑
          <p></p>
        </div>
        <div class="s2">接单数↓↓
          <p></p>
        </div>
      </div>
      <div class="content7">
        <div class="ads" v-for="(ad_two,index) in Store_list_ajax">
          <div class="ads1">
            <img :src="img_prove+ad_two.providerImg" alt="">
            <p>金牌服务商</p>
          </div>
          <div class="ads2">
            <div class="list1">{{ad_two.providerName}}</div>
            <div class="list2">信誉：★★☆</div>
            <div class="list2">{{ad_two.regionName}}</div>
            <div class="list2">累计服务客户次数：
              <span>{{ad_two.orderNum}}</span> | 好评率： 100%</div>
            <div class="list5">
              <div class="blue" v-for="value in productTypes[index]">{{value}}</div>
            </div>
            <a class="list6" @click="goStore(ad_two.id)">进入店铺</a>
          </div>
        </div>
      </div>
      <div class="page">
        <div href="">上一页</div>
        <div class="num">1</div>
        <div href="">下一页</div>
      </div>
      </Col>
      <!--------------------------这是微信端的样式-->
      <Col :xs="24" :sm="0" :md="0">
      <div class="mobile_head">
        <a href="javascript:void(0)" @click="new_touch=true" :class="{new_list:new_touch}">默认排序</a>
        <a href="javascript:void(0)" @click="new_touchh()" :class="{new_list:!new_touch}">销量</a>
      </div>
      <div class="new_bussniess_body" v-for="(ad_two,index) in Store_list_ajax">
        <div class="new_bussniess_body_left">
          <img :src="img_prove+ad_two.providerImg" alt="">
        </div>
        <div class="new_bussniess_body_right">
          <h1 @click="goStore(ad_two.id)" class="new_bussniess_body_right_list1">{{ad_two.providerName}}</h1>
          <p class="new_bussniess_body_right_list2">{{ad_two.regionName}}</p>
          <h2 class="new_bussniess_body_right_list3">累计服务客户次数：
            <span>{{ad_two.orderNum}}</span><br>
            好评率： <span>100%</span>　</h2>
        </div>
      </div>
      </Col>
    </Row>
    <!----------------/*这是微信端的样式结束部分*/-->
  </div>
</template>

<script>
import threeLinkage from './ProvinceCityAreaLinkage.vue'
export default {
  name: 'Store_list',
  data() {
    return {
      new_touch: true,
      Store_list_ajax: [],
      img_prove: "http://115.182.107.203:8088/xinda/pic",
      productTypes: [],
      sortFlag: false
    }
  },
  components: {
    threeLinkage
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let _this = this;
      this.ajax.post("/xinda-api/provider/grid", {
        start: 0,
        limit: 6,
        productTypeCode: 10,
        regionId: 110102,
        sort: 1,
      }).then(function (res) {
        _this.Store_list_ajax = res.data.data;//列表页数据
        _this.productTypes = res.data.data.map(function (value) {
          return value.productTypes.split(",")
        });
        // console.log(_this.productTypes)
        // console.log(res.data.data)
      })
    },
    goStore(sid) {
      this.$router.push({ path: '/Shopfrontpage', query: { id: sid } });
    },
    new_touchh() {
      this.new_touch = false;
      console.log('a')
      if (this.sortFlag) {
        this.Store_list_ajax.sort(function (a, b) {
          return a.orderNum - b.orderNum;
        });
        this.sortFlag = !this.sortFlag;
      } else {
        this.Store_list_ajax.sort(function (b, a) {
          return a.orderNum - b.orderNum;
        });
        this.sortFlag = !this.sortFlag;
      }
    }
  }
}
</script>
<style scoped lang="less">
div {
  box-sizing: content-box;
}


/*这是微信端顶部的样式*/

.mobile_head {
  width: 60%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  margin-left: 23%;
  .new_list {
    background: #2693d4;
    color: #fff;
  }
  a {
    display: inline-block;
    width: 50%;
    height: 36px;
    float: left;
    color: #000;
    &:first-child {
      border-radius: 10px 0 0 10px;
      border: 1px solid #2693d4;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
      border: 1px solid #2693d4;
      border-left: none;
    }
  }
}


/*这是微信端的顶部样式结束部分*/

// 这是微信端主题部分
.new_bussniess_body {
  margin-left: 30px;
  border-bottom: 1px solid #cfcfcf;
  height: 210px;
  margin-top: 40px;
}

.new_bussniess_body_left {
  width: 17%;
  border: 1px solid #cfcfcf;
  float: left;
  text-align: center;
  padding: 10% 4%;
  img {
    width: 60%;
    height: 40%;
  }
}

.new_bussniess_body_right {
  width: 60%;
  float: left;
  height: 166px;
  margin-left: 20px;
  .new_bussniess_body_right_list1, {
    width: 100%;
    height: 20%;
    overflow: hidden;
    font-weight: 100;
    cursor: pointer;
    &:hover{
      color: red;
    }
  }
  .new_bussniess_body_right_list3 {
     height: 40%;
     line-height: 30px;
  }
  .new_bussniess_body_right_list2 {
     height: 20%;
     line-height: 30px;
  }
  span {
    color: red;
  }
}

@media screen and (max-width:450px) {
    .new_bussniess_body_right {
      h1 {
        font-size:20px;
      }
      h2 {
        font-size:17px;
      }
    }
}

// 这是微信端主体部分的结束
.div7 {
  margin: 27px auto;
  .fir_list {
    color: #696969;
    font-size: 13px;
    line-height: 39px;
  }
  .server_style {
    height: 86px;
    width: 100%;
    border: 1px solid #bcbcbc;
    background: #f2f2f2;

    div {
      height: 50%;
      border-bottom: 1px solid #bcbcbc;
      font-size: 13px;
      font-weight: 7;
      text-align: center;
      .left {
        width: 10%;
        height: 100%;
        border-right: 1px solid #bcbcbc;
        float: left;
        line-height: 43px;
      }
      .right {
        width: 80%;
        height: 42px;
        float: left;
        line-height: 43px;
        select {
          width: 120px;
          height: 33px;
        }
        a {
          float: left;
          width: 9.09%;
          cursor: pointer;
          overflow: hidden;
          height: 40px;
        }
        a:hover {
          color: #fff;
          border-radius: 10px;
          background: #169bd5;
        }
        #all {
          color: #fff;
          border-radius: 10px;
          background: #169bd5;
        }
      }
    }
  }
  .selector {
    height: 43px;
    width: 100%;
    border: 1px solid #bcbcbc;
    background: #f2f2f2;
    margin-top: 16px;
    div {
      float: left;
      width: 99px;
      border-right: 1px solid #bcbcbc;
      height: 42px;
      line-height: 42px;
      text-align: center;
    }
    .s1,
    .s2,
    .s3 {
      cursor: pointer;
    }
    .s1 {
      background: #4eb5ba;
      border-radius: 5px;
      position: relative;
      color: #fff;
      p {
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top: 6px solid #4eb5ba;
        position: absolute;
        left: 50%;
        top: 42px;
        margin-left: -10px;
      }
    }
    .s2:hover {
      background: #4eb5ba;
      border-radius: 5px;
      position: relative;
      color: #fff;
      p {
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top: 6px solid #4eb5ba;
        position: absolute;
        left: 50%;
        top: 42px;
        margin-left: -10px;
      }
    }
  }
  .content7 {
    width: 100%;
    height: 290px;
    border: 1px solid #bcbcbc;
    .ads {
      width: 45%;
      height: 250px;
      border: 1px solid #f2f2f2;
      margin: 2% 2%;
      ;
      float: left;
      text-align: center;
      .ads1 {
        width: 25%;
        height: 202px;
        float: left;
        margin: 2% 0 2% 2%;
        img {
          margin: 60px 30px;
          width: 40%;
          height: 40%;
        }
        p {
          width: 90px;
          height: 30px;
          margin: 0 auto;
        }
      }
      .ads2 {
        float: left;
        width: 70%;
        height: 202px;
        margin: 25px 0;
        .list1 {
          font-size: 18px;
        }
        .list2 {
          font-size: 13px;
          color: #999999;
          line-height: 20px;
        }
        .list4 {
          font-size: 14px;
          color: #999999;
        }
        .list5 {
          width: 100%;
          height: 50px;
          padding: 10px;
          overflow: hidden;
          .blue {
            width: 71px;
            height: 22px;
            background: #2693d4;
            border-radius: 4px;
            float: left;
            text-align: center;
            line-height: 22px;
            color: #fff;
            margin: 4px;
            font-size: 13px;
          }
        }
        .list6 {
          width: 117px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          background: #ff591b;
          border-radius: 5px;
          cursor: pointer;
          color: #fff;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
  .page {
    width: 250px;
    height: 50px;
    margin: 20px auto 146px;
    div {
      width: 83px;
      height: 43px;
      margin: 4px;
      border: 1px solid #bcbcbc;
      float: left;
      line-height: 43px;
      text-align: center;
      color: #bcbcbc;
      cursor: pointer;
    }
    .num {
      width: 47px;
    }
  }
}
</style>
