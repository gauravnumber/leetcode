var eraseOverlapIntervals = function (intervals) {
  // sort by earliest finish time
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0],
    remove = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) remove++;
    else prev = intervals[i];
  }
  return remove;
};

// I/P: [[1,2],[2,3],[3,4],[1,3]]
// O/P: 1

// I/P: [[1,2],[1,2],[1,2]]
// O/P: 2

// I/P: [[1,2],[2,3]]
// O/P: 0
