<template>
    <div class ='container'>
        <div class = 'sidebar'> 
            <h1> Summaries and Issues </h1> 
            <ul class = 'issues'>
                
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
                <li> issue </li>
            </ul>
        </div> 
    </div> 

</template>

<script>
export default {
    data() {
       
    }
}
</script>

<style lang = 'scss' scope>

.container {
    position: fixed; 
    margin: 0;
}

.container .sidebar {
    position: fixed; 
    height: 100%; 
    width: 260px;
    top: 0;
    left: 0;
    z-index: 1;
    padding:0; 
    vertical-align: middle;
    display: inline-block;
    
}
.container .sidebar h1{
    color: black; 
    text-transform: uppercase; 
    text-align: center; 
    margin-top: 0px; 
}
.container .sidebar ul li{
    padding: 0px; 
    color: black; 
    margin-left: 0px;
    margin-top: 20px;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.05); 
    border-top: 1px solid rgba(225,225,225, 0.05);
}
.container .sidebar ul li:hover{
    background: rgba(55, 56, 56, 0.71)
}

</style>



