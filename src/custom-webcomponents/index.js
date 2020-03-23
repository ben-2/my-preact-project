export default class extends HTMLElement {}

import { HelloComp, ElementPreact } from './hello.js';
customElements.define("x-example", HelloComp);
customElements.define("element-preact", ElementPreact);