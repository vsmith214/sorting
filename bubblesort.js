function swap(arr, a, b) {
    var swapper;
    // if a > b
    swapper = arr[a];
    arr[a] = arr[b]
    arr[b] = swapper;


}

function bubbleSort(array) {
    // [1, 10, 2, 9, 75, 0]
    debugger
    if (array.length > 1) {
        for (var i = 0; i + 1 < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    swap(array, i, j);
                    // var swapper = array[i];
                    // array[i] = array[j];
                    // array[j] = swapper;
                }
                console.log(array);
            }
        }
    } else {
        return array;
    }
    return array;
}