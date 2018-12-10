<template>
    <div>
        <div style="display: inline-block; width: 60px; text-align: center" v-for="iconName in iconArr" :key="iconName">
            <span :class="`i-${iconName}`"></span>
        </div>
    </div>
</template>

<script>
import { iconArr } from './config.js'

export default {
    name: "IconDemo",
    data(){
        return {
            iconArr: iconArr,
        }
    }
}
</script>