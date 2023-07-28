import { makeDiv } from "../utils/dom";
import style from "../style.module.css";

export const makeLayers = (tale: HTMLDivElement) => {
  // 背景layer
  const bgLayer = makeDiv(style.bgLayer);
  tale.appendChild(bgLayer);

  // テキストlayer
  const textLayer = makeDiv(style.textLayer);
  tale.appendChild(textLayer);
};
