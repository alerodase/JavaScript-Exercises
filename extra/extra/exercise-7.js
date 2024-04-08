// Dado el siguiente string


const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`


// transformalo en el siguiente (Mayusculas incluidas)

// `Gracioso Pero No Gracioso De Risa Gracioso De Raro`

function transformText(text) {
    const words = text.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedWords.join(' ');
}
console.log(transformText(text));
