
function somar (valor) {
    let u
    if (0 >= valor) {
        return "não é possivel identificar"
    } 
    for (let i = 3; i < valor; i++) {
        if (i % 3 == 0 || i % 5 == 0)
             u+=i
    }
    return u;
}