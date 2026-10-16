// Instalá ms en este proyecto e importalo como default.
// Creá dos named exports:
// - aMilisegundos(texto): convierte una duración en texto usando ms.
// - aTexto(milisegundos): convierte un número usando ms.
// Las funciones devuelven el resultado; no lo imprimen aquí.

import ms from "ms";

export function aMilisegundos(texto) {
    return ms(texto);
}

export function aTexto(milisegundos) {
    return ms(milisegundos);
}