export default function (element, binding) {
  Object.keys(binding.modifiers).forEach((key) => {
    element.style[key] = '5px';
  });

  element.style.position = 'absolute';
}
