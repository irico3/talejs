// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { TaleContext } from "./MyGrammarParser";
import { TagContext } from "./MyGrammarParser";
import { TextContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export default class MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.tale`.
	 * @param ctx the parse tree
	 */
	enterTale?: (ctx: TaleContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.tale`.
	 * @param ctx the parse tree
	 */
	exitTale?: (ctx: TaleContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;
}

