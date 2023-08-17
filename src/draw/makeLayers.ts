import { getClickLayer } from "./ClickLayer";
import { TextLayer } from "./TextLayer";
import { getBgLayer } from "./bgLayer";

export const makeLayers = (tale: HTMLDivElement) => {
  // 背景layer
  const bgLayer = getBgLayer();
  tale.appendChild(bgLayer.element);

  // テキストlayer
  const textLayer = new TextLayer();
  tale.appendChild(textLayer.element);

  // クリック用の透明なレイヤー
  const clickLayer = getClickLayer();
  tale.appendChild(clickLayer.element);

  return { bgLayer, textLayer, clickLayer };
};
