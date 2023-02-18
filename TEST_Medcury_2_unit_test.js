const { interesting_time } = require('./Test_Mecury_2');

describe('interesting_time', () => {
  it('returns 1 for the time period from 15:15:00 to 15:15:12', () => {
    expect(interesting_time('15:15:00', '15:15:12')).toBe(1);
  });

  it('returns 3 for the time period from 22:22:21 to 22:22:23', () => {
    expect(interesting_time('22:22:21', '22:22:23')).toBe(3);
  });

  it('returns 16 for the time period from 12:00:00 to 12:59:59', () => {
    expect(interesting_time('12:00:00', '12:59:59')).toBe(16);
  });
});
