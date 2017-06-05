<template>
    <div class="head3_right">
        <select class="select" @mouseover="getProvince()" v-model='curProvince' v-on:change="changeCitys">
            <option v-for='pro in allprovince'>{{pro}}</option>
        </select>
        <select class="select" v-model='curCity' v-on:change="changeAreas">
            <option v-for="ci in belongCities">{{ci}}</option>
        </select>
        <select class="select" v-model='curArea'>
            <option v-for="ar in belongAreas">{{ar}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'threeLinkage',
    data() {
        return {
            provinceList: citysList,//引入全部的省市区
            allprovince: ['北京'],//全部的省
            curProvince: '北京',
            belongCities: ['市辖区'],//目标省的市
            cityData: [],// 当前市的数据
            curCity: '市辖区',
            belongAreas: ['东城区'],//目标市的区
            areaData: [],//当前地区数据
            curArea: '东城区'
        }
    },
    methods: {
        getProvince() {//获取全部的省
            var len = this.provinceList.length;
            this.allprovince = [];
            for (var i = 0; i < len; i++) {
                this.allprovince[i] = this.provinceList[i].name;
            }
        },
        changeCitys() {//市联动切换
            var cityList = [];//当前省所属的城市列表
            var cityNameList = [];
            var len = this.provinceList.length;
            for (var i = 0; i < len; i++) {//获取全部的市
                if (this.curProvince == this.provinceList[i].name) {
                    cityList = this.provinceList[i].cityList;
                    for (let o of cityList) {
                        cityNameList.push(o.name);
                    }
                    break;
                }
            }
            this.belongCities = cityNameList;//获取全部所属市的名字列表
            this.curCity = cityNameList[0];//默认为第一个市为当前显示的市
            this.cityData = cityList;//获取全部所属市以及所辖区
            this.curArea = cityList[0][0];//默认的区
            this.changeAreas();
        },
        changeAreas() {//区联动切换
            var arList = [];//
            var areaNameList = [];
            var len = this.belongCities.length;
            for (var i = 0; i < len; i++) {
                if (this.curCity == this.cityData[i].name) {
                    arList = this.cityData[i].areaList;
                    for (let o of arList) {
                        areaNameList.push(o);
                    }
                    break;
                }
            }
            this.belongAreas = areaNameList;
            this.curArea = areaNameList[0];
        }
    }

}

</script>


<style scoped lang='less'>

</style>