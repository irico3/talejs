import { makeEl } from "../utils/dom";
import styles from "../style.module.css";
import { getTextLayer } from "./textLayer";
import { getClickLayer } from "./clickLayer";

export const makeLayers = (tale: HTMLDivElement) => {
  // 背景layer
  const bgDiv = makeEl(styles.bgLayer, "div");
  tale.appendChild(bgDiv);

  // テキストlayer
  const textLayer = getTextLayer();
  tale.appendChild(textLayer.element);

  // クリック用の透明なレイヤー
  const clickLayer = getClickLayer();
  tale.appendChild(clickLayer.element);

  return { bgDiv, textLayer, clickLayer };
};
