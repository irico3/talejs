// Generated from ./src/parser/MyGrammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MyGrammarLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly INT = 3;
	public static readonly NEWLINE = 4;
	public static readonly WS = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'['", 
                                                            "']'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "INT", 
                                                             "NEWLINE", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "INT", "NEWLINE", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MyGrammarLexer._ATN, MyGrammarLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MyGrammar.g4"; }

	public get literalNames(): (string | null)[] { return MyGrammarLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MyGrammarLexer.symbolicNames; }
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	public get serializedATN(): number[] { return MyGrammarLexer._serializedATN; }

	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,5,32,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,1,1,1,1,2,4,2,17,8,2,11,2,12,
	2,18,1,3,3,3,22,8,3,1,3,1,3,1,4,4,4,27,8,4,11,4,12,4,28,1,4,1,4,0,0,5,1,
	1,3,2,5,3,7,4,9,5,1,0,2,1,0,48,57,1,0,9,9,34,0,1,1,0,0,0,0,3,1,0,0,0,0,
	5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,0,0,0,5,16,1,0,0,
	0,7,21,1,0,0,0,9,26,1,0,0,0,11,12,5,91,0,0,12,2,1,0,0,0,13,14,5,93,0,0,
	14,4,1,0,0,0,15,17,7,0,0,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,0,18,
	19,1,0,0,0,19,6,1,0,0,0,20,22,5,13,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,23,
	1,0,0,0,23,24,5,10,0,0,24,8,1,0,0,0,25,27,7,1,0,0,26,25,1,0,0,0,27,28,1,
	0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,30,1,0,0,0,30,31,6,4,0,0,31,10,1,0,
	0,0,4,0,18,21,28,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(MyGrammarLexer._serializedATN);
		}

		return MyGrammarLexer.__ATN;
	}


	static DecisionsToDFA = MyGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}