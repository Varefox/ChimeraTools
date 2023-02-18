const query = (qStr, parent = document) => parent.querySelector(qStr);
const style = (element, style) => (Object.assign(element.style, style), element);
const tag = (tag, props = {}) => Object.assign(document.createElement(tag), props);
const append = (parent, ...sibs) => sibs.reduce((p, sib) => (p.appendChild(sib), p), parent);