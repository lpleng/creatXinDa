<template>
<div>
<Row :gutter="-40" calss="row1" type="flex">
  <Col span="6" order="4"><div>4 | Col-1</div></Col>
  <Col span="6" order="3"><div>3 | Col-2</div></Col>
  <Col span="6" order="2"><div>2 | Col-3</div></Col>
  <Col span="6" order="1"><div>1 | Col-4</div></Col>
</Row>
<br>
<Row >
  <Col span="2"><div style="background:red">1 | Col-1</div></Col>
  <Col span="8" push="2"><div>2 | Col-2</div></Col>
  <Col span="8"><div style="background:blue">3 | Col-4</div></Col>
</Row>
<br>
<Row>
  <Col span="8" offset="3"><div style="background:red">1 | Col-1</div></Col>
  <Col span="8"><div>2 | Col-2</div></Col>
  <Col span="8" offset="-2"><div style="background:blue">3 | Col-4</div></Col>
</Row>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg" :gutter="-16">
        <Col span="4">col-1</Col>
        <Col span="4">col-2</Col>
        <Col span="4">col-3</Col>
        <Col span="4">col-4</Col>
    </Row>
    <br>
    <br>
    <br>
    
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
        <Col span="4">col-1</Col>
        <Col span="4">col-2</Col>
        <Col span="4">col-3</Col>
        <Col span="4">col-4</Col>
    </Row>
    <br>
    <br>
    
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
        <Col span="4">col-1</Col>
        <Col span="4">col-2</Col>
        <Col span="4">col-3</Col>
        <Col span="4">col-4</Col>
    </Row>
    <br>
    <br>
    <br>
    
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="4">col-1</Col>
        <Col span="4">col-2</Col>
        <Col span="4">col-3</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-5</Col>
    </Row>
    <br>
    <br>
    <br>
    
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="4">col-1</Col>
        <Col span="4">col-2</Col>
        <Col span="4">col-3</Col>
        <Col span="4">col-4</Col>
    </Row>
    <br>
    <br>
    <br>
    <p>顶部对齐</p>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <br>
    <br>
    <br>
    <p>底部对齐</p>
    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <br>
    <br>
    <br>
    <p>居中对齐</p>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <br>
    <br>
    <br>
    <h1>响应式</h1>
    <Row type="flex" justify="center" align="middle" class="code-row-bg" style="height: 300px;">
        <Col :xs="1" :sm="2" :md="4" :lg="6"><p style="height: 80px">col-1</p></Col>
        <Col :xs="1" :sm="2" :md="4" :lg="6"><p style="height: 80px">col-2</p></Col>
        <Col :xs="1" :sm="2" :md="4" :lg="6"><p style="height: 80px">col-3</p></Col>
        <Col :xs="{span:1}" :md="{span:4,class:'qiqi'}" :lg="{class:'mycol',span:6}">
            <p style="height: 80px">col-4</p>
        </Col>
    </Row>
</div>
</template>

<script>

export default {
  name: 'top',
  data(){
    return{
      balls: [
        {message:"two"},
        {message:"four"}
      ],
      visible: false
    }
  },
  methods:{
    show: function () {
        this.visible = true;
    },
    bu(){
      // this.balls[1] = 123
      // console.log(this.balls)
      // var _this =this
      this.$set(this.balls,1,123)
    //  this.balls = ["a",1,"b",2]
      
    }
  }
}
</script>

<style lang="less" scoped>
p,h1{text-align: center;}
.ivu-col{
  background: bisque;
  div{
      background: gray;
    }
}
.code-row-bg{
  div:nth-child(1){
    background: red;
    text-align: center;
    color: #fff;
  }
  div:nth-child(2){
    background: orange;
    text-align: center;
    color: #fff;
  }
  div:nth-child(3){
    background: yellow;
    text-align: center;
    color: #fff;
  }
  div:nth-child(4){
    background: green;
    text-align: center;
    color: #fff;
  }
  div:nth-child(5){
    background: blue;
    text-align: center;
    color: #fff;
  }
  div:nth-child(6){
    background: purple;
    text-align: center;
    color: #fff;
  }
  div.ivu-col-md-class-qiqi{
    background: gray;
  }
  div.ivu-col-lg-class-mycol{
    background: green;
  }
}
</style>   