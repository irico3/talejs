type MakeEl = <K extends keyof HTMLElementTagNameMap>(
  className: string,
  elementType: K
) => HTMLElementTagNameMap[K];

export const makeEl: MakeEl = (className, elementType) => {
  const div = document.createElement(elementType);
  div.classList.add(className);
  return div;
};
