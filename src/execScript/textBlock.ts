import { ClickLayer } from "../draw/ClickLayer";
import { TextLayer } from "../draw/TextLayer";

export type TextBlock = {
  type: "text";
  text: string;
};
export const textBlock = (
  block: TextBlock,
  textLayer: TextLayer,
  clickLayer: ClickLayer,
  next: () => void
) => {
  textLayer.changeText(block.text);
  const textClick = () => {
    if (textLayer.displayCompleted) {
      next();
    } else {
      textLayer.changeTextImmediate(block.text);
      clickLayer.setClickHandler(next);
    }
  };

  clickLayer.setClickHandler(textClick);
};
