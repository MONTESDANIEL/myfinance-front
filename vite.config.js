// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@data': path.resolve(__dirname, './src/data'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@context': path.resolve(__dirname, './src/context'),
            '@api': path.resolve(__dirname, './src/api'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
});
