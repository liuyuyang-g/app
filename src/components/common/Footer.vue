<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','deepskyblue','Movie')"><router-link to="/movielist">电影</router-link></li>
            <li @click="$emit('change','#31c27c','Music')"><router-link to="/music/musiclist">音乐</router-link></li>
            <li @click="$emit('change','#ccc','Book')"><router-link to="/book/booklist">书籍</router-link></li>
            <li @click="$emit('change','red','Photo')"><router-link to="/photo/photolist">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg','title']
    }
</script>

<style scoped>
    .footer{
        font-size: .32rem;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: .6rem;
        font-size: .35rem;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }

</style>