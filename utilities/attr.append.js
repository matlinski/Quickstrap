function attr_append(attr, base_attributes = {}) {
    let attr_match = {};
    let attr_compiler = '';
    if (typeof attr === 'object') {
        attr_match = { ...base_attributes, ...attr }
    } else if (attr.length) {
        attr = attr.split(' ');
        attr.forEach(function (value) {
            attr_match[value.match(/([^']*?)=[^']*?[\"\']([^']*?)[\"\']/)[1]] = value.match(/([^']*?)=[^']*?[\"\']([^']*?)[\"\']/)[2];
        });
        attr_compiler = { ...base_attributes, ...attr_match };
    }
    if (!(attr.length > 0)) {
        attr_match = base_attributes;
    }
    for (const [key, value] of Object.entries(attr_match)) {
        attr_compiler += " " + key + "=\"" + value + "\"";
    }
    return attr_compiler;
}
export default attr_append;