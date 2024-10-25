// Variables generales de uso en el proyecto, 

const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export const movementPalette = {
    income: {
        1: getCSSVariable('--green-300'),
        2: getCSSVariable('--green-400'),
        3: getCSSVariable('--green-600'),
    },
    savings: {
        1: getCSSVariable('--cyan-300'),
        2: getCSSVariable('--cyan-400'),
        3: getCSSVariable('--cyan-600'),
    },
    expense: {
        1: getCSSVariable('--pink-300'),
        2: getCSSVariable('--pink-400'),
        3: getCSSVariable('--pink-600'),
    }
};

export const goalsPalette = {
    blue: getCSSVariable('--blue'),
    indigo: getCSSVariable('--indigo'),
    pink: getCSSVariable('--pink'),
    red: getCSSVariable('--red'),
    orange: getCSSVariable('--orange'),
    yellow: getCSSVariable('--yellow'),
    green: getCSSVariable('--green'),
    teal: getCSSVariable('--teal'),
    cyan: getCSSVariable('--cyan')
}
