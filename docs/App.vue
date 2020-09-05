<template>
    <div class="page">
        <h1>Hello Crisp Chat !</h1>
        <button @click="load">Load</button>
        <button @click="toggle">Toggle</button>
        <button @click="open">Open</button>
        <button @click="close">Close</button>
        <button @click="show">Show</button>
        <button @click="hide">Hide</button>
    </div>
</template>

<script>
export default {
    methods: {
        load() {
            this.$crisp.load(CRISP_WEBSITE_ID)
        },
        toggle() {
            this.$crisp.do("chat:toggle")
        },
        open() {
            this.$crisp.do("chat:open")
        },
        close() {
            this.$crisp.do("chat:close")
        },
        show() {
            this.$crisp.do("chat:show")
        },
        hide() {
            this.$crisp.do("chat:hide")
        }
    },
    created() {
        this.$crisp.$on('loaded', () => {
            console.log('crisp chat is loaded !')
        })
    }
}
</script>
