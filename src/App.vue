<template>
    <div id="app">
<!--        <a href="#" @click="setLocale('ru')">ru</a>-->
<!--        <a href="#" @click="setLocale('en')">en</a>-->
        <!--        <img alt="Vue logo" src="assets/logo.png">-->
        <!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <About/>
    </div>
</template>

<script>
    import About from "./components/about/About";

    export default {
        name: 'app',
        components: {
            About,
        },
        created() {
            const lang = localStorage.getItem("language");
            if (lang && ((lang === 'ru') ||  (lang === 'en'))){
                this.$i18n.locale = lang;
                document.querySelector('html').setAttribute('lang', lang)
            }
        },
        methods: {
            setLocale(lang) {
                this.$i18n.locale = lang;
                localStorage.setItem('language', lang);
                document.querySelector('html').setAttribute('lang', lang)
            }
        }
    }
</script>

<style>
    @import "./assets/fonts/brandon/stylesheet.css";

    html {
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
        height: 100%;
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Brandon Grotesqu", sans-serif;

        font-weight: 300;
        box-sizing: border-box;
        font-style: normal;
        overflow-y: auto;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
        width: 100%;
        height: 100%;
    }

    #app {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/

    }
</style>
