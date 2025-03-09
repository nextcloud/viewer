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
            autoResize: false,
            darkMode: true
        });
        openSheetMusicDisplay.setLogLevel('debug')
        openSheetMusicDisplay.load(this.src)
            .then(function () {
                openSheetMusicDisplay.render()
                openSheetMusicDisplay.setPageFormat("A4_P")
            })
        console.log(this.src, this.filename, this);

    }
}



</script>

<template>
    <div ref="canvas" style="width: 800px; background: white;"></div>
</template>