// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { TaleContext } from "./MyGrammarParser";
import { PrintPTagContext } from "./MyGrammarParser";
import { PrintBgTagContext } from "./MyGrammarParser";
import { PrintTextContext } from "./MyGrammarParser";


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
	 * Visit a parse tree produced by the `printPTag`
	 * labeled alternative in `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintPTag?: (ctx: PrintPTagContext) => Result;
	/**
	 * Visit a parse tree produced by the `printBgTag`
	 * labeled alternative in `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintBgTag?: (ctx: PrintBgTagContext) => Result;
	/**
	 * Visit a parse tree produced by the `printText`
	 * labeled alternative in `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintText?: (ctx: PrintTextContext) => Result;
}

