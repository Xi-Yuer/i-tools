/**
 *
 * @param {string} htmlStr 转义html字符，防止xss攻击
 */
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>"|&/g, match => {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '&':
        return '&amp;';
    }
  });
}
/**
 * 
 * @param {string} str 还原html
 */
function htmlUnEscape(str) {
  return str.replace(/ &lt;| &gt; | &quot; | &amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<';
      case '&gt;':
        return '>';
      case '&quot;':
        return '"';
      case '&amp;':
        return '&';
    }
  });
}
module.exprots = {
  htmlEscape,
  htmlUnEscape
};
