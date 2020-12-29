import Validator from '../app';

test('Проверка правильного формата имени', () => {
  const result = new Validator('An-12_07-ton').validateUsername();

  expect(result).toBe('An-12_07-ton');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('12-An_07-ton').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('An-12_ton-07').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('An_1207-ton').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('-An12_07-ton').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('An-12_07-ton_').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

test('Проверка неправильного формата имени', () => {
  const result = new Validator('Ан-12_07-тон').validateUsername();

  expect(result).toBe('Неверный формат имени');
});

// test('Проверка имени пользователя MaxPayne', () => {
//   const newUser = new Validator('Max72Payne');
//   const received = newUser.validateUsername();
//   const expected = true;
//   expect(received).toEqual(expected);
// });
