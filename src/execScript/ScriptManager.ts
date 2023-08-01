import { ClickLayer } from "../draw/clickLayer";
import { TextLayer } from "../draw/textLayer";
import { TextBlock, textBlock } from "./textBlock";

export class ScriptManager {
  #textLayer: TextLayer;
  #clickLayer: ClickLayer;

  constructor(textLayer: TextLayer, clickLayer: ClickLayer) {
    this.#textLayer = textLayer;
    this.#clickLayer = clickLayer;

    this.next = this.next.bind(this);
  }

  index = 0;

  exec() {
    const taleBlocks: TextBlock[] = [
      {
        type: "text",
        text: "長い文章でのテスト長い文章でのテスト長い文章でのテスト長い文章でのテスト長い文章でのテスト",
      },
      { type: "text", text: "i am talejs!" },
      { type: "text", text: "yeah" },
    ];

    const taleBlock = taleBlocks[this.index];
    if (taleBlock.type === "text") {
      textBlock(taleBlock, this.#textLayer, this.#clickLayer, this.next);
    }
  }
  next() {
    this.index++;
    this.exec();
  }
}
