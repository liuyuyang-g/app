<template>
    <div>
        <div class="container">
            <div class="image">
                <img :src="movieDetail.img" alt="">
            </div>
            <div class="wrapper1">    
                <h3>{{movieDetail.nm}}</h3>
                <p>{{movieDetail.sc}}</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>

        </div>
        <div class="content">
            <h2>主演</h2>
            <p>{{movieDetail.star}}</p>
       </div>
    </div>
</template>

<script>
    import axios from 'axios';    
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created(){
            axios.get(`./static/data/moviedetail.json?movieid=${this.$route.params.movieid}`).then(res =>{
                this.movieDetail = res.data.data.MovieDetailModel
            }).catch(res =>{

            })
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
    }
    .image{
        flex-grow: 1;
    }
    .wrapper1{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
    }
    .wrapper1 h3,.wrapper1 p{
        margin-bottom: .4rem;
        margin-right: .2rem;
    }
    .content{
        text-align: center;
    }
</style>