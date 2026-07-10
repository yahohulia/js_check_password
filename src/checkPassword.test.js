'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for a short password without special characters (qwerty)`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for a password that lacks numbers or sufficient length (Str@ng)`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });
});
