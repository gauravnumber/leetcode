function findMedianSortedArrays(nums1, nums2) {
  let N1 = nums1.length;
  let N2 = nums2.length;
  if (N1 < N2) return findMedianSortedArrays(nums2, nums1); // Make sure A2 is the shorter one.

  let lo = 0, hi = N2 * 2;
  while (lo <= hi) {
    let mid2 = Math.trunc((lo + hi) / 2); // Try Cut 2
    let mid1 = N1 + N2 - mid2; // Calculate Cut 1 accordingly

    let L1 = (mid1 === 0)
      ? Number.MIN_SAFE_INTEGER
      : nums1[Math.trunc((mid1 - 1) / 2)]; // Get L1, R1, L2, R2 respectively
    let L2 = (mid2 === 0)
      ? Number.MIN_SAFE_INTEGER
      : nums2[Math.trunc((mid2 - 1) / 2)];
    let R1 = (mid1 === N1 * 2)
      ? Number.MAX_SAFE_INTEGER
      : nums1[Math.trunc((mid1) / 2)];
    let R2 = (mid2 === N2 * 2)
      ? Number.MAX_SAFE_INTEGER
      : nums2[Math.trunc((mid2) / 2)];

    if (L1 > R2) lo = mid2 + 1; // A1's lower half is too big; need to move C1 left (C2 right)
    else if (L2 > R1) hi = mid2 - 1; // A2's lower half too big; need to move C2 left.
    else return (Math.max(L1, L2) + Math.min(R1, R2)) / 2; // Otherwise, that's the right cut.
  }

  return -1;
}

console.log(
  findMedianSortedArrays(
    [1, 3],
    [2],
  ),
); // => 2.00000

console.log(
  findMedianSortedArrays(
    [1, 2],
    [3, 4],
  ),
); // => 2.50000
