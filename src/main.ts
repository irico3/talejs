import style from "./style.module.css";
import "./global.css";
import { makeLayers } from "./draw/makeLayers";
import { setRatio } from "./draw/setRatio";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constant";
import { ScriptManager } from "./execScript/ScriptManager";
import { createTaleBlocks } from "./parser/createTaleBlocks";
import taleFile from "../sample/test.tale?raw";

const makeTaleBase = () => {
  const tale = document.querySelector<HTMLDivElement>("#tale");
  if (!tale) throw new Error("target element not found");
  tale.style.width = SCREEN_WIDTH.toString() + "px";
  tale.style.height = SCREEN_HEIGHT.toString() + "px";

  tale.classList.add(style.tale);
  setRatio(tale);
  return tale;
};

const tale = makeTaleBase();
const { textLayer, clickLayer } = makeLayers(tale);

const taleBlocks = createTaleBlocks(taleFile);

const scriptManager = new ScriptManager(textLayer, clickLayer, taleBlocks);

scriptManager.exec();
