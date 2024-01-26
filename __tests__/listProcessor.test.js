import { processList } from "../listProcessor";

describe('processList', () => {
  test('removes items at positions which are a multiple of 2 or 3', () => {
    const inputList = Array.from(Array(20), (_, index) => index + 1);
    const result = processList(inputList);
    expect(result).toEqual([1, 4, 5, 7, 9, 11, 13, 15, 17, 19]);
  });

  test('emits an error message if the list length is not a multiple of 10', () => {
    const inputList = Array.from(Array(19), (_, index) => index + 1);
    console.error = jest.fn();
    processList(inputList);
    expect(console.error).toHaveBeenCalledWith('Error: The list length must be a multiple of 10.');
  });
});
