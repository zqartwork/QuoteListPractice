<template>
    <div class="container">
        <div class="title-section"><span>Quotes Added Practice</span></div>
        <!-- 動態進度條 -->
        <div class="progress-bar">
            <div class="thumb" :style="{width: progress / 10 * 100 + '%'}">
                <span v-if="progress > 0">{{ progress }} / 10</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { textBus } from './../main'

    export default {
        data: function(){
            return {
                textItem: 0,
            }
        },
        created() {
            textBus.$on('sendText', (textItem) => {
                this.textItem = textItem;
            });
            textBus.$on('deleteText', (textItem) => {
                this.textItem = textItem;
            });
        },
        computed: {
            progress() {
                if (this.textItem < 0) {
                    return 0;
                }
                else if (0 < this.textItem <= 10) {
                    return this.textItem;
                }
                else if (this.textItem > 10) {
                    return 10;
                }
            },
        },
        
    }
</script>

<style scoped>
    .title-section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 24px;
        font-weight: 700;
        color: #333;
    }
    .progress-bar {
        background-color: #f4f4f4;
        height: 32px;
        width: 100%;
        border: 0;
        border-radius: 32px;
        overflow: hidden;

        margin: 14px 0;
        box-shadow: none;
    }
    .thumb {
        width: 10%;
        height: 32px;
        background-color: lightseagreen;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;

        transition: .5s;
    }
    span {
        white-space: nowrap;
    }
</style>
