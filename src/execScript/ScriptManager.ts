import { ClickLayer } from "../draw/ClickLayer";
import { TextLayer } from "../draw/TextLayer";
import { textBlock } from "./textBlock";
import { createTaleBlocks } from "../parser/createTaleBlocks";
import { TaleBlock } from "../types/taleBlock";
import taleFile from "../../sample/test.tale?raw";
import { BgLayer } from "../draw/bgLayer";

export class ScriptManager {
  #textLayer: TextLayer;
  #clickLayer: ClickLayer;
  #bgLayer: BgLayer;
  #taleBlocks: TaleBlock[];

  constructor(textLayer: TextLayer, clickLayer: ClickLayer, bgLayer: BgLayer) {
    this.#textLayer = textLayer;
    this.#clickLayer = clickLayer;
    this.#taleBlocks = createTaleBlocks(taleFile);
    this.#bgLayer = bgLayer;

    this.next = this.next.bind(this);
  }

  index = 0;

  exec() {
    if (this.index >= this.#taleBlocks.length) return;
    const taleBlock = this.#taleBlocks[this.index];
    console.log(taleBlock);
    switch (taleBlock.type) {
      case "text":
        textBlock(taleBlock, this.#textLayer, this.#clickLayer, this.next);
        break;
      case "bg":
        this.#bgLayer.changeColor(taleBlock.color);
        this.next();
        break;
      case "p":
        this.next();
        break;
    }
  }
  next() {
    this.index++;
    this.exec();
  }
}
