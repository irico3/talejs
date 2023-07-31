import { ClickLayer } from "../draw/clickLayer";
import { TextLayer } from "../draw/textLayer";

export const execScript = (
  textLayer: TextLayer,
  clickLayer: ClickLayer,
  index: number = 0
) => {
  const taleBlocks = [
    { type: "text", text: "Hello, world!" },
    { type: "text", text: "i am talejs!" },
    { type: "text", text: "yeah" },
  ];
  const taleBlock = taleBlocks[index];
  if (taleBlock.type === "text") {
    textLayer.changeText(taleBlock.text);
    clickLayer.setClickHandler(() => {
      execScript(textLayer, clickLayer, index + 1);
    });
  }
};
