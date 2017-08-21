<template>
  <div>
    <img src="/static/images/join_us/join_us_main_02.png" alt="" class="content">
    <div class="partner">
        <div v-for="(value,index) in join_us" @mouseover="active = index">
            <img :src="value.img" alt="">
            <div>
                <h3>{{value.text_h3}}</h3>
                <p>{{value.text_p}}</p>
            </div> 
        </div>
        <div>

            </div>
    </div>
    <div class="info">
        <h3>我们需要怎样的服务商?</h3>
        <p v-for="(info_val,index) in service_req" v-html="info_val" v-if="active == index">
           {{info_val}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join_us',
  data() {
    return {
        active:0,
      join_us: [
          {
              img:"/static/images/join_us/u3632.png",
              text_h3:"工商注册",
              text_p:"REGISTERED"
          },{
               img:"/static/images/join_us/u3634.png",
               text_h3:"财税服务",
               text_p:"SERVICE"
          },{
              img:"/static/images/join_us/u3636.png",
              text_h3:"知识产权",
              text_p:"INTELLECTUAL PROPERTY"
          },{
               img:"/static/images/join_us/u3638.png",
               text_h3:"人力外包",
               text_p:"HR OUTSOURCING"
          }
          ],//join_us 结束
      service_req:[
          "在商标注册、审计验资等领域深耕多年，具有丰富的知识产权经验;<br>与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
          "在财税服务、版权专利、著作权等领域深耕多年，可以提供涉足各个行业优秀的财会人员；<br>与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
          "在知识产权，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；<br>与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。",
          "在人力外包、人事代理、企业社保、个人社保等领域深耕多年，具有丰富的人力外包经验。"
      ],//service_req 结束
      methods:{
      }
    }
  }
}

</script>


<style scoped lang="less">
.content{width: 100%;}
h3{
    font-size: 18px;
    margin-top: 20px; 
}
.partner{
    width:1200px;
    margin: 40px auto;
    display: flex;
    &>div{
        margin: 0 auto;
        div{
            text-align: center;
            p{
                font-size: 12px;
                color: #a2a2a2;
                line-height: 22px;
            }
        }
        &:hover{
            color: rgb(22, 155, 213);
            p{color: rgb(22, 155, 213);}
        }
    }
    img{
        width: 164px;
        height: 182px;
    }
}
.info{
    text-align: center;
    height: 210px;
    h3{
        line-height: 66px;
    }
    p{
        font-size: 16px;
        line-height: 46px;
    }

}
</style>
