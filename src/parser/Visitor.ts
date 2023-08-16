import { TaleBlock } from "../execScript/type";
import { PrintTextContext } from "./MyGrammarParser";
import MyGrammarVisitor from "./MyGrammarVisitor";

export class Visitor extends MyGrammarVisitor<TaleBlock> {
  visitPrintText: (ctx: PrintTextContext) => TaleBlock = (ctx) => {
    const text = ctx.TEXT().getText();
    return { type: "text", text };
  };
  visitPrintBgTag: (ctx: BgTagContext) => TaleBlock = (ctx) => {
    // console.log(ctx.BG_ATTR().getText());
    return { type: "bg", color: "red" };
  };
  visitPrintPTag?: (ctx: PTagContext) => TaleBlock = (ctx) => {
    return { type: "p" };
  };
}
