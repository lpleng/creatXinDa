<template>
  <div class="head">
    <div class="content clear">
        <div class="clear">
            <div class="left clear">
                <span>信达</span>
                <div class="city">
                    <p class="first">北京市</p>
                    <p><a href="javascript:viod(0)">【点击切换城市】</a></p>
                </div>
            </div>
            <div class="middle">
                <p><span class="first">产品</span><span>服务商</span></p>
                <div class="search">
                    <input type="text" placeholder="搜素您需要的服务或者服务商">
                    <a href="javascript:void(0)"></a>
                </div>
                <div class="hot_service">
                    热门服务：<span>社保开户</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>公司注册</span>
                </div>
            </div>
            <div class="right">010-83421842</div>
        </div>
        <ul class="foot clear">
            <li><a href="">全部产品</a>
                <div class="all_goods">
                    <div class="tax clear">
                        <h3>财税服务</h3>
                        <p>代理记账</p>
                        <p>税务代办</p>
                        <p>审计报告</p>
                        <div class="detail_info">
                           
                        </div>
                    </div>
                    <div class="sifco clear">
                         <h3>公司工商</h3>
                         <p>公司注册</p>
                         <p>公司变更</p>
                         <div class="detail_info">
                             <div class="info">
                                 <span>公司注册></span>
                                 <a href="javascript:void(0)">分公司注册</a>
                                 <a href="javascript:void(0)">分公司注册地址</a>
                                 <a href="javascript:void(0)">合作企业注册</a>
                                 <a href="javascript:void(0)">外商独资公司注册</a>
                                 <a href="javascript:void(0)">VIE架构</a>
                                 <a href="javascript:void(0)">股份公司注册</a>
                                 <a href="javascript:void(0)">有限责任公司注册</a>
                                 <a href="javascript:void(0)">一般纳税人注册地址</a>
                             </div>
                             <div class="info">
                                 <span>公司变更></span>
                                 <a href="javascript:void(0)">公司股权变更</a>
                                 <a href="javascript:void(0)">公司名称变更</a>
                                 <a href="javascript:void(0)">公司注册地址变更</a>
                                 <a href="javascript:void(0)">内资公司注销</a>
                                 <a href="javascript:void(0)">法人、高管或注册资本变更</a>
                                 <a href="javascript:void(0)">公司经营范围变更</a>
                             </div>
                         </div>
                    </div>
                    <div class="knowledge clear">
                         <h3>知识产权</h3>
                         <p>专利申请</p>
                         <p>商标注册</p>
                         <p>版权保护</p>
                         <div class="detail_info"></div>
                    </div>
                    <div class="social_security clear">
                         <h3>社保办理</h3>
                         <p>企业社保</p>
                         <p>个人社保</p>
                         <div class="detail_info"></div>
                    </div>
                </div>
            </li>
            <li><a href="">财税服务</a></li>
            <li><a href="">公司工商</a></li>
            <li><a href="">加盟我们</a></li>
            <li><a href="">店铺</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main_head',
  data(){
    return {
          show1 : false
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
.head{
    margin-top: 24px;
    border-bottom: 1px solid #2693d4;
    .content{
        width: 1200px;
        margin: 0 auto;
        .left{
            width: 324px;
            height: 71px;
            padding: 15px 0 0 62px;
            background: url("../../images/logo.png") no-repeat 0 10px;
            float: left;
            span{
                line-height: 56px;
                font-size: 28px;
                font-weight: bolder;
                font-family: "黑体";
                margin-right: 20px;
                float: left;
            }
            .city{
                text-align: center;
                float: left;
                .first{padding: 14px 0 5px 0}
                a{
                    color: #2693d4;
                }
            }
        }
        .middle{
            float: left;
            p{
                margin-bottom: 5px;
                span{
                    padding: 0 10px;
                    cursor: pointer;
                    &.first{
                        padding-left: 0px;
                        border-right: 1px solid #2693d4;
                    }
                }
            }
            .search{
                input{
                    width: 481px;
                    height: 37px;
                    border: 2px solid #2693d4;
                    outline: none;
                    float: left;
                    padding: 0 10px;
                }
                a{
                    display: block;
                    width: 100px;
                    height: 41px;
                    background: #2693d4 url("../../images/search.jpg") no-repeat 38px;
                    float: left;
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
            float: right;
            color: #a3a3a3;
            font-weight: bolder;
            line-height: 66px;
            padding-left: 50px;
            background: url("../../images/phone_logo.jpg") no-repeat;
        }
        ul{
            li{
                float: left;
                height: 47px;
                padding: 10px 60px 0;
                line-height: 34px;
                font-size: 16px;
                text-align: center;
                position: relative;
                &>a{
                    color: #404040;
                    padding: 9px 5px;
                    font-weight: 700;
                    .active{
                        color: #2693d4;
                        border-bottom: 3px solid #2693d4;
                    }
                    &:hover{
                        .active;
                        &+div{
                            display: block;
                        }
                    }
                }
                .all_goods{
                    width: 200px;
                    height: 400px;
                    display: none;
                    color: #fff;
                    top: 48px;
                    left: 0;
                    position: absolute;
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
                        .detail_info{
                            position: absolute;
                            height: 100%;
                            width: 1000px;
                            top: 0;
                            left: 200px;
                            font-size: 12px;
                            background: rgba(220,220,220,.9);
                            div{
                                width: 100%;
                                padding: 10px 0;
                                line-height: 22px;
                                text-align: left;
                                span{padding: 0 23px;}
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
        }
    }
}
</style>
