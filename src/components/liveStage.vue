<template>
    <div class="container">
        <ul>
            <li v-for="(content, i) in contentArray.slice(0, 10)" :key="i" @click="sliceArray(i)">
                <p class="styled">{{content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {textBus} from './../main'

    export default {
        props: ['contentArray'],
        data: function() {
            return {
                contentArray: [],    
            }
        },
        methods: {
            sliceArray(i){
                let self = this;
                this.contentArray.splice(i, 1);
                console.log(self.contentArray)
                textBus.$emit('deleteText', self.contentArray.length)
            }
        }
    }
</script>

<style scoped>
    ul {
        height: calc(100vh - 100px - 150px - 150px);
        max-height: calc(100vh - 100px - 150px - 150px);
        overflow-y: scroll;
        padding: 0;
    }
    li {
        list-style: none;
        border: 1px solid #e4e4e4;
        padding: 14px;
        display: inline-block;
        width: calc(20% - 14px * 5 / 4);
        text-align: center;
        margin: 7px;

        border-radius: 3px;
        cursor: pointer;
        transition: .2s;
    }
    li:hover {
        background: #ffd4d4;
    }
    p {
        margin: 0;
    }
    .container {
        padding: 0;
        margin-top: 14px;
    }
    @media (max-width: 980px) {
        li {
            width: calc(100% / 3 - 14px * 3 / 2);
        }
    }
    @media (max-width: 500px) {
        li {
            width: 100%;
            margin: 7px 0px;
        }
    }
</style>
