import rand from './rand.func.js'
function secondary_id() {
    let secondary_id = 'trigger';
    const id_supply = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
        '9', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p', 'a', 's',
        'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b',
        'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C',
        'V', 'B', 'N', 'M'];
    for (let i = 0; i < 5; i++) {
        secondary_id += id_supply[rand(0, id_supply.lenght - 1)];
    }
    return secondary_id;
}
export default secondary_id;