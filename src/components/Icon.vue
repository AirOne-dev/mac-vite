<template>
    <div :name="icon" class="app-icon" :style="iconStyle" ></div>
</template>

<script setup lang="ts">
    import { Icons } from '@/enums';
    import { computed, defineProps, onMounted, PropType, ref } from 'vue';

    const props = defineProps({
        icon: { type: String as PropType<Icons>, required: true },
        isDocked: { type: Boolean, default: false },
    });

    const iconUrl = ref('');

    onMounted(async () => {
        try {
            const iconModule = await import(`../assets/icons/${props.icon}.svg`);
            iconUrl.value = iconModule.default;
        } catch (e) {
            console.error(e);
        }
    });

    const iconStyle = computed(() => ({
        '--icon-image': `url(${iconUrl.value})`,
    }));
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
