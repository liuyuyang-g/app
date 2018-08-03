<template>
    <div class="musiclist">
        <!-- <div v-for="(obj,index) in musiclist" :key="index">
            <p>{{obj.name}}</p>
            <img src="../../../static/img/chinese_music.jpg" alt="">
            <img src="../../../static/img/ktv_music.jpg" alt="">
            <img src="../../../static/img/my_music.jpg" alt="">
            <img src="../../../static/img/new_music.jpg" alt="">
            <img src="../../../static/img/original_music.jpg" alt="">
            <img src="../../../static/img/soar_music.jpg" alt="">
        </div> -->
        <img :src="obj.bg" alt="" v-for="(obj,index) in musiclist" :key="index" @click="musicDetail(obj.id)">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                musiclist:[]
            }
        },
        created(){
            axios.get('./static/data/musiclist.json').then(res => {
                this.musiclist = res.data.albums
                // console.log(res.data.albums);
            }).catch(res =>{
                console.log('数据获取失败');
            })
        },
        methods:{
            musicDetail(id){
                this.$router.push(`/music/musicdetail/${id}`)
            }
        }
    }
</script>

<style scoped>
    .musiclist img{
        width:50%;
        display: block;
        float: left;
    }
</style>