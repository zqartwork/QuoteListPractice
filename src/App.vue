<template>
    <div class="container">
        <app-progress></app-progress>
        <app-text-area></app-text-area>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ProgressBar from './components/progress.vue';
    import textArea from './components/textArea.vue';
    import Footer from './components/footer.vue';

    export default {
        components: {
            'app-progress': ProgressBar,
            'app-text-area': textArea,
            'app-footer': Footer,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap');
    * {
        -webkit-user-select: none;   /* for Chrome */
    }
    html, body {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    .container {
        width: 100%;
        max-width: 1366px;
        margin: 0 auto;
        padding: 14px;
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        margin:80px 0 5px 0;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: rgb(219,219,219);
    }

</style>
