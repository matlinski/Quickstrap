import info from '../utilities/info.js'
import rand from '../utilities/rand.func.js'
function Component(input, def, base_class) {
    let output = [];
    var s = '';
    if (typeof input === 'string') {
        try {
            s = JSON.parse(input);

        }
        catch (e) {
            if (input) {
                def["content"] = input;
            }
            info(base_class, def);
        }
    }
    if (Array.isArray(input)) {
        let i = 0;
        for (const [key, value] of Object.entries(def)) {
            if (i < input.length) {
                def[key] = input[i];
                i++
            }
        }
    }
    else if (typeof input === 'object') {
        def = { ...def, ...input }
    } else {
        for (const [key, value] of Object.entries(s)) {
            def[key] = value;
        }
    }
    output["id"] = base_class;
    const id_supply = ['0', '1', '2', '3', '4', '5', '6', '7',
        '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x',
        'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y',
        'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
        'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    for (let i = 0; i < 8; i++) {
        output["id"] += id_supply[rand(0, (id_supply.length - 1))];
    }

    for (const [key, value] of Object.entries(def)) {
        output[key] = value;
    }

    if (typeof trigger_id !== 'undefined' && trigger_id.length > 0) {
        output["id"] = trigger_id;
    }
    if (output["style"] !== undefined) {
        if (typeof output["style"] === 'object') {
            let style_compiler = "";
            for (const [key, value] of Object.entries(output["style"])) {
                style_compiler += "#" + output["id"] + `.${base_class}${key.replace(/[&]/g, "")}{${value}}`;
            }
            output["style"] = style_compiler;

        } else {

            let style_compiler = "";
            style_compiler = output["style"].replace(/[&]/g, `#${output["id"]}.${base_class}`);
            output["style"] = style_compiler;
        }
    }
    if (output["script"] !== undefined) {
        if (typeof output["script"] === 'object') {
            let script_compiler = "";

            for (const [key, value] of Object.entries(output["script"])) {
                script_compiler += key.replace(/[$]/g, '$(\'#' + output["id"] + '\')' + value);
            }
            output["script"] = script_compiler;

        } else {

            output["script"] = output["script"].replace(/[$]/g, '$(\'#' + output["id"] + '\')');
        }
    }
    output["parent"] = 'body';
    return output;
}
export default Component;