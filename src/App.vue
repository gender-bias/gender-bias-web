<template>
    <div id="app">
        <Header />     
        <div v-if ="sidebar_status">    
            <Sidebar /> 
        </div> 
        <div class = 'main_content'> 
            <Readout @displaySidebar = '_displaySidebar(true)'> </Readout>
        </div> 
        <Footer />
    </div>
</template>

<script>
import Readout from "@/components/Readout.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue"; 

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Readout,
        Sidebar
    },
    data() {
        return {
            sidebar_status: false
        }
    },
    methods: {
        _displaySidebar(data){
            this.sidebar_status = data;
        }
    }
};
</script>

<style>

*{
    padding: 0; 
    margin: 0; 
    box-sizing: border-box;
    list-style: none; 
    text-decoration: none;
}
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
