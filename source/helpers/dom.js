export default function $(tag) { return document.querySelector(tag); }

$.createElement = (tag, context) => {
  const elem = document.createElement(tag);
  if (context) {
    elem.innerText = context;
  }
  return elem;
};
