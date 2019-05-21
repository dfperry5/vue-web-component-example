import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './VueWebComponent';
// import OtherWebComponent from './components/OtherWebComponent';

const CustomElement = wrap(Vue, VueWebComponent);
// const OtherElement = wrap(Vue, OtherWebComponent);

window.customElements.define('my-custom-element', CustomElement);
// window.customElements.define('my-other-element', OtherElement);
