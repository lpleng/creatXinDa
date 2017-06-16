<template> 
    <Row type="flex" justify="center" align="middle">
        <Col span="24" class="headerName"><Icon type="chevron-left" class="payLeft"></Icon>我的订单</Col>
        <div class="payInfor">
            <div class="topName">
                <Row>
                    <Col class="payNum" span="11" offset="1">订单号：234567890</Col>
                    <Col class="waitPay" span="10"  push="2">等待买家付款</Col>
                </Row>
            </div>
            <div class="middleName">
                <div class="leftImg"></div>
                <div class="rightWord">

                </div>
            </div>
            <div class="bottomName">
                <Row>
                    <Col class="sum" span="12" push="2">合计：<span>:$1400</span></Col>
                    <Col class="delete" span="6">删除订单</Col>
                    <Col class="pay" span="6" pull="1"  style="height:50px"><div class="blue">付款</div></Col>
                </Row>
            </div>
        </div>
    </Row>
</template>

<script>

 
</script>

<style lang="less" scoped>
    .headerName{
        height:77px;
        background: #e5e5e5;
        font-size:20px;
        text-align: center;
        line-height: 77px;
        position: relative;
        .payLeft{
            position: absolute;
            top:50px;
            left:10px;
            margin-top:-19px;
        }
    }
     .payInfor{
            width:100%; 
            .topName{
                font-size:16px;
                line-height: 68px;
                background: pink;
            }
            .middleName{
                background: #f8f8f8;
                height:260px;
               .leftImg{
                   float:left;
                   width:1.6rem;
                   height:1.6rem;
                   border:1px solid #e3e3e3;
                   margin:50px;
               }
               .rightWord{
                   float:right;
                   width:166px;
                   height:166px;
                   border:1px solid #e3e3e3;
               }
            }
            .bottomName{
                height:68px;
                font-size:16px;
                line-height: 68px;
                .delete{
                    color:red;
                }
                .pay{
                    position:relative;
                    .blue{
                        background: #2693d4;
                        text-align:center;
                        border-radius: 10%;
                        
                    }
                   
                }
            }

        }
</style>   