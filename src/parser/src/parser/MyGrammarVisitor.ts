// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { TaleContext } from "./MyGrammarParser";
import { TagContext } from "./MyGrammarParser";
import { TextContext } from "./MyGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MyGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MyGrammarParser.tale`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTale?: (ctx: TaleContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;
}

