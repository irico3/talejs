import { ClickLayer } from "../draw/clickLayer";
import { TextLayer } from "../draw/textLayer";
import { textBlock } from "./textBlock";
import { TaleBlock } from "./type";

export class ScriptManager {
  #textLayer: TextLayer;
  #clickLayer: ClickLayer;
  #taleBlocks: TaleBlock[];

  constructor(
    textLayer: TextLayer,
    clickLayer: ClickLayer,
    taleBlocks: TaleBlock[]
  ) {
    this.#textLayer = textLayer;
    this.#clickLayer = clickLayer;
    this.#taleBlocks = taleBlocks;

    this.next = this.next.bind(this);
  }

  index = 0;

  exec() {
    const taleBlock = this.#taleBlocks[this.index];
    console.log(this.#taleBlocks);
    if (taleBlock.type === "text") {
      textBlock(taleBlock, this.#textLayer, this.#clickLayer, this.next);
    }
  }
  next() {
    this.index++;
    this.exec();
  }
}
