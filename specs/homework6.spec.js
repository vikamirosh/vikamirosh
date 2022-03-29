import { sumPoints } from '../src/homework6';

const students = {
        Anna: 10,
        Olga: 1,
        Ivan: 5,
        }

describe('summing the points', () => {
    test('summing student points', () => {
        expect(sumPoints(students)).toEqual(16);
    });
});
