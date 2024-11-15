const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};
export const optionsPalette = {
    blue: getCSSVariable('--blue'),
    purple: getCSSVariable('--purple'),
    pink: getCSSVariable('--pink'),
    red: getCSSVariable('--red'),
    orange: getCSSVariable('--orange'),
    yellow: getCSSVariable('--yellow'),
    green: getCSSVariable('--green'),
    teal: getCSSVariable('--teal'),
    cyan: getCSSVariable('--cyan')
}