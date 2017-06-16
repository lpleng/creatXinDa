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
  <Col span="6" offset="3"><div style="background:red">1 | offset Col-1</div></Col>
  <Col span="6" offset="1"><div>2 | Col-2 offset</div></Col>
  <Col span="6"><div style="background:blue">3 | offset Col-4</div></Col>
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
      <Col span="24"><Button type="info" @click="bu">信息按钮</Button></Col>
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
        <Col :xs="1"  :sm="{span:'2'}" :md="4" :lg="{span:'6'}"><p style="height: 80px">col-1</p></Col>
        <Col :xs="1" :sm="2" :md="4" :lg="6"><p style="height: 80px">col-2</p></Col>
        <Col :xs="1" :sm="2" :md="4" :lg="6"><p style="height: 80px">col-3</p></Col>
        <Col :xs="{span:1}" :md="{span:4,class:'qiqi'}" :lg="{class:'mycol',span:6}">
            <p style="height: 80px">col-4</p>
        </Col>
    </Row>

    <layout></layout><br>
    <button  @click="$router.push({name:'Home',query:{time:123}})">这是1</button><br>
    <button @click="$router.push({name:'Lizi',query:{weight:34781}})">这是2</button><br>
    <button>这是3</button>
    <Alert>消息提示文案</Alert>
    <Alert type="success">成功提示文案</Alert>
    <Alert type="warning">警告提示文案</Alert>
    <Alert type="error">错误提示文案</Alert>
    <Alert>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success">
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning">
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error">
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
    <div id="ceshi" style="width: 10rem;height: 10rem;background: pink;border: 10px solid #999;margin: 100px auto;">
    <Button type="primary" @click="info">显示普通提醒</Button>
    <Button @click="success">显示成功提示</Button>
    <Button @click="warning">显示警告提示</Button>
    <Button @click="error">显示错误提示</Button>
    </div>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>


    <Button @click="modal2 = true">自定义页头和页脚</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>此任务删除后，下游 10 个任务将无法执行。</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">不带标题栏</Button>
    <Modal v-model="modal3">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal4 = true">国际化</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">设置宽度</Button>
    <Modal
        v-model="modal5"
        title="自定义宽度"
        width="300">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
    </Modal>
</div>
</template>

<script>
import layout from "./layput.vue"
export default {
  name: 'top',
  data(){
    return{
      balls: [
        {message:"two"},
        {message:"four"}
      ],
      visible: false,
      modal1: false,
      modal2: false,
      modal_loading: false,
      modal3: false,
      modal4: false,
      modal5: false
    }
  },
  components:{
    layout
  },
  methods:{
    show: function () {
        this.visible = true;
    },
    info(){
      this.$Message.info("这是一条普通的提醒")
    },
    ok () {
        this.$Message.info('点击了确定');
    },
    cancel () {
        this.$Message.info('点击了取消');
    },
    del () {
        this.modal_loading = true;
        setTimeout(() => {
            this.modal_loading = false;
            this.modal2 = false;
            this.$Message.success('删除成功');
        }, 2000);
    },
    bu(){
    this.$set(this.balls,1,123)
    this.$router.push({name:"Home"})
    console.log(12)
    },
    success () {
        this.$Message.success({content:'对方不想说话，并且向你抛出了一个异常',duration:100});
    },
    warning () {
        this.$Message.warning({content:'对方不想说话，并且向你抛出了一个异常',duration:100});
    },
    error () {
        this.$Message.error({content:'对方不想说话，并且向你抛出了一个异常',duration:100});
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