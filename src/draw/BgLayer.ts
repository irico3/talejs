import { makeEl } from "../utils/dom";
import styles from "../style.module.css";

export type BgLayer = {
  element: HTMLDivElement;
  changeColor: (color: string) => void;
};
export const getBgLayer = (): BgLayer => {
  const bgLayer = makeEl(styles.bgLayer, "div");
  bgLayer.classList.add("bgLayer");
  return {
    element: bgLayer,
    changeColor: (color: string) => {
      bgLayer.style.backgroundColor = color;
    },
  };
};
