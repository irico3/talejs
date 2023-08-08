import { TextBlock } from "../execScript/textBlock";
import { TaleContext } from "./MyGrammarParser";
import MyGrammarVisitor from "./MyGrammarVisitor";

export class Visitor extends MyGrammarVisitor<TextBlock> {
  visitTale: (ctx: TaleContext) => TextBlock = (ctx) => {
    // const text = ctx.text();
    return { type: "text", text: "aaa" };
  };
}
