<template>
    <div :name="icon" class="app-icon" :style="'--icon-image: url(assets/img/icons/' + icon + '.svg)'" ></div>
</template>

<script setup lang="ts">
    import { Icons } from '@/enums';
    import { type PropType } from 'vue';

    defineProps({
        icon: { type: String as PropType<Icons>, required: true },
        isDocked: { type: Boolean, default: false },
    });
</script>

<style lang="scss">
    .app-icon {
        width: 40px;
        height: 40px;
        border-radius: 9px;
        background-color: #fff;
        background-image: var(--icon-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:active {
            filter: brightness(0.6);
        }
    }
</style>
