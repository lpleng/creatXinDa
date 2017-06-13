<template>
  <Row class="head" type="flex" justify="center">
    <Col class="content" :xs="0" :sm="24" :md="18">
        <Row>
            <Col :xs="5" :sm="5" :md="7">
                <Row class="left clear" >
                    <Col class="logo_click" @click="$router.push({name:'Home'})" span="10"></Col>
                    <Row>
                        <Col span="12"><span>信达</span></Col>
                        <Col class="city" :xs="24" :sm="24" :md="12">
                            <p class="first">北京市</p>
                            <p><a href="javascript:void(0)">【点击切换】</a></p>
                        </Col>
                    </Row>
                </Row>
            </Col>
            <Col :sm="12" :md="12">
                <div class="middle">
                    <p><span class="first" @click="search_box(1)" :class="{active:show_search_box==1}">产品</span><span @click="search_box(2)" class="last" :class="{active:show_search_box==2}">服务商</span></p>
                    <div class="search" v-if="show_search_box==1">
                        <input type="text" placeholder="搜索您需要的产品" v-model="value1" @keyup.13="goSearch(1)">
                        <a href="javascript:void(0)" @click="goSearch(1)"><Icon type="search"></Icon></a>
                    </div>
                    <div class="search" v-else>
                        <input type="text" placeholder="搜索您需要的服务商" v-model="value2"  @keyup.13="goSearch(2)">
                        <a href="javascript:void(0)" @click="goSearch(2)"><Icon type="search"></Icon></a>
                    </div>
                    <div class="hot_service">
                        热门服务：<span>社保开户</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>公司注册</span><span>{{body_width}}</span>
                    </div>
                </div>
            </Col>
            <Col  :sm='{span:"5",push:1}' :md='{span:"5",push:0}'><div class="right"><Icon type="ios-telephone-outline"></Icon>010-83421842</div></Col>
        </Row>
        <Row type="flex" justify="space-between">
            <Col v-for="(value,index) in head_nav" span="4" :key="index" class="li">
                <router-link :to="value.link" active-class="active" exact>
                    {{value.text}}
                </router-link>
                <div class="all_goods" v-if="index==0">
                    <div class="tax clear">
                        <h3>财税服务</h3>
                        <p>代理记账</p>
                        <p>税务代办</p>
                        <p>审计报告</p>
                        <div class="detail_info">
                            <span>代理记账&nbsp;></span>
                            <a href="javascript:void(0)">小规模记账</a>
                            <a href="javascript:void(0)">一般纳税人记账</a>
                            <br>
                            <div></div>
                            <span>税务代办&nbsp;></span>
                            <a href="javascript:void(0)">国税地税报道</a>
                            <a href="javascript:void(0)">代开增值税专用发票</a>
                            <a href="javascript:void(0)">税控代办及票种核定</a>
                            <a href="javascript:void(0)">所得税汇算清缴</a>
                            <a href="javascript:void(0)">一般纳税人资质申办</a>
                            <br>
                            <div></div>
                            <span>审计报告&nbsp;></span>
                            <a href="javascript:void(0)">验资报告</a>
                            <a href="javascript:void(0)">财务审计报告</a>
                            <a href="javascript:void(0)">税审报告</a>
                            <a href="javascript:void(0)">企业注销清算报告</a>
                        </div>
                    </div>
                    <div class="sifco clear">
                        <h3>公司工商</h3>
                        <p>公司注册</p>
                        <p>公司变更</p>
                        <div class="detail_info">
                            <div></div>
                        <span>公司注册&nbsp;></span>
                        <a href="javascript:void(0)">分公司注册</a>
                        <a href="javascript:void(0)">分公司注册地址</a>
                        <a href="javascript:void(0)">合作企业注册</a>
                        <a href="javascript:void(0)">外商独资公司注册</a>
                        <a href="javascript:void(0)">VIE架构</a>
                        <a href="javascript:void(0)">股份公司注册</a>
                        <a href="javascript:void(0)">有限责任公司注册</a>
                        <a href="javascript:void(0)">一般纳税人注册地址</a>
                        <div></div>
                        <span>公司变更&nbsp;></span>
                        <a href="javascript:void(0)">公司股权变更</a>
                        <a href="javascript:void(0)">公司名称变更</a>
                        <a href="javascript:void(0)">公司注册地址变更</a>
                        <a href="javascript:void(0)">内资公司注销</a>
                        <a href="javascript:void(0)">法人、高管或注册资本变更</a>
                        <a href="javascript:void(0)">公司经营范围变更</a>
                        </div>
                    </div>
                    <div class="knowledge clear">
                        <h3>知识产权</h3>
                        <p>专利申请</p>
                        <p>商标注册</p>
                        <p>版权保护</p>
                        <div class="detail_info">
                            <span>专利申请&nbsp;></span>
                            <a href="javascript:void(0)">审查意见答复</a>
                            <a href="javascript:void(0)">外观专利减缓（共同申请）</a>
                            <a href="javascript:void(0)">发明不减缓</a>
                            <a href="javascript:void(0)">发明减缓（个人）</a>
                            <a href="javascript:void(0)">实用新型专利减缓</a>
                            <a href="javascript:void(0)">专利申请复审</a>
                            <br>
                            <span></span>
                            <a href="javascript:void(0)">外观设计专利（不减缓）</a>
                            <a href="javascript:void(0)">办理实用新型检索报告</a>
                            <a href="javascript:void(0)">实用新型专利</a>
                            <a href="javascript:void(0)">外观专利减缓</a>
                            <a href="javascript:void(0)">实用新型专科减缓（共同申请）</a>
                            <br>
                            <span>商标注册&nbsp;></span>
                            <a href="javascript:void(0)">LOGO设计+商标注册</a>
                            <a href="javascript:void(0)">商标变更</a>
                            <a href="javascript:void(0)">商标续展</a>
                            <a href="javascript:void(0)">商标驳回复查</a>
                            <a href="javascript:void(0)">商标快速注册</a>
                            <a href="javascript:void(0)">著名商标认定</a>
                            <br>
                            <span>版权保护&nbsp;></span>
                            <a href="javascript:void(0)">电视剧作品登记</a>
                            <a href="javascript:void(0)">美术著作权</a>
                            <a href="javascript:void(0)">软件注册权</a>
                            <a href="javascript:void(0)">音乐作品</a>
                        </div>
                    </div>
                    <div class="social_security clear">
                        <h3>社保办理</h3>
                        <p>企业社保</p>
                        <p>个人社保</p>
                        <div class="detail_info">
                            <div></div>
                            <span>企业社保&nbsp;></span>
                            <a href="javascript:void(0)">社保/公积金账户注销</a>
                            <a href="javascript:void(0)">社保开户</a>
                            <a href="javascript:void(0)">社保公积金代缴</a>
                            <a href="javascript:void(0)">公积金开户</a>
                            <div></div>
                            <span>个人社保&nbsp;></span>
                            <a href="javascript:void(0)">个人社保代理</a>
                            <a href="javascript:void(0)">个人代理社保和公积金</a>
                            <a href="javascript:void(0)">新参保（个人）</a>
                            <a href="javascript:void(0)">个人代理公积金</a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Col>
  </Row>
</template>

<script>
var wWidth = 0;
window.onresize=function () {
    wWidth = window.innerWidth
}
export default {
  name: 'main_head',
  props:['wResize'],
  data(){
    return {
          all_goods_show:false,
          show_search_box:1,
          value1:'',
          value2:'',
          head_nav : [
              {text:"全部产品",link:"/"},
              {text:"财税服务",link:"/list_page"},
              {text:"公司工商",link:"/list_page_1"},
              {text:"加盟我们",link:"/join_us"},
              {text:"店铺",link:"/store_list"}
        ],
        head_nav_active:-1,
        body_width:0
    }
  },
  methods:{
      search_box(index){
          this.show_search_box = index;
      },
      goSearch(index){
          if(index == 1){
            this.$router.push({path:"/list_page",query:{search:this.value1}})
            location.reload();
          }else{
            this.$router.push({path:"/store_list"})
          }
      }
  }

}
</script>

<style scoped lang="less">
.clear:after{
    content: "";
    display: block;
    clear: both;
}
@media screen and (max-width:768px){
    .head{
        padding-top: 0;
    }
}
@media screen and (min-width:768px){
    .head{
        padding-top: 59px;
    }
    .city{
        .first{
            text-indent: 10px;
        }
    }
}
@media screen and (min-width:992px){
    .left{
        .city{
            text-align: center;
        }
        .first{
            text-indent: 0;
        }
    }
}
.head{
    border-bottom: 1px solid #2693d4;
    .content{
        .left{
            height: 71px;
            padding: 15px 0 0 0;
            background: url("/static/images/logo.png") no-repeat 5px 10px;
            position: relative;
            z-index: 0;
            .logo_click{
                height: 70px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
                cursor: pointer;
            }
            span{
                display: block;
                width: 122px;
                text-indent: 62px;
                line-height: 56px;
                font-size: 28px;
                font-weight: bolder;
                font-family: "黑体";
                margin-right: 20px;
            }
            .city{
                .first{
                    padding: 5px 0 5px 0;
                }
                a{
                    color: #2693d4;
                }
            }
        }
        .middle{
            p{
                margin-bottom: 5px;
                span{
                    padding: 0 10px;
                    cursor: pointer;
                    &:hover{
                        color: #2693d4;
                    }
                    &.first{
                        padding-left: 0px;
                        border-right: 1px solid #2693d4;
                    }
                    &.active{
                        color: #2693d4;
                    }
                }
            }
            .search{
                input{
                    width: 85%;
                    height: 37px;
                    border: 2px solid #2693d4;
                    outline: none;
                    float: left;
                    padding: 0 10px;
                    letter-spacing: 1px;
                }
                a{
                    display: block;
                    width: 15%;
                    background: #2693d4;
                    color: #fff;
                    font-size: 24px;
                    line-height: 37px;
                    height: 37px;
                    float: left;
                    text-align: center;
                }
            }
            .hot_service{
                clear: both;
                color: #c7c7c7;
                font-size: 12px;
                padding: 7px 0 0 13px;
                span{
                    cursor: pointer;
                }
            }
        }
        .right{
            color: #a3a3a3;
            font-size: 16px;
            font-weight: bolder;
            line-height: 66px;
            text-align: right;
            padding-top: 10px;
            i{
                font-size: 48px;
                line-height: 56px;
                vertical-align: middle;
                padding-right: 5px;
                color: #2693d4;
            }
        }
        .li{
            height: 47px;
            padding-top: 10px;
            /*margin: 0 60px;*/
            line-height: 34px;
            font-size: 16px;
            text-align: center;
            position: relative;
            z-index: 1;
            .active{
                color: #2693d4;
                border-bottom: 4px solid #2693d4;
            }
            &>a{
                color: #404040;
                padding: 9px 5px;
                font-weight: 700;
                font-family: "黑体";
            }
            &:hover{
                &>a{
                    .active;
                }
                &>div{
                        display: block;
                }
            }
        }
            .all_goods{
            width: 100%;
            height: 400px;
            display: none;
            color: #fff;
            top: 100%;
            left: 0;
            position: absolute;
            z-index: 998;
            background: rgba(20,37,57,.8);
            &>div{
                position: relative;
                padding: 10px 10px 20px 39px;
                &:hover{background: #2693d4;}
                h3{
                    font-size: 15px;
                    line-height: 35px;
                    padding: 0 10px;
                    text-align: left;
                }
                p{
                    width: 50%;
                    line-height: 24px;
                    float: left;
                    font-size: 14px;
                }
                &:hover{
                    &>div{display: block;}
                }
                .detail_info{
                    display: none;
                    height: 100%;
                    width: 1000px;
                    position: absolute;
                    top: 0;
                    left: 100%;
                    font-size: 12px;
                    background: rgba(220,220,220,.9);
                    padding: 5px 0;
                    line-height: 25px;
                    text-align: left;
                    div{height: 10px;width: 100%}
                    span{
                        padding: 0 23px;
                        display: inline-block;
                        width: 104px;
                        height: 25px;
                    }
                    a{
                        color: #fff;
                        padding: 2px 13px;
                        border-left: 1px solid #fff;
                    }
                }
            }
        }
    }
}
</style>

