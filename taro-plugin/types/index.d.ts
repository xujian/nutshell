import type { IPluginContext } from '@tarojs/service';
export type PluginOptions = {
    artifacts: boolean | string[];
};
/**
 * 编译过程扩展
 */
declare const _default: (ctx: IPluginContext, options: PluginOptions) => void;
export default _default;
