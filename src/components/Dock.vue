<template>
    <div 
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @mouseenter="handleMouseEnter"
        class="dock" 
    >
        <Icon 
            v-for="(icon, index) in dock.icons" 
            :key="`${index}-${icon}`" 
            class="dock-icon" 
            :style="{ '--scale': scales[index], '--margin': margins[index] + 'px', '--transition': transitions[index] }"
            :icon="icon as Icons"
        />
    </div>
</template>

<script setup lang="ts">
    import { dock } from '$/config.json';
    import { Icons } from '@/enums';
    import Icon from './Icon.vue';
    import { reactive } from 'vue';

    const scales = reactive(dock.icons.map(() => 1));
    const margins = reactive(dock.icons.map(() => 7));
    const transitions = reactive(dock.icons.map(() => 'all ease .15s'));

    const handleMouseEnter = () => {
        setTimeout(() => {
            scales.forEach((_, index) => {
                transitions[index] = 'none';
            });
        }, 200);
    }
    
    const handleMouseMove = (event: MouseEvent) => {
        if (event.currentTarget === null) return;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const x = event.clientX - rect.left;
        
        scales.forEach((_, index) => {
            const iconCenterX = 50 * index + 80; // 40px (icon) + 10px (margin) * index + 20px (half icon)
            const distance = Math.abs(x - iconCenterX);
            const scale = 1 + Math.max(0, (100 - distance) / 200); // Adjust the scaling formula
            margins[index] = 7 * scale + (margins[index] * (scale - 1)); // Increase margin proportionally with scale
            scales[index] = scale;
        });
    };

    const handleMouseLeave = () => {
        scales.forEach((_, index) => {
            transitions[index] = 'all linear .2s';
            scales[index] = 1;
            margins[index] = 7;
        });
        setTimeout(() => {
            scales.forEach((_, index) => {
                transitions[index] = 'all linear .1s';
            });
        }, 200);
    };

</script>
<style lang="scss">
    .dock {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 0 5px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.1);
        border: solid 1px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 15px;

        &-icon {
            transform: scale(var(--scale)) translateY(calc(var(--scale) * -15px + 15px));
            margin: 0 var(--margin);
            transition: var(--transition);
        }
    }
</style>
