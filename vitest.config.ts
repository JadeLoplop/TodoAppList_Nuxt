import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import path from 'path'
import { createPinia } from 'pinia';

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './components'),
            '@stores': path.resolve(__dirname, './stores'),
        },
    }
})