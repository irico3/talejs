import { makeDiv } from "../utils/dom";
import style from "../style.module.css";
import { getTextLayer } from "./TextLayer";

export const makeLayers = (tale: HTMLDivElement) => {
  // 背景layer
  const bgDiv = makeDiv(style.bgLayer);
  tale.appendChild(bgDiv);

  // テキストlayer
  const textLayer = getTextLayer(makeDiv(style.textLayer));
  tale.appendChild(textLayer.element);

  return { bgDiv, textLayer };
};
