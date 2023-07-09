'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var createComponent = function (raw) { return vue.markRaw(vue.defineComponent(raw)); };

/**
 * <n-button>
 */
var Button = createComponent({
    name: 'NButton',
    props: {
        type: {
            type: String,
            default: 'plain'
        },
        label: String,
    },
    emits: ['click'],
    setup: function (props, _a) {
        _a.slots; _a.emit;
        return function () {
            return vue.h('div', {
                class: 'n-button'
            }, vue.h('div', {}, props.label));
        };
    }
});

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NButton: Button
});

function install(Vue) {
    for (var c in components) {
        var component = components[c];
        Vue.component(component.name, component);
    }
}

var Nutshell = {
    version: '',
    install: install,
};

exports.NButton = Button;
exports.default = Nutshell;
