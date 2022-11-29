const converter = (fromBase, toBase, input) => {
    if (input === "") {
        return "please enter a number first"
    }
    else if (fromBase === toBase) {
        return "Error, cannot convert same bases"
    }
    else if (fromBase === 'Binary') {
        if (toBase === 'Octal') {
            let octal = parseInt(input, 2).toString(8);
            return octal;
        }
        else if (toBase === 'Decimal') {
            let decimal = parseInt(input, 2).toString(10);
            return decimal;
        }
        else if (toBase === 'Hexidecimal') {
            let hexidecimal = parseInt(input, 2).toString(16);
            return hexidecimal
        }
    }
    else if (fromBase === 'Decimal') {
        if (toBase === 'Binary') {
            let binary = parseInt(input, 10).toString(2);
            return binary;
        }
        else if (toBase === 'Octal') {
            let octal = parseInt(input, 10).toString(8);
            return octal;
        }
        else if (toBase === 'Hexidecimal') {
            let hexidecimal = parseInt(input, 10).toString(16);
            return hexidecimal;
        }

    }
    else if (fromBase === 'Octal') {
        if (toBase === 'Binary') {
            let binary = parseInt(input, 8).toString(2);
            return binary;
        }
        else if (toBase === 'Decimal') {
            let decimal = parseInt(input, 8).toString(10);
            return decimal;
        }
        else if (toBase === 'Hexidecimal') {
            let hexidecimal = parseInt(input, 8).toString(16);
            return hexidecimal;
        }
    }
    else if (fromBase === 'Hexidecimal') {
        if (toBase === 'Binary') {
            let binary = parseInt(input, 16).toString(2);
            return binary;
        }
        else if (toBase === 'Octal') {
            let octal = parseInt(input, 16).toString(8);
            return octal;
        }
        else if (toBase === 'Decimal') {
            let decimal = parseInt(input, 16).toString(10);
            return decimal;
        }
    }
}



export default converter;