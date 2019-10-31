<template>
    <div class="container">
        <div class="entre-section">
            <form @submit.prevent="submit">
                <textarea name="" id="" placeholder="Please Enter Somthing." v-model="contentText" @keyup.enter.exact="addContent"></textarea>
                <button @click="addContent">Submit</button>
            </form>
        </div>
        <app-live-stage :contentArray="contentArray"></app-live-stage>
        <app-alert-modal :alertModal="alertModal" @closeModal="alertModal = $event" v-if="alertModal"></app-alert-modal>
    </div>
</template>

<script>
    import { textBus } from './../main'
    import liveStage from './liveStage.vue'
    import alertModal from './alertModal.vue'

    export default {
        data: function() {
            return {
                contentText: null,
                contentArray: [],
                alertModal: false,
            }
        },
        components: {
            'app-live-stage': liveStage,
            'app-alert-modal': alertModal,
        },
        methods: {
            addContent() {

                let self = this;
                self.contentText = self.contentText.trim();
                console.log(self.contentArray.length)

                if(0 <= self.contentArray.length && self.contentArray.length < 10){

                    self.contentArray.push(self.contentText);
                    self.contentText = null;
                    
                    var arrayLength = function(){
                        if(self.contentArray.length > 10) {
                            return 10;
                        }
                        if(0 < self.contentArray.length < 10) {
                            return self.contentArray.length;
                        }
                        if(self.contentArray.length < 0) {
                            return 0;
                        }
                    }

                    textBus.$emit('sendText', arrayLength())

                }
                else if (self.contentArray.length < 0){

                    self.contentArray.length = 0

                }
                else if (self.contentArray.length >= 10) {

                    self.contentArray.length = 10;
                    self.alertModal = true;
                    
                }
            }
        }
    }
</script>

<style scoped>
    .entre-section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}
    textarea {
        width: 100%;
        max-width: 800px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        padding: 14px;
        resize: none;
        outline: none;
        display: block;
    }
    button {
        border: none;
        background: lightseagreen;
        border-radius: 35px;
        padding: 8px 20px;
        color: #fff;
        margin: 7px 0;
        outline: none;
    }
</style>
