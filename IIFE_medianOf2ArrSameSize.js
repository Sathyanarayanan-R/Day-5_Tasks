// 1. Do the below program in anonymous function & IIFE
//    f. Return median of two sorted arrays of the same size.

const resMedian =   (function (){
    function getMedian(a,b,startA,startB,endA,endB)
    {
        if (endA - startA == 1) {
            return (
                       Math.max(a[startA],
                                b[startB])
                       + Math.min(a[endA], b[endB]))
                / 2;
        }

        let m1 = median(a, startA, endA);
        let m2 = median(b, startB, endB);

        if (m1 == m2) {
            return m1;
        }
        else if (m1 < m2) {
            return getMedian(
                a, b, (endA + startA + 1) / 2,
                startB, endA,
                (endB + startB + 1) / 2);
        }
        else {
            return getMedian(
                a, b, startA,
                (endB + startB + 1) / 2,
                (endA + startA + 1) / 2, endB);
        }
    }

    function median(arr,start,end)
    {
        let n = end - start + 1;
        if (n % 2 == 0) {
            return (
                       arr[start + (n / 2)]
                       + arr[start + (n / 2 - 1)])
                / 2;
        }
        else {
            return arr[start + n / 2];
        }
    }
  
    let ar1 = [ 1, 2, 3, 6 ];
    let ar2 = [ 4, 6, 8, 10 ];
    let n1 = ar1.length;
    let n2 = ar2.length;
    
    if (n1 != n2) {
            return "Doesn't work for arrays of unequal size";
    }
    else if (n1 == 0) {
            return "Arrays are empty";
    }
    else if (n1 == 1) {
            return (ar1[0] + ar2[0]) / 2;
    }
    else {
            return "Median is " + getMedian(ar1, ar2, 0, 0, ar1.length - 1, ar2.length - 1);
    }
})();

console.log(resMedian);
