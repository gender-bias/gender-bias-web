<template>
    <span style="display: inline">
        <span
            v-bind:class="{ issue: message.issue }"
            style="padding: 0 0.1em;"
            v-on:mouseover="hovered"
            v-on:mouseout="unhovered"
            v-on:mousemove="mousemove"
        > {{ message.text }} </span>

        <div
            class="tip"
            v-bind:style="{ top: mouseX }"
            v-bind:class="{ visible: ishovering && message.issue }"
        >{{message.issue.issue}}</div>
    </span>


</template>

<script>
export default {
    name: 'Readout',
    props: {
        message: {
            type: Object
        },
    },
    data() {
        return {
            ishovering: false,
            mouseX: 30,
            mouseY: 0,
        }
    },
    methods: {
        hovered() {
            this.ishovering = true;
        },
        unhovered() {
            this.ishovering = false;
        },
        mousemove(ev) {
            this.mouseX = ev.pageX;
            document.documentElement.style.setProperty('--mouse-x', ev.pageX);
            this.mouseY = ev.pageY;
        },
        getPos() {
            return {
                top: this.mouseY + 200,
                left: this.mouseX + 200,
            }
        }
    }
}
</script>


<style lang='scss'>

$errorful: rgba(172, 0, 0, 0.845);
$warningful: rgba(191, 94, 9, 0.845);

a {
  color: #42b983;
}

.tip {
    float: right;
    position: absolute;
    width: auto;
    clear: both;
    margin: auto;
    background: lavender;
    padding: 1em;
    opacity: 0;
    transition: opacity 0.2s;
}
.tip.visible {
    opacity: 1;
}

.issue {
    border-bottom: 1.5px dotted $errorful;
    transition: background 0.2s;
    background: none;
    cursor: pointer;
    &:hover {
        background: mix(white, $errorful, 70%);
    }
}
</style>
