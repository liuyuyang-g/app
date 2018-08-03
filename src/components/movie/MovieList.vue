<template>
    <div>
        <ul>
            <!-- <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <div class="movie-img">
                    <img :src="obj.images.small" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.title}}</h3>
                    <p>
                        <span v-for="(val,index) in obj.genres" :key="index">{{val}}</span>
                    </p>
                    <p>
                        <span v-for="(person,index) in obj.casts" :key="index">{{person.name}}</span>
                    </p>
                    <p>今天47家影院放映425场</p>
                </div>
            </li> -->
            <li class="movieList" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
                <div class="movie-img">
                    <img :src="obj.img" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p>
                        <span>类型：{{obj.cat}}</span>
                    </p>
                    <p>
                        <span>主演：{{obj.star}}</span>
                    </p>
                    <p>场次：{{obj.showInfo}}</p>
                </div>
            </li>
            <div>
                <img src="@/assets/loading.gif" alt="" v-show="isShow">
            </div>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    export default {
        data(){
            return{
                movieList:[],
                isShow:false,
                resultLength:0,
            }
        },
        methods:{
            load(){
                axios.get(`./static/data/moviedata${this.movieList.length}.json`).then(res =>{
                    this.movieList =this.movieList.concat(res.data.data.movies);
                    // console.log(res.data);
                    this.resultLength = res.data.data.movies.length;
                    this.isShow = false;
                }).catch(res =>{
                    console.log('获取数据失败')
                })
            },
            goDetail(id){
                this.$router.push(`/movie/movieDetail/${id}`)
            }
        },
        created(){
            /* axios.get(Vue.config.url+'http://api.douban.com/v2/movie/top250?start=0&count=10').then(res =>{
                this.movieList =res.data.subjects;
            }).catch(res =>{
                console.log('获取数据失败')
            }) */
            
            this.load();
            window.onscroll = () => {
                //取到滚动条滚动的高度
                let scrollTop=document.documentElement.scrollTop || document.scrollTop;
                let clientHeight=document.documentElement.clientHeight;
                let height = document.documentElement.scrollHeight;
                /* console.log(scrollTop);
                console.log(clientHeight);
                console.log(height); */
                if(scrollTop+clientHeight==height){
                    if(this.resultLength == 5){
                        this.isShow = true;
                        this.load();
                    }
                }
            }
        },

        
    }
</script>

<style scoped>
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;

    }
    .movie-info span{
        margin-right: .1rem;
    }
</style>