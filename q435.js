// var eraseOverlapIntervals = function (intervals) {
//   // sort by earliest finish time
//   intervals.sort((a, b) => a[1] - b[1]);
//   let prev = intervals[0],
//     remove = 0;

//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < prev[1]) remove++;
//     else prev = intervals[i];
//   }
//   return remove;
// };

// function eraseOverlapIntervals(intervals) {
//     intervals.sort((a, b) => a[1] - b[1])
//     let remove = 0
//     let prev = intervals[0]

//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] < prev[1]) {
//             remove++
//         } else {
//             prev = intervals[i]
//         }
//     }

//     return remove
// }

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let counter = 0,
    prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      counter++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return counter;
};

// I/P: [[1,2],[2,3],[3,4],[1,3]]
// O/P: 1

// I/P: [[1,2],[1,2],[1,2]]
// O/P: 2

// I/P: [[1,2],[2,3]]
// O/P: 0
