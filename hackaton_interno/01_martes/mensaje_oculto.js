// Texto encriptado
const mensajeCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~"


// Clave de reemplazo
const claveReemplazo = {
    '()': ' ', // () se reemplaza por espacio
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '~': 'o',
    '+': 'u',
    '}': 'q',
    '^': 'm',
    '¬': 'ó',
    ']': 'n',
    '=': 't',
    '{': 's',
    '`': 'c',
    '¡': 'd',
    '*': 'p',
    '/': 'l',
    '-': 'h',
    '%': 'b',
    '$': 'r',
    '!': 'j',
    '¿': 'y',
    '#': 'v',
    ';': 'f',
    '__': 'z',
};

// Función para descifrar el mensaje
function descifrarMensaje(mensaje, clave) {
    let mensajeDescifrado = mensaje;

    // Reemplazar '()' primero para evitar conflictos
    mensajeDescifrado = mensajeDescifrado.split('()').join(' ');

    // Reemplazo de cada símbolo según la clave
    for (const [simbolo, letra] of Object.entries(clave)) {
        mensajeDescifrado = mensajeDescifrado.split(simbolo).join(letra);
    }

    return mensajeDescifrado;
}

// Aplicar la función al mensaje encriptado
const mensajeDescifrado = descifrarMensaje(mensajeCifrado, claveReemplazo);
console.log(mensajeDescifrado);
