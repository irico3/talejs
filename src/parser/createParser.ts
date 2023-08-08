import { CharStream, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "./MyGrammarLexer";
import MyGrammarParser from "./MyGrammarParser";
import { Visitor } from "./Visitor";

export const createParser = (input: string) => {
  const chars = new CharStream(input); // replace this with a FileStream as required
  const lexer = new MyGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);
  const tree = parser.tale();

  const visitor = new Visitor();
  visitor.visit(tree);

  // const walker = new ParseTreeWalker();
};
