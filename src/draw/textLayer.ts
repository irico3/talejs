import { makeEl } from "../utils/dom";
import style from "../style.module.css";

export class TextLayer {
  element = makeEl(style.textLayer, "div");
  displayCompleted = false;

  changeText = async (text: string) => {
    const WAIT_TIME = 30;

    this.element.innerHTML = "";
    const p = document.createElement("p");
    this.element.appendChild(p);
    const textSplit = text.split("");
    const textLength = textSplit.length;
    for (let i = 0; i < textLength; i++) {
      p.textContent = `${p.textContent}${textSplit.shift()}`;
      await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));
    }
    this.displayCompleted = true;
  };

  changeTextImmediate = (text: string) => {
    this.element.innerHTML = "";
    const p = document.createElement("p");
    this.element.appendChild(p);
    p.textContent = text;
    this.displayCompleted = true;
  };
}
