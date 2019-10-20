import { currencyToFloat } from 'utils/form';

describe('[utils] form utils', () => {
  it('.currencyToFloat()', () => {
    const result = currencyToFloat('R$ 1.200,00');
    expect(result).toBe('1200.00');
  });

  it('.currencyToFloat() with more 1 float points', () => {
    const result = currencyToFloat('R$ 1.200.400,00');
    expect(result).toBe('1200.400.00');
  });
});
