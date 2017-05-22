<template>
  <div>
    <img src="../../images/join_us/join_us.png" alt="" class="content">
    <div class="partner">
        <div>
            <img src="../../images/join_us/u3632.png" alt="">
            <div>
                <h3>工商注册</h3>
                <p>REGISTERED</p>
            </div>
        </div>
        <div>
            <img src="../../images/join_us/u3634.png" alt="">
            <div>
                <h3>财税服务</h3>
                <p>SERVICE</p>
            </div>
        </div>
        <div>
            <img src="../../images/join_us/u3636.png" alt="">
            <div>
                <h3>知识产权</h3>
                <p>INTELLECTUAL PROPERTY</p>
            </div>
        </div>
        <div>
            <img src="../../images/join_us/u3638.png" alt="">
            <div>
                <h3>人力外包</h3>
                <p>HR OUTSOURCING</p> 
            </div>
        </div>
    </div>
    <div class="info">
        <h3>我们需要怎样的服务商</h3>
        <p>
            在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验;<br>
            与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join_us',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
}
.info{
    text-align: center;
    height: 210px;
    h3{
        line-height: 66px;
    }
    p{
        font-size: 16px;
        line-height: 26px;
    }

}
</style>
