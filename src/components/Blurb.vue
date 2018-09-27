<template>
    <span style="display: inline">
        <span
            v-bind:class="getClasses()"
            style="padding: 0 0.1em;"
            v-on:mouseover="hovered"
            v-on:click="hoverLock"
            v-on:mouseout="unhovered"
        >{{ message.text }}</span>

        <span v-if="message.issue">
            <div
                class="tip"
                v-bind:style="{ top: mouseX }"
                v-bind:class="{ visible: ishovering || hoveringLock }"
            >
                <h1>{{message.issue.category}}</h1>
                <p>{{message.issue.issue}}</p>
                <p>{{message.issue.suggestion}}</p>
            </div>
        </span>
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
            hoveringLock: false,
            mouseX: 30,
            mouseY: 0,
        }
    },
    methods: {
        getClasses() {
            return {
                issue: this.message.issue,
                negative: this.message.issue ? this.message.issue.bias == -1 : false,
                positive: this.message.issue ? this.message.issue.bias == 1 : false,
                hoveringLock: this.hoveringLock,
            };
        },
        hovered() {
            this.ishovering = true;
        },
        unhovered() {
            this.ishovering = false;
        },
        hoverLock() {
            this.hoveringLock = !this.hoveringLock;
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
$goodful: rgba(22, 125, 70, 0.845);

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
    pointer-events: none;
    transition: opacity 0.2s;
    &.visible {
        opacity: 1;
    }
}

.issue {
    transition: background 0.2s;
    background: none;
    cursor: pointer;
    &:hover {
        background: mix(white, $errorful, 70%);
    }
    &.positive {
        border-bottom: 1.5px dotted $goodful;
    }
    &.negative {
        border-bottom: 1.5px dotted $errorful;
    }

    &.hoveringLock {
        box-shadow: 0 0 0.1em rgba(100, 100, 100, 0.5);
        background: mix(red, lavender, 5%);
        &:after {
            content: "🔒";
            position: absolute;
            margin-top: -01em;
        }
    }

}
</style>
