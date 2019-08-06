function info(base_class, settings = false) {
    var infoTable = Object.assign({}, settings);
    console.log(' ####################');
    console.log(' #### ' + base_class.toUpperCase() + " ####" + "#".repeat((10 - base_class.length)));
    console.log(' ####################');
    console.log('The default options for this components are: ');

    if (typeof settings === 'object') {

        for (const [key, value] of Object.entries(settings)) {
            if (value == '') {
                infoTable[key] = key + " goes here";
            }
        }
    }

    console.table(infoTable)
}
export default info;