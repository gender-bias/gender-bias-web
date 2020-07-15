<template>
    <div id = 'summary'>
        <div class = 'issue' v-if = "summary.text.length >= 2" >
            <h4> <strong> {{summary.title}} </strong> </h4> 
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
.issue {
    border: 0.5px solid; 
    border-color: grey; 
    margin-top: 3px; 
    margin-bottom: 3px; 
}
.issue:hover {
    background: rgb(98, 176, 240); 
    color: white; 
    
}

</style>