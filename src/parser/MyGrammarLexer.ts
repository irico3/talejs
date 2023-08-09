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
	public static readonly INT = 2;
	public static readonly TEXT = 3;
	public static readonly NEWLINE = 4;
	public static readonly WS = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'[name]'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "INT", "TEXT", 
                                                             "NEWLINE", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "INT", "TEXT", "NEWLINE", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,5,40,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,4,1,20,
	8,1,11,1,12,1,21,1,2,4,2,25,8,2,11,2,12,2,26,1,3,3,3,30,8,3,1,3,1,3,1,4,
	4,4,35,8,4,11,4,12,4,36,1,4,1,4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,2,1,0,48,
	57,1,0,9,9,43,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
	0,1,11,1,0,0,0,3,19,1,0,0,0,5,24,1,0,0,0,7,29,1,0,0,0,9,34,1,0,0,0,11,12,
	5,91,0,0,12,13,5,110,0,0,13,14,5,97,0,0,14,15,5,109,0,0,15,16,5,101,0,0,
	16,17,5,93,0,0,17,2,1,0,0,0,18,20,7,0,0,0,19,18,1,0,0,0,20,21,1,0,0,0,21,
	19,1,0,0,0,21,22,1,0,0,0,22,4,1,0,0,0,23,25,9,0,0,0,24,23,1,0,0,0,25,26,
	1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,6,1,0,0,0,28,30,5,13,0,0,29,28,1,
	0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,32,5,10,0,0,32,8,1,0,0,0,33,35,7,1,
	0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,38,1,0,0,
	0,38,39,6,4,0,0,39,10,1,0,0,0,5,0,21,26,29,36,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(MyGrammarLexer._serializedATN);
		}

		return MyGrammarLexer.__ATN;
	}


	static DecisionsToDFA = MyGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}