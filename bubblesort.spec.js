//can handle an empty array 
describe("Bubble Sort", function() {

    beforeAll(function() {
        var sum = 0;
        spyOn(window, 'swap').and.callThrough();
    });

    it('is a function', function() {
        expect(typeof bubbleSort).toBe('function');
    })
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
        // expect(Array.prototype.swap.calls.count()).toEqual(0);
    });

    it("handles array with one element", function() {
        expect(bubbleSort([2])).toEqual([2]);
        // expect(Array.prototype.swap.calls.count()).toEqual(0);

    });

    it("handles an array with many elements", function() {
        expect(bubbleSort([1, 4, 2, 9])).toEqual([1, 2, 4, 9]);
        // expect(Array.prototype.swap.calls.count()).toEqual(1);

    });

    it("handles an array with many elements", function() {
        expect(bubbleSort([1, 10, 2, 9, 75, 0])).toEqual([0, 1, 2, 9, 10, 75]);
        // expect(Array.prototype.swap.calls.count()).toEqual(1);

    });


});