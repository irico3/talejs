import { TaleBlock } from "../execScript/textBlock";
import { PrintTextContext, TagContext, TaleContext } from "./MyGrammarParser";
import MyGrammarVisitor from "./MyGrammarVisitor";

export class Visitor extends MyGrammarVisitor<TaleBlock> {
  // visitTale: (ctx: TaleContext) => TaleBlock = (ctx) => {
  //   // const text = ctx.text();
  //   return { type: "text", text: "aaa" };
  // };
  visitPrintText: (ctx: PrintTextContext) => TaleBlock = (ctx) => {
    const text = ctx.TEXT().getText();
    return { type: "text", text };
  };
  visitPrintTag: (ctx: TagContext) => TaleBlock = (ctx) => {
    return { type: "tag" };
  };
}
