<script lang='ts'>
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import logger from '../services/logger.js'
import parsePath from 'path-parse'

Vue.use(AsyncComputed)

export default {
    name: 'Sheetmusic',

    computed: {
        name() {
            return parsePath(this.basename).name
        },
        ext() {
            return parsePath(this.basename).ext
        },
        isMusicXml() {
            return (this.ext === '.mxl' || this.ext === '.musicxml');
        }
    },
    mounted() {
        if (this.isMusicXml) {
            const openSheetMusicDisplay = new OpenSheetMusicDisplay(this.$refs.canvas, {
                autoResize: true,
                darkMode: true
            });
            const _this = this;

            logger.debug('Opening music xml file', { filename: this.filename })
            openSheetMusicDisplay.load(this.src)
                .then(() => {
                    logger.debug('Loading complete', {test: this})
                    openSheetMusicDisplay.render();
                    _this.doneLoading();
                })
        } else {
            this.doneLoading();
            this.OCA.Viewer.close();
        }

    },

    beforeDestroy() {
        // Force stop any ongoing request
        logger.debug('Closing file stream', { filename: this.filename })
    },
}



</script>

<template>
    <div v-if="isMusicXml">
        <div class="sheet-container" ref="canvas"></div>
    </div>
</template>

<style scoped lang="scss">
.sheet-container {
    width: 85vw;
    height: 100vh;
}
</style>