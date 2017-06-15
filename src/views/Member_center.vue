<template>
  <div>
    <transition name="fade">
      <div class="confirm" v-show="show_confirm">
        <p>
          <span @click="close_confirm">&times;</span>
        </p>
        <div class="confirm_cont">
          您确定要删除此订单吗？
        </div>
        <div class="click">
          <div class="button" @click="delete_sure">确认</div>
          <div class="button" @click="cancle_confirm">取消</div>
        </div>
      </div>
    </transition>
    <!--会员中心右侧订单部分-->
    <div class="right_side">
      <div class="r_top">
        <p>我的订单</p>
      </div>
      <div class="r_ordernum">
        订单号：
        <input class="order_ser" type="text" placeholder="请输入订单号搜索" v-model="businessNumber" @keyup.enter="businesslist()">
        <input class="serc" type="button" value="搜索" @click="businesslist()">
      </div>
      <div class="r_time">
        创建时间
        <span>
          <Date-picker type="date" placeholder="选择日期" style="width: 200px;margin:0" v-model="stratTime" format="yyyy-MM-dd"></Date-picker>
        </span>
        <span>
          <Date-picker type="date" placeholder="选择日期" style="width: 200px" v-model="endTime" format="yyyy-MM-dd"></Date-picker>
        </span>
      </div>
      <ul>
        <li class="item1">商品名称</li>
        <li class="item2">单价</li>
        <li class="item3">数量</li>
        <li class="item4">总金额</li>
        <li class="item5">订单状态</li>
        <li class="item6">订单操作</li>
      </ul>
      <div class="r_ordertime" v-for="(businessinfo,index) in businesslist_ajax">
        <table border="1px solid #f7f7f7 " cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <td colspan="4">
                <span class="order_sp">订单:
                  <span>{{businessinfo.businessNo}}</span>
                </span>
                <span class="time_sp"> 时间:
                  <span>{{make_time(businessinfo.createTime)}}</span>
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(serviceinfo,serviceindex) in businessinfo.serviceList">
              <td class="t_d1">
                <img src="/static/images/logo.png" alt="">
                <p>{{serviceinfo.providerName}}
                  <br>{{serviceinfo.serviceName}}</p>
                <span class="t_sp">{{serviceinfo.totalPrice}}</span>
                <span class="t_sp2">{{serviceinfo.buyNum}}</span>
              </td>
              <td class="t_d2">{{serviceinfo.unitPrice}}</td>
              <td class="t_d3">{{businessinfo.status==1?"等待买家付款":"已付款"}}</td>
              <td class="t_d4" :rowspan="businessinfo.serviceList.length" v-if='serviceindex == 0'>
                <p class="t_d4_p1" @click="servicepay(index)" v-if="businessinfo.status==1" style="cursor: pointer;">付款</p>
                <p class="t_d4_p1" v-else style="color:#ccc;border-color:#ccc">已支付</p>
                <p class="t_d4_p2" @click="removelist(index)" v-if="businessinfo.status==1">删除订单</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--这一部分为微信展示的部分-->
    <div class='wechatRight right_side' v-if='showWeChat' style='position:relative;top:0;left:0;width:100%;background:yellow;margin:0;box-sizing:border-box;border:1px solid #ccc;'>
      <div class="firstFloor" style='border-bottom:1px solid #ccc;height:33px;width:100%;text-align:center;line-height:33px;font-weight:700;color:#2e221d;font-size:14px;font-family:"黑体";'>
        <Icon type="ios-arrow-left" style='float:left;font-size:25px;color:#2e221d;margin:3px 15px;'></Icon>
        <span>我的订单</span>
      </div>
      <div class="mainContent" style='margin:11px 0 0 0;'>
        <div v-for="(businessinfo,index) in businesslist_ajax" class="good" style='border-top:1px solid #ccc;border-bottom:1px solid #ccc;margin-bottom:11px;'>
          <div class="goodTop">
            <span class="goodTopSpan1">订单号：</span>
            <span class="goodTopSpan2">{{businessinfo.businessNo}}{{payStatusSet(businessinfo)}}</span>
            <span class="goodTopSpan3">{{businessinfo.status==1?"等待买家付款":"已付款"}}</span>
          </div>
          <div class="goodMain" v-for="(serviceinfo,serviceindex) in businessinfo.serviceList" style='margin-bottom:1px;overflow:hidden;'>
            <div class="goodMainLeft" style='float:left;'>
              <span>{{serviceinfo.providerName}}</span>
              <br/>
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="goodMainRight" style='float:left;'>
              <span>{{serviceinfo.serviceName}}</span>
              <br/>
              <span>下單時間：{{make_time(businessinfo.createTime)}}</span>
              <br/>
              <span>
                <span>￥{{serviceinfo.unitPrice/100.00}}</span>
                <span>×{{serviceinfo.buyNum}}</span>
              </span>
            </div>
          </div>
          <div class="goodFoot">
            <span>合計：</span>
            <span>￥{{businessinfo.totalPri}}</span>
            <span>刪除訂單</span>
            <span>付款</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import 'babel-polyfill';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex'
import DatePicker from 'iview/src/components/date-picker';
// import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue';
export default {
  name: 'Member_center',
  props: ['showWeChat'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      stratTime: "",
      endTime: "",
      businessNumber: "",
      businesslist_ajax: [],
      date: '',
      show_confirm: false,
      payStatus: 1
    }
  },
  components: {
    'Date-picker': DatePicker
  },
  created() {
    this.businesslist();
  },
  computed: {
    ...mapGetters(["show_mengban"])
  },
  methods: {
    //获取业务订单列表
    ...mapActions(['change_mengban']),
    businesslist() {
      let that = this;
      // console.log(this.change_time( this.stratTime))
      // console.log(this.stratTime)
      this.ajax.post("/xinda-api/business-order/grid", this.qs.stringify({
        businessNo: this.businessNumber,
        stratTime: this.change_time(this.stratTime),
        endTime: this.change_time(this.endTime)
      })).then(function (res) {
        that.businesslist_ajax = res.data.data
        that.businesslist_ajax.forEach(function (value, index) {
          that.ajax.post("/xinda-api/service-order/grid", that.qs.stringify({
            businessNo: value.businessNo,
            stratTime: that.stratTime,
            endTime: that.endTime
          })).then(function (res) {
            Vue.set(value, 'serviceList', res.data.data);
          })
        })
      })
    },
    removelist(index) {
      this.show_confirm = true;
      this.change_mengban(true)
      this.nowindex = index;
    },
    cancle_confirm() {
      this.show_confirm = false;
      this.change_mengban(false)
    },
    delete_sure() {//确认删除 点击确认
      this.show_confirm = false;
      this.change_mengban(false)
      let index = this.nowindex;
      let _this = this
      this.ajax.post("/xinda-api/ business-order/del", _this.qs.stringify({
        id: this.businesslist_ajax[index].id
      })).then(function (res) {
        if (res.data.status == 1) {
          _this.businesslist_ajax.splice(index, 1)
        }
      })
    },
    close_confirm() {
      this.cancle_confirm();
    },
    //付款
    servicepay(index) {
      this.$router.push({
        path: "/Order_info",
        query: {
          order_num: this.businesslist_ajax[index].businessNo
        }
      })
    },
    payStatusSet(obj) {//獲取支付狀態
      obj.payStatus = obj.status;
      let list = obj.serviceList;
      let price = 0;
      let num = list.length;
      for (let i = 0; i < num; i++) {
        price += list[i].buyNum * list[i].unitPrice;
      }
      obj.totalPri = price/100;
    }
  }
}

</script>

<style scoped lang=less>
.wechatRight {
  display: none;
}

.right_side {
  width: 934px;
  margin-left: 20px;
  margin-top: 30px;
  float: right;
  padding-bottom: 100px;
  .r_top {
    width: 934px;
    height: 30px;
    border-bottom: 1px solid #e9e9e9;
    p {
      width: 112px;
      height: 28px;
      font-size: 14px;
      line-height: 30px;
      margin-left: 40px;
      color: #2693d4;
      text-align: center;
      border-bottom: 1px solid #2693d4;
    }
  }
  .r_ordernum {
    width: 934px;
    height: 23px;
    margin-top: 20px;
    font-size: 16px;

    .order_ser {
      width: 263px;
      height: 23px;
      margin-left: 26px;
    }
    .serc {
      cursor: pointer;
      width: 70px;
      height: 25px;
      border-radius: 5px;
      background: #fff;
      color: #2693d4;
      border: 1px solid #2693d4;
      margin-left: 20px;
    }
  }
  .r_time {
    width: 934px;
    /*height: 23px;*/
    margin-top: 10px;
    font-size: 16px;
    span {
      display: inline-block;
      margin-left: 28px;
    }
  }
  ul {
    width: 934px;
    height: 35px;
    margin-top: 10px;
    background: #f7f7f7;
    margin-top: 20px;
    li {
      float: left;
      color: #000;
      font-weight: bold;
      line-height: 35px;
    }
    .item1 {
      margin-left: 40px;
    }
    .item2 {
      margin-left: 270px;
    }
    .item3 {
      margin-left: 80px;
    }
    .item4 {
      margin-left: 80px;
    }
    .item5 {
      margin-left: 80px;
    }
    .item6 {
      margin-left: 80px;
    }
  }
  /*table*/
  .r_ordertime {
    table {
      width: 936px;
      border: 1px solid #f7f7f7;
      margin-top: 20px;
    }
    thead {
      background: #f7f7f7;
      tr {
        height: 40px;
      }
    }
    .order_sp {
      margin-left: 10px;
    }


    tbody {
      .t_d1 {
        width: 550px;
        height: 70px;
        position: relative;
        img {
          float: left;
          width: 48px;
          height: 48px;
          background: #e8e8e8;
          margin-top: 10px;
          margin-left: 10px;
        }
        p {
          float: left;
          margin-left: 10px;
          margin-top: 12px;
        }
        .t_sp {
          position: absolute;
          left: 375px;
          line-height: 70px;
        }
        .t_sp2 {
          position: absolute;
          right: 65px;
          line-height: 70px;
        }
      }
      .t_d2 {
        width: 120px;
        text-align: center;
      }
      .t_d3 {
        width: 140px;
        text-align: center;
      }
      .t_d4 {
        text-align: center;
        .t_d4_p1 {
          width: 54px;
          height: 24px;
          border: 1px solid #2693d4;
          border-radius: 5px;
          margin: 0 auto;

          line-height: 24px;
        }
        .t_d4_p2 {
          color: red;
          margin-top: 10px;
          cursor: pointer;
        }
      }
    }
  }
}

.confirm {
  width: 340px;
  height: 140px;
  background: #fff;
  padding: 0px 7px 0px 7px;
  border: 2px solid #ccc;
  position: fixed;
  overflow: hidden;
  z-index: 999;
  top: 30%;
  left: 50%;
  margin-left: -200px;
  p {
    height: 30px;
    border-bottom: 1px dotted #ccc;
    span {
      display: block;
      width: 30px;
      height: 30px;
      float: right;
      font-size: 30px;
      cursor: pointer;
      text-align: center;
      color: #ccc;
      &:hover {
        color: #000;
      }
    }
  }
  .confirm_cont {
    height: 45px;
    font-size: 17px;
    background: #fff;
    text-indent: 30.5px;
    line-height: 45px;
  }
  .click {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    .button {
      width: 100px;
      height: 30px;
      background: #fff;
      text-align: center;
      line-height: 30px;
      margin: 0 auto;
      cursor: pointer;
      &:first-child {
        background: #2693d4;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
      &:last-child {
        border: 1px solid #ccc;
        &:hover {
          color: red;
        }
      }
    }
  }
}

.confirm.fade-enter {
  height: 0;
}

.confirm.fade-enter-active {
  transition: height 0.4s;
}

@media screen and (max-width:768px) {
  .right_side {
    display: none;
  }
  .wechatRight {
    display: block;
  }
}
</style>
