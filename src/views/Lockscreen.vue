<template>
    <div id="lockscreen">
        <div class="center">
            <div class="profile"></div>
            <span class="username">{{ user.firstname }} {{ user.lastname }}</span>
            <input class="password" type="password" v-model="password" placeholder="Enter password" />
        </div>
    </div>
    <Dock />
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { Components } from '@/enums';
    import router from '@/router';
    import { user } from '$/config.json';
    import Dock from '@/components/Dock.vue';

    const password = ref('');

    watch(password, (val) => {
        if (val.length >= 4) {
            router.replace({ name: Components.HOMESCREEN });
        }
    });
</script>

<style lang="scss" scoped>
    #lockscreen {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;

        width: 100%;
        height: 100%;

        .profile {
            width: 175px;
            height: 175px;
            border-radius: 50%;
            background-color: #fff;
            margin: 0 auto;
            margin-top: -110px;
        }

        .username {
            font-size: 24px;
            margin-top: 35px;
            display: block;
        }

        .password {
            width: 170px;
            margin-top: 20px;
            padding: 10px;
            font-size: 14px;
            border-radius: 170px;
            border: none;
        }

        .center {
            text-align: center;
        }
    }
</style>
