import { CharStream, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "./MyGrammarLexer";
import MyGrammarParser from "./MyGrammarParser";

export const createParser = () => {
  const input = "your text to parse here";
  const chars = new CharStream(input); // replace this with a FileStream as required
  const lexer = new MyGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);
  // const tree = parser.MyStartRule();
};
