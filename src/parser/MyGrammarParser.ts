// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MyGrammarVisitor from "./MyGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly INT = 2;
	public static readonly TEXT = 3;
	public static readonly NEWLINE = 4;
	public static readonly WS = 5;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tale = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_endLine = 2;
	public static readonly RULE_expr = 3;
	public static readonly RULE_tag = 4;
	public static readonly literalNames: (string | null)[] = [ null, "'[name]'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "INT", "TEXT", 
                                                             "NEWLINE", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tale", "line", "endLine", "expr", "tag",
	];
	public get grammarFileName(): string { return "MyGrammar.g4"; }
	public get literalNames(): (string | null)[] { return MyGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MyGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MyGrammarParser._ATN, MyGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public tale(): TaleContext {
		let localctx: TaleContext = new TaleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyGrammarParser.RULE_tale);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 10;
					this.line();
					}
					}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 16;
			this.endLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MyGrammarParser.RULE_line);
		try {
			localctx = new PrintExprContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this.expr();
			this.state = 19;
			this.match(MyGrammarParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endLine(): EndLineContext {
		let localctx: EndLineContext = new EndLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MyGrammarParser.RULE_endLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			this.expr();
			this.state = 22;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MyGrammarParser.RULE_expr);
		try {
			this.state = 26;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 24;
				this.tag();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 25;
				this.match(MyGrammarParser.TEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let localctx: TagContext = new TagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MyGrammarParser.RULE_tag);
		try {
			localctx = new PrintTagContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.match(MyGrammarParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,5,31,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,
	1,1,1,1,1,2,1,2,1,2,1,3,1,3,3,3,27,8,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,
	27,0,13,1,0,0,0,2,18,1,0,0,0,4,21,1,0,0,0,6,26,1,0,0,0,8,28,1,0,0,0,10,
	12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,16,
	1,0,0,0,15,13,1,0,0,0,16,17,3,4,2,0,17,1,1,0,0,0,18,19,3,6,3,0,19,20,5,
	4,0,0,20,3,1,0,0,0,21,22,3,6,3,0,22,23,5,0,0,1,23,5,1,0,0,0,24,27,3,8,4,
	0,25,27,5,3,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,7,1,0,0,0,28,29,5,1,0,0,
	29,9,1,0,0,0,2,13,26];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(MyGrammarParser._serializedATN);
		}

		return MyGrammarParser.__ATN;
	}


	static DecisionsToDFA = MyGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class TaleContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public endLine(): EndLineContext {
		return this.getTypedRuleContext(EndLineContext, 0) as EndLineContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_tale;
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitTale) {
			return visitor.visitTale(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_line;
	}
	public copyFrom(ctx: LineContext): void {
		super.copyFrom(ctx);
	}
}
export class PrintExprContext extends LineContext {
	constructor(parser: MyGrammarParser, ctx: LineContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(MyGrammarParser.NEWLINE, 0);
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPrintExpr) {
			return visitor.visitPrintExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndLineContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MyGrammarParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_endLine;
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitEndLine) {
			return visitor.visitEndLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tag(): TagContext {
		return this.getTypedRuleContext(TagContext, 0) as TagContext;
	}
	public TEXT(): TerminalNode {
		return this.getToken(MyGrammarParser.TEXT, 0);
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_expr;
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_tag;
	}
	public copyFrom(ctx: TagContext): void {
		super.copyFrom(ctx);
	}
}
export class PrintTagContext extends TagContext {
	constructor(parser: MyGrammarParser, ctx: TagContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPrintTag) {
			return visitor.visitPrintTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
