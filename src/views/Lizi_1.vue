<template>
    <Row :gutter="16">
        <Col :min="8" :lg="12" class="a">
            <div class="aa">
                123
            </div>
        </Col>
        <!--<Col :md="12" class="b">
            <div class="aaa">
               456
            </div>
        </Col>-->
        <!--<Col :xs="2" :sm="4" :md="6" :lg="8" class="c">Col</Col>-->
    </Row>
</template>
<script>
export default {
 data(){
     return{
     }
 }
}
</script>
<style scoped lang = less>
    .a{
        background: pink;
    .aa{
        width: 100px;
        height: 100px;
        background: yellow;
     }
    }
    .b{
        background: blue;
     .aaa{
         width: 100px;
         height: 100px;
         background: red;
     }
    }
</style>
