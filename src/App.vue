<template>
    <div id="app">
        <Header />
        <Readout />
        <Footer />
    </div>
</template>

<script>
import Readout from "@/components/Readout.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Readout
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
    margin-top: 60px;
}
</style>
