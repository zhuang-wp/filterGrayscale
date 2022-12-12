var style = document.createElement("style");
style.setAttribute("type", "text/css");
var cssString = "*{filter:none !important;-webkit-filter: none !important;}";
if (style.styleSheet) {
  // IE
  style.styleSheet.cssText = cssString;
} else {
  // w3c
  var cssText = document.createTextNode(cssString);
  style.appendChild(cssText);
}
var heads = document.getElementsByTagName("head");
if (heads.length) heads[0].appendChild(style);
else document.documentElement.appendChild(style);
