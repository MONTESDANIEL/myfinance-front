const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export const optionsPalette = {
    blue: getCSSVariable('--blue-2'),
    purple: getCSSVariable('--purple-2'),
    pink: getCSSVariable('--pink-2'),
    red: getCSSVariable('--red-2'),
    orange: getCSSVariable('--orange-2'),
    yellow: getCSSVariable('--yellow-2'),
    green: getCSSVariable('--green-2'),
    teal: getCSSVariable('--teal-2'),
    cyan: getCSSVariable('--cyan-2')
}