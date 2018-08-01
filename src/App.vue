<template>
  <div id="app">
    <common-header :bg="bgColor" :title="title1"></common-header>
    <router-view/>
    <common-footer :bg="bgColor" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      bgColor:'deepskyblue',
      title1:'Movie'
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
  methods:{
    fn(color,title){
      this.bgColor = color;
      this.title1 = title
    }
  },
  created(){
    let url = this.$route.path;
    let arr = url.split('/')[1];  //['','music','musiclist']=>'music'

    switch(arr){
      case 'music':
        this.bgColor = '#31c27c';
        break;
      case 'movie':
        this.bgColor = 'deepskyblue';
        break;  
      case 'book':
        this.bgColor = '#ccc';
        break;
      case 'photo':
        this.bgColor = 'red';
        break;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  font-size: .32rem
}
</style>
