function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // 1. 정렬
  const results: number[][] = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    // 2. i가 중복되면 건너뜀
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // 3. left/right 중복 제거
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++; // 4. 합이 작으면 왼쪽 포인터 증가
      } else {
        right--; // 5. 합이 크면 오른쪽 포인터 감소
      }
    }
  }

  return results;
}
