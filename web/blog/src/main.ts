import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import "tailwindcss/tailwind.css"
import './assets/css/tailwind.css'
import { createPinia } from "pinia";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import piniaPluginPersist from "pinia-plugin-persist";
//编辑器相关
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
VueMarkdownEditor.use(createEmojiPlugin());
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
//
import '@/utils/iconList'
const pinia = createPinia();
pinia.use(piniaPluginPersist);

const app = createApp(App);
app.use(router).use(pinia).use(VMdPreview).use(VueMarkdownEditor).component('font-awesome-icon', FontAwesomeIcon).mount("#app");




