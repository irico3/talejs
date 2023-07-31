import { makeEl } from "../utils/dom";
import style from "../style.module.css";

export type TextLayer = {
  element: HTMLDivElement;
  changeText: (text: string) => void;
};
export const getTextLayer: () => TextLayer = () => {
  const textDiv = makeEl(style.textLayer, "div");
  return {
    element: textDiv,
    changeText: (text: string) => {
      textDiv.innerHTML = "";
      const p = document.createElement("p");
      p.textContent = text;
      textDiv.appendChild(p);
    },
  };
};
