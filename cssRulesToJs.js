String.prototype.cssRulesToJsEquivalent = function() {
	return this.replace(/\-[a-z]/ig, function(s){return s[1].toUpperCase();});
}
var str = "border-Top-left-Radius";
str = str.cssRulesToJsEquivalent();
alert(str);
