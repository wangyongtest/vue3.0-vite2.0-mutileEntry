<template>
    <div>{{home}}</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const home = ref<string>('home')
</script>