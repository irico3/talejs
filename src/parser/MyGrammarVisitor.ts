// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { TaleContext } from "./MyGrammarParser";
import { PrintExprContext } from "./MyGrammarParser";
import { EndLineContext } from "./MyGrammarParser";
import { ExprContext } from "./MyGrammarParser";
import { PrintTagContext } from "./MyGrammarParser";


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
	 * Visit a parse tree produced by the `printExpr`
	 * labeled alternative in `MyGrammarParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.endLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndLine?: (ctx: EndLineContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `printTag`
	 * labeled alternative in `MyGrammarParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintTag?: (ctx: PrintTagContext) => Result;
}

