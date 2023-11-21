import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    presets: [presetUno()],
    shortcuts: {
        "text-h1": "text-8 font-bold",
        "text-h2": "text-6 font-bold",
        "text-h3": "text-5",
        "text-p": "text-4",
        "text-link": "text-blue-500 hover:underline",
    },
});
