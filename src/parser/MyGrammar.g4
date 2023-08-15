grammar MyGrammar;

/**
 * parser
 */
tale: expr*;

expr: tag #printTag
    | TEXT #printText
;
tag: '[p]';

/**
 * lexer
 */


INT     : [0-9]+ ;
TEXT: ~('['|'\n')+;
WS:[\t\r\n]+ -> skip;
