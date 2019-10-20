/* eslint-disable no-param-reassign */
export const ocurrencesCount = (string, char) => {
  const ocurrences = string.reduce((acc, current) => {
    if (current === char) acc += 1;
    return acc;
  }, 0);
  return ocurrences;
};

export const currencyToFloat = value => {
  const moneyValue = value
    .split('R$')
    .join('')
    .replace(',', '.')
    .replace(' ', '');
  if (ocurrencesCount(moneyValue.split(''), '.') > 1) {
    return moneyValue.replace(moneyValue.charAt(moneyValue.indexOf('.')), '');
  }
  return moneyValue;
};
