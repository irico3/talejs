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
	public static readonly BG_ATTR = 1;
	public static readonly TEXT = 2;
	public static readonly P_TAG = 3;
	public static readonly BG_TAG = 4;
	public static readonly WS = 5;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tale = 0;
	public static readonly RULE_expr = 1;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'[p]'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "BG_ATTR", 
                                                             "TEXT", "P_TAG", 
                                                             "BG_TAG", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tale", "expr",
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 28) !== 0)) {
				{
				{
				this.state = 4;
				this.expr();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
		this.enterRule(localctx, 2, MyGrammarParser.RULE_expr);
		try {
			this.state = 13;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				localctx = new PrintPTagContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 10;
				this.match(MyGrammarParser.P_TAG);
				}
				break;
			case 4:
				localctx = new PrintBgTagContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 11;
				this.match(MyGrammarParser.BG_TAG);
				}
				break;
			case 2:
				localctx = new PrintTextContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 12;
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

	public static readonly _serializedATN: number[] = [4,1,5,16,2,0,7,0,2,1,
	7,1,1,0,5,0,6,8,0,10,0,12,0,9,9,0,1,1,1,1,1,1,3,1,14,8,1,1,1,0,0,2,0,2,
	0,0,16,0,7,1,0,0,0,2,13,1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,
	1,0,0,0,7,8,1,0,0,0,8,1,1,0,0,0,9,7,1,0,0,0,10,14,5,3,0,0,11,14,5,4,0,0,
	12,14,5,2,0,0,13,10,1,0,0,0,13,11,1,0,0,0,13,12,1,0,0,0,14,3,1,0,0,0,2,
	7,13];

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
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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


export class ExprContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PrintBgTagContext extends ExprContext {
	constructor(parser: MyGrammarParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BG_TAG(): TerminalNode {
		return this.getToken(MyGrammarParser.BG_TAG, 0);
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPrintBgTag) {
			return visitor.visitPrintBgTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintPTagContext extends ExprContext {
	constructor(parser: MyGrammarParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public P_TAG(): TerminalNode {
		return this.getToken(MyGrammarParser.P_TAG, 0);
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPrintPTag) {
			return visitor.visitPrintPTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintTextContext extends ExprContext {
	constructor(parser: MyGrammarParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT(): TerminalNode {
		return this.getToken(MyGrammarParser.TEXT, 0);
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPrintText) {
			return visitor.visitPrintText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
