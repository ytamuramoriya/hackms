export function usdToDecimal(valor) {
  const decimal = valor.replace(/,/g, '');
  return decimal;
}

export function BRLToDecimal(valor) {
  const decimal = valor.replace('.', '').replace(/,/g, '.');
  return decimal;
}

/**
 * @description Transforma uma string comum em um texto com capitalize
 * @param {String} value
 * @returns {string}
 */
export function capitalize(value = '') {
  // eslint-disable-next-line no-param-reassign
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}