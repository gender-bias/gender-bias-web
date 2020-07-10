<template>
    <div id="app">
        <Header v-if = 'header_status'/>     
        <div class = 'main_content'> 
            <Main @hideHeader = '_hideHeader(false)'> </Main>
        </div> 
        <Footer />
    </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "App",
    components: {
        Header,
        Footer,
        Main
    },
    data() {
        return {
            header_status: true
        }
    },
    methods: {
        _hideHeader(data){
            this.header_status = data;
        }
    }
};

</script>

<style>


#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Roboto Slab", Georgia, "Times New Roman";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
}
.main_content {
     margin-left: 50px;
}   
</style>