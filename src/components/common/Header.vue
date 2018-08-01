<template>
    <div>
        <div :style="{'background':bg}" class="header">
            <span class="header-home">&lt;首页</span>
            <span class="header-title">{{title}}</span>
            <span class="header-space"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','bg']
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        display: flex;
        line-height: 1rem;
        color:#fff;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .header-home,.header-space{
        width:1.5rem;
        text-indent: .2rem;
    }
    .header-title{
        flex-grow: 1;
        text-align: center;
    }
    
</style>