<template>
    <div class="modal-section">
        <div class="modal-closer" @click.stop="closeModal">
            <div class="modal-body">
                <div class="txt">Is already full, please start a new page.</div>
                <button @click.stop="closeModal">Got it!</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['closeModal'],
    data: function() {
        return {
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal', false)
        }
    }
    
}
</script>
<style scoped>
    .modal-section {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
    }
    .modal-closer {
        background: rgb(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-body {
        background: #f4f4f4;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        max-height: 200px;
        max-width: 400px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    button {
        border: none;
        background: lightseagreen;
        color: #fff;
        padding: 8px 20px;
        border-radius: 35px;
        margin-top: 14px;

        outline: none;
    }
</style>