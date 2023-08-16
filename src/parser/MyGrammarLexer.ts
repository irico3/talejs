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
	public static readonly BG_ATTR = 1;
	public static readonly TEXT = 2;
	public static readonly P_TAG = 3;
	public static readonly BG_TAG = 4;
	public static readonly WS = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'[p]'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "BG_ATTR", 
                                                             "TEXT", "P_TAG", 
                                                             "BG_TAG", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"BG_ATTR", "TEXT", "P_TAG", "BG_TAG", "WS", "COLOR", "INT",
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

	public static readonly _serializedATN: number[] = [4,0,5,67,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,1,1,4,1,26,8,1,11,1,12,1,27,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,4,4,4,43,8,4,11,4,12,4,44,1,4,1,4,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,61,8,5,1,6,4,6,64,8,6,11,6,12,6,65,0,
	0,7,1,1,3,2,5,3,7,4,9,5,11,0,13,0,1,0,3,3,0,10,10,91,91,93,93,2,0,9,10,
	13,13,1,0,48,57,69,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
	1,0,0,0,1,15,1,0,0,0,3,25,1,0,0,0,5,29,1,0,0,0,7,33,1,0,0,0,9,42,1,0,0,
	0,11,60,1,0,0,0,13,63,1,0,0,0,15,16,5,99,0,0,16,17,5,111,0,0,17,18,5,108,
	0,0,18,19,5,111,0,0,19,20,5,114,0,0,20,21,5,61,0,0,21,22,1,0,0,0,22,23,
	3,11,5,0,23,2,1,0,0,0,24,26,8,0,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,
	0,0,0,27,28,1,0,0,0,28,4,1,0,0,0,29,30,5,91,0,0,30,31,5,112,0,0,31,32,5,
	93,0,0,32,6,1,0,0,0,33,34,5,91,0,0,34,35,5,98,0,0,35,36,5,103,0,0,36,37,
	5,32,0,0,37,38,1,0,0,0,38,39,3,1,0,0,39,40,5,93,0,0,40,8,1,0,0,0,41,43,
	7,1,0,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,1,
	0,0,0,46,47,6,4,0,0,47,10,1,0,0,0,48,49,5,114,0,0,49,50,5,101,0,0,50,61,
	5,100,0,0,51,52,5,103,0,0,52,53,5,114,0,0,53,54,5,101,0,0,54,55,5,101,0,
	0,55,61,5,110,0,0,56,57,5,98,0,0,57,58,5,108,0,0,58,59,5,117,0,0,59,61,
	5,101,0,0,60,48,1,0,0,0,60,51,1,0,0,0,60,56,1,0,0,0,61,12,1,0,0,0,62,64,
	7,2,0,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,14,1,
	0,0,0,5,0,27,44,60,65,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(MyGrammarLexer._serializedATN);
		}

		return MyGrammarLexer.__ATN;
	}


	static DecisionsToDFA = MyGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}