
// 1. Do the below program in anonymous function & IIFE
    // Right rotate an array `k` times

(function () {
    function swap(Arr, i, j)
    {
        let data = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = data;
    }
 
    function reverse(Arr, low, high)
    {
        for (let i = low, j = high; i < j; i++, j--) {
            swap(Arr, i, j);
        }
    }
 
    function rightRotate(Arr, k, n)
    {
        if (k < 0 || k >= n) {
            return;
        }
 
        reverse(Arr, n - k, n - 1);
 
        reverse(Arr, 0, n - k - 1);
 
        reverse(Arr, 0, n - 1);
    }

    let Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let k = 3;
 
    rightRotate(Arr, k, Arr.length);
    console.log(`Output of given array after right rotated each element for ${k} times --> ${Arr}`);
})();

