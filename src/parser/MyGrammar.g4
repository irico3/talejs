grammar MyGrammar;

/**
 * parser
 */
tale: expr*;

expr: P_TAG #printPTag
    | BG_TAG #printBgTag
    | TEXT #printText
;






/**
 * lexer
 */

BG_ATTR: 'color='COLOR;


TEXT: ~('['|'\n'| ']')+;

P_TAG: '[p]';
BG_TAG: '[bg ' BG_ATTR ']';

WS:[\t\r\n]+ -> skip;

fragment COLOR: 'red' | 'green' | 'blue';
fragment INT  : [0-9]+ ;
