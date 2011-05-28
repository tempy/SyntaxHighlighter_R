/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'if else repeat while function for in next break repeat';

		var constants =	'TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_';

		function parseFunctions(match, regexInfo)
		{
			return new SyntaxHighlighter.Match(match[1], match.index, 'functions');
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' },		// keyword
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },		// constants
			{ regex: new RegExp('([\\w\\.]+)\\(', 'gm'),				func: parseFunctions},	// functions
			{ regex: /^(&gt;|>|\+) /gm,									css: 'color3 bold' },	// head of line
			{ regex: /^\[\d+\] /gm,										css: 'color1'},			// offset number
			{ regex: /(&lt;|<){1,2}\-|\-(&gt;|>){1,2}|=/gm,				css: 'color1' },		// Assignment Operators: -> ->> <- <<- =
			{ regex: /(&lt;|<|&gt;|>)=?|[=!]=/gm,						css: 'color1' },		// Relational Operators: < > <= >= == !=
			{ regex: /(!|(&amp;|&){1,2}|\|{1,2})/gm,					css: 'color1' },		// Logical Operators   : ! & && | ||
			{ regex: /([\+\-\*\/\^]|%\/?%)/gm,							css: 'color1' },		// Arithmetic Operators: + - * / ^ ** %% %/%
			{ regex: /([\$~@]|:{1,3}|%(\*|o|x|in)%)/gm,					css: 'color1' },		// other Operators: $ ~ @ : :: ::: %*% %in% %o% %x%
			
			];
		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['r', 'R'];

	SyntaxHighlighter.brushes.R = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
