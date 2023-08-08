grammar MyGrammar;

/**
 * parser
 */
tale: tag #printTag;
text: .*NEWLINE? #printText;
tag: '[' .* ']' #printTag;

/**
 * lexer
 */


INT     : [0-9]+ ;
NEWLINE: '\r'? '\n' ;
WS:[\t]+ -> skip;
