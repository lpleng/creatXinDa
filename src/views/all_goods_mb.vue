<template>
    <Row class="contenter">
        <Col span="8" class="left">
            <div v-for="(value,index) in menu" :class="{activeClass:active[index]}" @click="beActive(index)" class="left_cont">
                <div class="left_item">{{value}}</div>
            </div>
        </Col>
        <Col span="16" class="right">
            <transition name="slide" v-for="(value,index) in fistFloor" :key="index">
            <div v-if="active[0]" >
                <p>代理记账</p>
                <a href="javascript:" class="disable">小规模记账<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" @click="$router.push({path:'/list_page',query:{goodsCome:1}})">代理记账<Icon type="chevron-right"></Icon></a>
                <p>税务代办</p>
                <a href="javascript:" class="disable">国税地税报道<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" class="disable">代开增值税专用发票<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" class="disable">税控代办及票种核定<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" class="disable">所得税汇算清缴<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" class="disable">一般纳税人资质申办<Icon type="chevron-right"></Icon></a>
                <p>审计报告</p>
                <a href="javascript:" class="disable">验资报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" @click="$router.push({path:'/list_page',query:{goodsCome:3}})">财务审计报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" @click="$router.push({path:'/list_page',query:{goodsCome:3}})">税审报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:" class="disable">企业注销清算报告<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[1]">
                <p>公司注册</p>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:4}})">分公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">分公司注册地址<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">合作企业注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">外商独资公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">VIE架构<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">股份公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">有限责任公司注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">一般纳税人注册地址<Icon type="chevron-right"></Icon></a>
                <p id="company_change">公司变更</p>
                <a href="javascript:void(0)" class="disable">公司股权变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">公司名称变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">公司注册地址变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">内资公司注销<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">法人、高管或注册资本变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">公司经营范围变更<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[2]">
                <p>专利申请</p>
                <a href="javascript:void(0)" class="disable">审查意见答复<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">外观专利减缓（共同申请）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">发明不减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">发明减缓（个人）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">实用新型专利减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">专利申请复审<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">外观设计专利（不减缓）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">办理实用新型检索报告<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:10}})">实用新型专利<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">外观专利减缓<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">实用新型专科减缓（共同申请）<Icon type="chevron-right"></Icon></a>
                <p>商标注册</p>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:8}})">
                    LOGO设计+商标注册<Icon type="chevron-right"></Icon>
                </a>
                <a href="javascript:void(0)" class="disable">商标变更<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">商标续展<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">商标驳回复查<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">商标快速注册<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">著名商标认定<Icon type="chevron-right"></Icon></a>
                <p>版权保护</p>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:9}})">
                    电视剧作品登记<Icon type="chevron-right"></Icon>
                </a>
                <a href="javascript:void(0)" class="disable">美术著作权<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">软件注册权<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">音乐作品<Icon type="chevron-right"></Icon></a>
            </div>
            </transition>
            <transition name="slide">
            <div v-if="active[3]">
                <p>企业社保</p>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:6}})">社保/公积金账户注销<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">社保开户<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">社保公积金代缴<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">公积金开户<Icon type="chevron-right"></Icon></a>
                <p>个人社保</p>
                <a href="javascript:void(0)" @click="$router.push({path:'/list_page',query:{goodsCome:7}})">个人社保代理<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">个人代理社保和公积金<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">新参保（个人）<Icon type="chevron-right"></Icon></a>
                <a href="javascript:void(0)" class="disable">个人代理公积金<Icon type="chevron-right"></Icon></a>
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
            menu:["财税服务","公司工商","知识产权","审计报告"],
            fistFloor: []
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
            // this.$route.query.goBefore=index
        }
    },
    created(){
        let gobe = this.$route.query.goBefore
        let value = gobe?gobe:0;
        var menuArray = [
            {index:0},
            {index:1},
            {index:1,locationElement:'#company_change'},
            {index:3},
            {index:3},
            {index:2},
            {index:0}
        ]
        var location = menuArray[value]
        this.beActive(location.index)
        if(location.locationElement){
            setTimeout(function() {
                var anchor = document.querySelector(location.locationElement)
                var right =  document.querySelector('.right')
                right.scrollTop = anchor.offsetTop
            }, 0);
        }
        let _this = this;
        this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list",this.qs.stringify({
            id: "1eff122d06604fc1aadf9e7acefba21a"
        })).then(function(res){
            _this.fistFloor = res.data.data;
            console.log(res.data.data[1])
        })
    }
}
</script>
<style scoped lang="less">
.contenter{
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
    >div{
        cursor: pointer;
    }
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
            transition: opacity 0.6s;
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
        &.disable{
            color: #ddd;
        }
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


