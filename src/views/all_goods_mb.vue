<template>
    <Row class="contenter">
        <Col span="8" class="left">
            <div v-for="(value,index) in menu" :class="{activeClass:active[index]}" @click="beActive(index)" class="left_cont">
                <div class="left_item">{{value}}</div>
            </div>
        </Col>
        <Col span="16" class="right">
            <transition name="slide">
            <div v-if="active[0]">
                <p>代理记账</p>
                <a href="javascript:">小规模记账<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">代理记账<Icon type="chevron-right"></Icon></a>
                <p>税务代办</p>
                <a href="javascript:">国税地税报道<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">代开增值税专用发票<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">税控代办及票种核定<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">所得税汇算清缴<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">一般纳税人资质申办<Icon type="chevron-right"></Icon></a>
                <p>审计报告</p>
                <a href="javascript:">验资报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">财务审计报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">税审报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:">企业注销清算报告<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[1]">
                <p>公司注册</p>
                <a href="javascript:void(0)">分公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">分公司注册地址<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">合作企业注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">外商独资公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">VIE架构<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">股份公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">有限责任公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">一般纳税人注册地址<Icon type="chevron-right"></Icon></a>
                <p id="company_change">公司变更</p>
                <a href="javascript:void(0)">公司股权变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">公司名称变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">公司注册地址变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">内资公司注销<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">法人、高管或注册资本变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">公司经营范围变更<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[2]">
                <p>专利申请</p>
                <a href="javascript:void(0)">审查意见答复<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">外观专利减缓（共同申请）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">发明不减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">发明减缓（个人）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">实用新型专利减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">专利申请复审<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">外观设计专利（不减缓）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">办理实用新型检索报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">实用新型专利<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">外观专利减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">实用新型专科减缓（共同申请）<Icon type="chevron-right"></Icon></a>
                <p>商标注册</p>
                <a href="javascript:void(0)">LOGO设计+商标注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">商标变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">商标续展<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">商标驳回复查<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">商标快速注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">著名商标认定<Icon type="chevron-right"></Icon></a>
                <p>版权保护</p>
                <a href="javascript:void(0)">电视剧作品登记<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">美术著作权<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">软件注册权<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">音乐作品<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[3]">
                <p>企业社保</p>
                <a href="javascript:void(0)">社保/公积金账户注销<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">社保开户<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">社保公积金代缴<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">公积金开户<Icon type="chevron-right"></Icon></a>
                <p>个人社保</p>
                <a href="javascript:void(0)">个人社保代理<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">个人代理社保和公积金<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">新参保（个人）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)">个人代理公积金<Icon type="chevron-right"></Icon></a>
            </div> 
            </transition>
        </Col>
    </Row>
</template>
<script>
export default {
    name:"all_goods_mb",
    data(){
        return{
            active:[true,false,false,false],
            menu:["财税服务","公司工商","知识产权","审计报告"]
        }
    },
    methods:{
        beActive(index){
            let _this = this;
            this.active.forEach(function(value,item){
                if(item == index) {
                    _this.$set(_this.active,item,true)
                }else{
                    _this.$set(_this.active,item,false)
                }
            })
            this.$router.push({query:{goBefore:index}})
        }
    },
    created(){
        let value = this.$route.query.goBefore;
        console.log(value)
        if(value==undefined || value == 0 ) {
            this.beActive(0)
        }else if(value==1 || value == 2){
            this.beActive(1)
        }else if(value==3 || value == 4){
            this.beActive(3)
        }else if (value == 5){
            this.beActive(2)
        }else{
            this.beActive(0)
        }
    }
}
</script>
<style scoped lang="less">
.contenter{
    margin-bottom: 53px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.left{
    position: fixed;
    top: 0;
    left: 0;
    line-height: 94px;
    font-size: 24px;
    text-align: center;
    background: #fff;
    height: 100%;
    .left_cont{
        padding: 0 5px;
        .left_item{
            border-bottom: 1px solid #f3f4f5;
        }
        &.activeClass{
            background: #f3f4f5;
        }
    }
}
.right{
    background: #f3f4f5;
    position: fixed;
    right:0;
    top: 0;
    color: #686565;
    padding-left: 20px; 
    padding-bottom: 53px; 
    height:100%;
    overflow-y: scroll;
    &>div{
        width:100%;
        // height:100%;
        
        &.slide-enter,&.slide-leave-active{
            opacity: 0;
        }
        &.slide-enter-active{
            transition: opacity 1s;
        }
    }
    p{
        font-size: 26px;
        border-bottom: 1px solid #cbcbcb;
        text-indent: 5px;
        line-height: 78px;
    }
    a{
        display: block;
        font-size: 18px;
        color: #686565;
        padding: 20px 0;
        margin-left: 20px;
        border-bottom: 1px solid #cbcbcb;
        position: relative;
        i{
            position: absolute;
            top: 50%;
            right: 0;
            width: 9px;
            height: 18px;
            margin: -9px 10px 0 0; 
        }
    }
}
</style>


