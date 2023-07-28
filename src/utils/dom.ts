export const makeDiv = (className: string) => {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
};
