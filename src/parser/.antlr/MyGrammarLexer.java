// Generated from /Users/k002265/project/talejs/src/parser/MyGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MyGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BG_ATTR=1, TEXT=2, P_TAG=3, BG_TAG=4, WS=5;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"BG_ATTR", "TEXT", "P_TAG", "BG_TAG", "WS", "COLOR", "INT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'[p]'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "BG_ATTR", "TEXT", "P_TAG", "BG_TAG", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MyGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MyGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\7E\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\3\6\3\34\n\3\r\3\16\3\35\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\6\6\6-\n\6\r\6\16\6.\3\6\3\6\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7?\n\7\3\b\6\bB\n\b\r\b\16\bC\2\2\t\3\3"+
		"\5\4\7\5\t\6\13\7\r\2\17\2\3\2\5\5\2\f\f]]__\4\2\13\f\17\17\3\2\62;\2"+
		"G\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\3\21\3"+
		"\2\2\2\5\33\3\2\2\2\7\37\3\2\2\2\t#\3\2\2\2\13,\3\2\2\2\r>\3\2\2\2\17"+
		"A\3\2\2\2\21\22\7e\2\2\22\23\7q\2\2\23\24\7n\2\2\24\25\7q\2\2\25\26\7"+
		"t\2\2\26\27\7?\2\2\27\30\3\2\2\2\30\31\5\r\7\2\31\4\3\2\2\2\32\34\n\2"+
		"\2\2\33\32\3\2\2\2\34\35\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36\6\3\2"+
		"\2\2\37 \7]\2\2 !\7r\2\2!\"\7_\2\2\"\b\3\2\2\2#$\7]\2\2$%\7d\2\2%&\7i"+
		"\2\2&\'\7\"\2\2\'(\3\2\2\2()\5\3\2\2)*\7_\2\2*\n\3\2\2\2+-\t\3\2\2,+\3"+
		"\2\2\2-.\3\2\2\2.,\3\2\2\2./\3\2\2\2/\60\3\2\2\2\60\61\b\6\2\2\61\f\3"+
		"\2\2\2\62\63\7t\2\2\63\64\7g\2\2\64?\7f\2\2\65\66\7i\2\2\66\67\7t\2\2"+
		"\678\7g\2\289\7g\2\29?\7p\2\2:;\7d\2\2;<\7n\2\2<=\7w\2\2=?\7g\2\2>\62"+
		"\3\2\2\2>\65\3\2\2\2>:\3\2\2\2?\16\3\2\2\2@B\t\4\2\2A@\3\2\2\2BC\3\2\2"+
		"\2CA\3\2\2\2CD\3\2\2\2D\20\3\2\2\2\7\2\35.>C\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}