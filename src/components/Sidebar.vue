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
    position: relative; 
    margin: 0;
}

.container .sidebar {
    position: fixed; 
    height: 300px; 
    width: 200px;
    padding:0; 
    vertical-align: middle;
    display: inline-block;
    overflow: scroll;  
    overflow-x: hidden;
    overflow-y: scroll; 
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
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
</style>








<!-- <template>
    <div id = "container"> 
        <button> 
        </button> 
        <p> A </p>
    </div> 

</template>-->





<!--
<template> 
    <sidebar-menu :menu ='sidebar' /> 


</template> 


<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
    components: {
        SidebarMenu
    },
    props: { 
        menu: {
            type: Array, 
            required: true
        },
        collapsed: {
            type: Boolean, 
            default: true
        }, 
        width: {
            type: String, 
            default: '600px'
        }, 
        widthCollapsed: {
            type: String, 
            default: '40px'
        }, 
        rtl: {
            type: Boolean,
            default: false
        }, 
        theme: {
            type: String, 
            default: 'white-theme'
        }, 
        disableHover: {
            type: Boolean, 
            default: false
        }
    }, 
    data() {
        return {
            sidebar: [ 
                    {
                        header: true, 
                        title: 'Issues and Summaries', 
                        hiddenOnCollapse: true,
                        hidden: false
                    }, 
                    {
                        href: '#', 
                        title: 'Nidhi', 
                        icon: 'fa fa-chart'
                        
                    },
                ]
        }
    }
}
</script>



<style> 
.v-sidebar-menu.vsm_collapsed {
    default: true; 
}

</style> 
---> 
