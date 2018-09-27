<template>
    <div id="app">
        <h1>genderbias</h1>
        <Readout />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Readout from './components/Readout.vue';

export default {
    name: 'app',
    components: {
        Readout,
    }
}
</script>

<style>

* {
    box-sizing: border-box;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
