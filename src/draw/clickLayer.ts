import { makeEl } from "../utils/dom";
import styles from "../style.module.css";

export type ClickLayer = {
  element: HTMLButtonElement;
  setClickHandler: (handler: () => void) => void;
};

export const getClickLayer = (): ClickLayer => {
  const clickButton = makeEl(styles.clickLayer, "button");
  return {
    element: clickButton,
    setClickHandler: (handler: () => void) => {
      clickButton.addEventListener("click", handler, { once: true });
    },
  };
};
