<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .ivu-menu-item-active{
        color: red!important;
    }
    .ivu-radio-checked{
        color:red;
    }
    .menu1{
        background: burlywood;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name=1 class="menu1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            内容区域
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
</br></hr>
<Menu mode="horizontal" theme="light" active-name=1>
    <Menu-item name=1>选项 一</Menu-item>  
    <Menu-item name=2>选项 二</Menu-item>  
    <Menu-item name=3>选项 三</Menu-item>  
    <Submenu name="4" trigger="click">
        <template slot="title">
            父选项卡
        </template>
        <Menu-group title="子选项1"> 
            <Menu-item name="4-1">选项 一</Menu-item>  
            <Menu-item name="4-2">选项 二</Menu-item>  
            <Menu-item name="4-3">选项 三</Menu-item>  
        </Menu-group>
        <Menu-group title="子选项2">
            <Menu-item name="4-4">选项 一</Menu-item>  
            <Menu-item name="4-5">选项 二</Menu-item>  
            <Menu-item name="4-6">选项 三</Menu-item>  
        </Menu-group>
    </Submenu>
</Menu>

<Radio-group v-model="da">
    <Radio label="单选 1"></Radio>
    <Radio label="单选 2"></Radio>
    <Radio label="单选 3"></Radio>
</Radio-group>


    </div>
</template>
<script>
    export default {
        data(){
            return {
                da:123
            }
        }
    }
</script>