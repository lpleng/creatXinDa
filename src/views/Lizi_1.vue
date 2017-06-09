<template >
    <Row class="lizi" >
          <col :lg="24">
            <Row>
                    <Col :xs="0" :sm="9" :md="9" class="col1">
                        <div class="div1">
                            123
                        </div>
                    </Col>
                    <Col :xs="24" :sm="9" :md="9" class="col2">
                        <div class="div2">
                            456
                        </div>
                    </Col>
            </Row>
          </col>
    </Row>
</template>
<script>
export default {
 data(){
     return{
     }
 },
 methods:{
    //  check(){
    //      console.log('屏幕宽度', window.innerWidth);
    //  }
 }}
</script>
<style scoped lang = less>
   .col1{
       height: 300px;
       background: pink;
   }
   .col2{
       height: 300px;
       background: yellow;
   }
</style>
