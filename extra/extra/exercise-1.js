function splitName(fullName) {
    const spaceIndex = fullName.indexOf(' ');
    const firstName = fullName.substring(0, spaceIndex);
    const lastName = fullName.substring(spaceIndex + 1);
    return [firstName, lastName];
}

// Ejemplo de uso
const fullName = 'Sylvester Stalone';
const [firstName, lastName] = splitName(fullName);
console.log('Nombre:', firstName);
console.log('Apellido:', lastName);

