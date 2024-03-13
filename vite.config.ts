import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// module.exports = {
//   publicPath: "./",
//   lintOnSave: false,
//   configureWebpack: {
//     resolve: {
//       alias: {
//       // src下的文件夹
//         assets: "@/assets",
//         components: "@/components",
//         views: "@/views",
//       },
//     },
//   },
// };
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	optimizeDeps: {
		include: ['schart.js']
	}
});
