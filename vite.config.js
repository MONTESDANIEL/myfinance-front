// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'), // Ajusta la ruta según tu estructura de carpetas
            '@data': path.resolve(__dirname, './src/data'), // Ajusta la ruta según tu estructura de carpetas
        },
    },
});
