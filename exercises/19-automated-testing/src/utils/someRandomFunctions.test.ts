/**
 * Each file has it's own scope. I can't access something from another
 * file unless I import it, because it is out of scope.
 * Including the functions from `exercises/27-unit-testing/unit-testing.js`
 * so that I can test.
 */
import { add, subtract, isEvenNumber, findAdults } from "./someRandomFunctions";

describe("Unit Testing", () => {
  // Example
  describe("add", () => {
    test("should add two numbers", () => {
      const sum = add(2, 3);
      expect(sum).toBe(5);
    });
  });

  /**
   * Write a unit test for `subtract` here.
   * @see https://jestjs.io/docs/using-matchers
   */
  
    describe("subtract", () => {
      test("should subtract the second number from the first", () => {
        const difference = subtract(7, 3);
        expect(difference).toBe(4);
      }) 
    })


  /**
   * Write two tests for `isEvenNumber` here:
   * - The first should test if `isEvenNumber` returns true for even numbers
   * - The second should test if `isEvenNumber` returns false for odd numbers
   * @see https://jestjs.io/docs/using-matchers
   */

  describe("isEvenNumber", () => {
    test("should tell if number is even or odd", () => {
      const even = isEvenNumber(4);
      expect(even).toBeTruthy();
      const odd = isEvenNumber(3);
      expect(odd).toBeFalsy();
    })
  })

  describe("findAdults", () => {
    // Remove the `.skip` when you are ready to write this test
    test("should find, in a multidimensional array, all the people older than 18", () => {
      /**
       * Complete the unit test for `findAdults` here.      
       * Hint: You should not use `.toBe()` for this
       * @see https://jestjs.io/docs/using-matchers
       * @see https://jestjs.io/docs/expect
       */

      const people = [
        { name: "Janet", age: 43 },
        { name: "Aiden", age: 10 },
        { name: "Chloe", age: 16 },
      ];
      const adults = findAdults(people);
      expect(adults).toEqual([{"age": 43, "name": "Janet"}]);
    });

    // Remove the `.skip` when you are ready to write this test
    test("should return an empty array if no adults are found", () => {
      /**
       * Complete the unit test for `findAdults` here, where you use a different assertion than `.toBe()`
       * @see https://jestjs.io/docs/using-matchers
       * @see https://jestjs.io/docs/expect
       */
      const people = [
        { name: "Liam", age: 3 },
        { name: "Emma", age: 17 },
        { name: "Ethan", age: 8 },
      ];
      const adults = findAdults(people);
      expect(adults).toEqual([]);
    });
  });
});
