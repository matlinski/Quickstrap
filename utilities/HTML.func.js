function HTML(tag = "div", attr = "", ...content) {
    let compiler = "";
    const singleGroup = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    compiler += '<' + tag;
    if (tag) {
        if (typeof attr === 'object') {
            for (const [key, value] of Object.entries(attr)) {
                compiler += ' ' + key + '=\'' + value + '\'';
            }
        }
        if (typeof attr !== 'object' && attr !== "/") {
            compiler += ' ' + attr;
        }
        compiler += '>';
        if (!singleGroup.some(function (i) {
            return i === tag;
        })) {
            compiler += content;
            compiler += '</' + tag + '>';
        }
        return compiler;
    }
}

export default HTML;
