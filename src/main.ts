import style from "./style.module.css";
import "./global.css";
import { makeLayers } from "./draw/makeLayers";
import { setRatio } from "./draw/setRatio";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constant";

const tale = document.querySelector<HTMLDivElement>("#tale");
if (!tale) throw new Error("target element not found");
tale.style.width = SCREEN_WIDTH.toString() + "px";
tale.style.height = SCREEN_HEIGHT.toString() + "px";

tale.classList.add(style.tale);

const { textLayer } = makeLayers(tale);
setRatio(tale);

textLayer.addText("Hello, world!");
