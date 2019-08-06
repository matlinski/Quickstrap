function compiler(scheme = null) {

    let compiler = "";
    for (const [key, value] of Object.entries(scheme)) {
        if (value["condition"]) {
            compiler += value.line;
        }
    }

    return compiler;
}
export default compiler;