<script lang='ts'>
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import logger from '../services/logger.js'

Vue.use(AsyncComputed)

export default {
    name: 'Sheetmusic',

    components: {
    },
    computed: {
    },

    asyncComputed: {
        async url(): Promise<string> {
            if (this.fallback) {
                return preloadMedia(this.filename)
            } else {
                return this.src
            }
        },
    },
    mounted() {
        const openSheetMusicDisplay = new OpenSheetMusicDisplay(this.$refs.canvas, {
            autoResize: true,
            darkMode: true
        });
        const _this = this;
        openSheetMusicDisplay.load(this.src)
            .then(function () {
                openSheetMusicDisplay.render()
                openSheetMusicDisplay.setPageFormat("A4_P")
                _this.doneLoading()                
            })
    }
}



</script>

<template>
    <div class="sheet-container" ref="canvas"></div>
</template>

<style scoped lang="scss">
.sheet-container {
    width: 85vw;
    height: 100%;
}
</style>