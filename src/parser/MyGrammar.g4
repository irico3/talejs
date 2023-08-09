grammar MyGrammar;

/**
 * parser
 */
tale: line* endLine;

line: expr NEWLINE #printExpr;
endLine: expr EOF;

expr: tag |
    TEXT
;
tag: '[name]' #printTag;

/**
 * lexer
 */


INT     : [0-9]+ ;
TEXT: .+;
NEWLINE: '\r'? '\n';
WS:[\t]+ -> skip;
