<template>
<Row> 
    <Col span="8">
    <Menu class="contenter">
        <!--<Col>-->
            <Submenu class="totalmenu" name="1">
                <ul></ul>
                <!--<Col span="7">-->
                    <template slot="title">
                        财税服务
                    </template>
                <!--</Col>-->
                <Row style="">
                <Col class="right">
                    <Menu-group title="代理记账">
                        <Menu-item name="1-1">小规模记账<Icon type="chevron-right"></Icon></Menu-item>
                        <Menu-item name="1-2">代理记账<Icon type="chevron-right"></Icon></Menu-item>
                    </Menu-group>
                    <Menu-group title="税务代办">
                        <Menu-item name="1-3">国税地税报道<Icon type="chevron-right"></Icon></Menu-item>
                        <Menu-item name="1-4">代开增值税专用发票<Icon type="chevron-right"></Icon></Menu-item>
                        <Menu-item name="1-5">税控代办及票种核定<Icon type="chevron-right"></Icon></Menu-item>
                        <Menu-item name="1-6">所得税汇算清缴<Icon type="chevron-right"></Icon></Menu-item>
                        <Menu-item name="1-7">一般纳税人资质申办<Icon type="chevron-right"></Icon></Menu-item>
                    </Menu-group>
                </Col>
                </Row>
            </Submenu>
        <!--</Col>-->
        <!--<Submenu class="totalmenu" name="2" :class="{active:active[1]}">
            <template slot="title">
                公司工商
            </template>
        </Submenu>
        <Submenu class="totalmenu" name="3" :class="{active:active[2]}">
            <template slot="title">
                知识产权
            </template>
        </Submenu>
        <Submenu class="totalmenu" name="4" :class="{active:active[3]}">
            <template slot="title">
                审计报告
            </template>
        </Submenu>-->
  </Menu>
  </Col>
</Row>
</template>
<script>
export default {
  name:"all_goods_mb",
  data(){
      return{
          active:[true,false,false,false]
      }
  }
}
</script>
<style scoped lang="less">
.contenter{
    height: 100%;
    width: 160px;
    margin: 0!important;
    &>li{
        background: pink;
        &>ul{
            position:absolute;
            top:0!important;
            right:-215px!important;
            background: red;
        }
    }
    
    .right{
        i{
            &.ivu-icon-chevron-right{
                display: block;
                float: right!important;
                line-height: 78px!important;
            }
        }
    }
}
// div{
//     &.active{
//         background: #f3f4f5;
//     }
// }
// .totalmenu{
//     position: relative;
//     &>div:first-child{
//         height: inherit;
//         line-height: 90px;
//         font-size: 24px;
//         border-bottom: 1px solid #f3f4f5;
//         text-align: center;
//     }
//     &>div:last-child{
//         position: absolute;
//         top: 0;
//         left: 120px;
//         height: inherit;
//         line-height: 77px;
//         padding-left: 20px;
//         p{
//             border-bottom: 1px solid #cbcbcb;
//         }
//         i{
//             float:right;
//             line-height: 77px;
//             margin-right: 20px;
//         }
//     }
// }
</style>


