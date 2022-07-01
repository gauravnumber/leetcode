#include <iostream>
#include <vector>
using namespace std;

class Solution {
  public:
  int search(vector<int>& nums, int target) {
    int pivot, left = 0, right = nums.size() - 1;
    while (left <= right) {
      pivot = left + (right - left) / 2;
      if (nums[pivot] == target) return pivot;
      if (target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1;
    }
    return -1;
  }
};

int main() {
  vector<int>& numbers = {-1,0,3,5,9,12};

  Solution s;
  int index = s.search(numbers, 9);
  cout<<index;

  return 0;
}