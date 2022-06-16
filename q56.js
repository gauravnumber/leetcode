// var merge = function (intervals) {
//   if (!intervals.length) return [];
//   intervals.sort((a, b) => a[0] - b[0]);

//   const result = [intervals[0]];

//   for (let [start, end] of intervals) {
//     if (start <= result[result.length - 1][1]) {
//       const [startPrev, endPrev] = result.pop();
//       result.push([startPrev, Math.max(end, endPrev)]);
//     } else result.push([start, end]);
//   }
//   return result;
// };

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];

  for (let [start, end] of intervals) {
    if (start <= res.at(-1).at(1)) {
      const [startTemp, endTemp] = res.pop();

      res.push([startTemp, Math.max(end, endTemp)]);
    } else {
      res.push([start, end]);
    }
  }

  return res;
}

// I/P: [[1,3],[2,6],[8,10],[15,18]]
// O/P: [[1,6],[8,10],[15,18]]

// I/P: [[1,4],[4,5]]
// O/P: [[1,5]]
