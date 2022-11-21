const binaryToDecimal = (binary) => {
    var decimal = parseInt(binary, 2).toString(10);
    return decimal
}

const binaryToOctal = (binary) => {
    var octal = parseInt(binary, 2).toString(8);
    return octal
}


export { binaryToDecimal, binaryToOctal };