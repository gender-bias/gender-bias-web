<!-- A Blurb is a span that has styling and a tooltip. -->

<template>
    <span style="display: inline" id = "container">
        <!-- The text of the blurb -->
        <span v-if="message.text"
            v-bind:class="getClasses()"
            style="padding: 0 0.1em;"
            v-on:mouseover="hovered"
            v-on:click="hoverLock"
            v-on:mouseout="unhovered"
        >
            {{ message.text }}
        </span>

        <!-- The associated tooltip should be displayed only if 
             there is a problem with the text. -->
        <span v-if="message.issue.problem" id = 'tooltip'>
            <div
                class="tip"
                v-bind:style="{ top: mouseX }"
                v-bind:class="{ visible: ishovering || hoveringLock }"
            >
                <h1>{{ message.issue.category }}</h1>
                <div class="content">
                    <p>{{ message.issue.problem }}</p>
                    <p>{{ message.issue.suggestion }}</p>
                </div>
            </div>
        </span>
    </span>
</template>

<script>
export default {
    name: "Blurb",
    props: {
        message: {
            type: Object
        }
    },
    data() {
        return {
            ishovering: false,
            hoveringLock: false,
            mouseX: 30,
            mouseY: 0
        };
    },
    methods: {
        getClasses() {
            return {
                notice: this.message.issue.problem,
                negativeBias: this.message.issue
                    ? this.message.issue.bias == -1
                    : false,
                positiveBias: this.message.issue
                    ? this.message.issue.bias == 1
                    : false,
                hoveringLock: this.hoveringLock
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
                left: this.mouseX + 200
            };
        }
    }
};
</script>

<style lang='scss'>
$errorful: rgba(172, 0, 0, 0.845);
$warningful: rgba(191, 94, 9, 0.845);
$goodful: rgba(22, 125, 70, 0.845);

a {
    color: #42b1b9;
}
.tip {
    float: right;
    position: absolute;
    width: auto;
    clear: both;
    margin: auto;
    padding: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
    background: mix(lavender, rgb(255, 255, 255), 70%);
    &.visible {
        opacity: 1;
        z-index: 99;
    }
    h1 {
        font-size: 1.2em;
        background: lavender;
        margin-top: 0;
        padding: 0.5em 1em;
    }
    .content {
        padding: 1em;
        text-align: left;
    }
}
.notice {
    transition: background 0.2s;
    background: none;
    cursor: pointer;
    &:hover {
        background: mix(white, $errorful, 70%);
    }
    &.positiveBias {
        border-bottom: 1.5px dotted $goodful;
    }
    &.negativeBias {
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
