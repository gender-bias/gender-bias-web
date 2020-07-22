<template>
    <div id = 'summary'>
        <div class = 'issue' v-if = "summary.text.length >= 2" >
            <p class = 'problem'>  {{summary.title}} </p>
            <p class = 'summary'>  &nbsp; {{summary.text}} </p>
        </div> 
    </div> 
</template>

<script>
export default {
    name: "Summary",
    props: {
        summary: {
            type: Object
        }
    },
}
</script>

<style scoped>
.problem {
    font-weight: 650;
    margin-bottom: 4px; 
}
.issue {
    border: 0.5px solid; 
    border-color: rgb(98, 176, 240);
    border-radius: 10px;
    font-size: 11.5px;
    padding: 15px;
    margin-top: 3px; 
    margin-bottom: 3px; 
}
.issue:hover {
    background: rgb(98, 176, 240); 
    color: white; 
    font-weight: 300;
}

</style>
