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
	public static readonly WS = 4;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'[p]'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "INT", "TEXT", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "INT", "TEXT", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,4,30,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,0,1,1,4,1,15,8,1,11,1,12,1,16,1,
	2,4,2,20,8,2,11,2,12,2,21,1,3,4,3,25,8,3,11,3,12,3,26,1,3,1,3,0,0,4,1,1,
	3,2,5,3,7,4,1,0,3,1,0,48,57,2,0,10,10,91,91,2,0,9,10,13,13,32,0,1,1,0,0,
	0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,14,1,0,0,0,5,19,1,0,
	0,0,7,24,1,0,0,0,9,10,5,91,0,0,10,11,5,112,0,0,11,12,5,93,0,0,12,2,1,0,
	0,0,13,15,7,0,0,0,14,13,1,0,0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,
	0,17,4,1,0,0,0,18,20,8,1,0,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,
	21,22,1,0,0,0,22,6,1,0,0,0,23,25,7,2,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,
	24,1,0,0,0,26,27,1,0,0,0,27,28,1,0,0,0,28,29,6,3,0,0,29,8,1,0,0,0,4,0,16,
	21,26,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(MyGrammarLexer._serializedATN);
		}

		return MyGrammarLexer.__ATN;
	}


	static DecisionsToDFA = MyGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}